(() => {
  const SUPABASE_URL = 'https://knormndeorczxgwqvkol.supabase.co';
  const SUPABASE_KEY = 'sb_publishable_Dx6cuRP7CgJUwQlj67OFyQ_viNQ1SyL';
  const originalFetch = window.fetch.bind(window);
  window.fetch = async (input, init) => {
    const url = typeof input === 'string' ? input : input?.url || '';
    if (url.includes('/api/trpc') && url.includes('projects.list')) {
      const response = await originalFetch(`${SUPABASE_URL}/rest/v1/projects?select=*&order=created_at.desc&limit=100`, {
        headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}` }
      });
      const data = await response.json();
      return new Response(JSON.stringify({ result: { data: { json: data } } }), { status: response.ok ? 200 : response.status, headers: { 'Content-Type': 'application/json' } });
    }
    return originalFetch(input, init);
  };
  const clean = () => {
    document.querySelectorAll('button, a').forEach(el => {
      if (el.textContent?.trim().includes('관리자 로그인')) el.remove();
    });
    document.querySelectorAll('img').forEach(img => {
      if ((img.src || '').includes('about-team')) {
        img.style.objectFit = 'contain';
        img.style.height = 'auto';
        img.style.aspectRatio = 'auto';
      }
    });
  };
  new MutationObserver(clean).observe(document.documentElement, { childList: true, subtree: true });
  setTimeout(clean, 300);
})();
