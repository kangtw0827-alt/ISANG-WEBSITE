(() => {
  const URL = 'https://knormndeorczxgwqvkol.supabase.co';
  const KEY = 'sb_publishable_Dx6cuRP7CgJUwQlj67OFyQ_viNQ1SyL';
  const record = () => {
    const path = `${location.pathname}${location.hash || ''}`.slice(0, 500);
    fetch(`${URL}/rest/v1/rpc/increment_page_view_count`, {
      method: 'POST',
      keepalive: true,
      headers: { apikey: KEY, Authorization: `Bearer ${KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ p_path: path })
    }).catch(() => {});
  };
  record();
  window.addEventListener('hashchange', record);
})();
