(() => {
  const URL = 'https://knormndeorczxgwqvkol.supabase.co';
  const KEY = 'sb_publishable_Dx6cuRP7CgJUwQlj67OFyQ_viNQ1SyL';
  const attach = () => {
    if (!location.hash.includes('/contact') && !location.pathname.includes('/contact')) return;
    document.querySelectorAll('form').forEach(form => {
      if (form.dataset.supabaseAttached) return;
      const fields = [...form.querySelectorAll('input, select, textarea')];
      if (fields.length < 4) return;
      form.dataset.supabaseAttached = 'true';
      form.addEventListener('submit', async event => {
        event.preventDefault();
        event.stopImmediatePropagation();
        const value = i => fields[i]?.value?.trim() || '';
        const row = { company: value(0), name: value(1), phone: value(2), email: value(3), inquiry_type: value(4), message: value(fields.length - 1) };
        if (!row.company || !row.name || !row.phone || !row.message) {
          alert('필수 항목을 모두 입력해 주세요.');
          return;
        }
        try {
          const response = await fetch(`${URL}/rest/v1/inquiries`, {
            method: 'POST',
            headers: { apikey: KEY, Authorization: `Bearer ${KEY}`, 'Content-Type': 'application/json', Prefer: 'return=minimal' },
            body: JSON.stringify(row)
          });
          if (!response.ok) throw new Error(await response.text());
          form.reset();
          alert('문의가 접수되었습니다. 담당자가 확인 후 연락드리겠습니다.');
        } catch (error) {
          console.error('Supabase inquiry error', error);
          alert('문의 접수에 실패했습니다. 잠시 후 다시 시도해 주세요.');
        }
      }, true);
    });
  };
  new MutationObserver(attach).observe(document.documentElement, { childList: true, subtree: true });
  window.addEventListener('hashchange', () => setTimeout(attach, 300));
  setTimeout(attach, 500);
})();
