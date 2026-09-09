(() => {
  const URL = 'https://knormndeorczxgwqvkol.supabase.co';
  const KEY = 'sb_publishable_Dx6cuRP7CgJUwQlj67OFyQ_viNQ1SyL';
  const key = 'isang_visitor_id';
  let visitorId = localStorage.getItem(key);
  if (!visitorId) {
    visitorId = crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    localStorage.setItem(key, visitorId);
  }
  const device = /Mobi|Android/i.test(navigator.userAgent) ? 'mobile' : 'desktop';
  const record = () => {
    const path = `${location.pathname}${location.hash || ''}`.slice(0, 500);
    fetch(`${URL}/rest/v1/page_views`, {
      method: 'POST',
      keepalive: true,
      headers: { apikey: KEY, Authorization: `Bearer ${KEY}`, 'Content-Type': 'application/json', Prefer: 'return=minimal' },
      body: JSON.stringify({ visitor_id: visitorId, path, referrer: document.referrer.slice(0, 500), device_type: device })
    }).catch(() => {});
  };
  record();
  window.addEventListener('hashchange', record);
})();
