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
  if (location.pathname === '/business') {
    const script = document.createElement('script');
    script.src = `/business-bridge.js?v=${Date.now()}`;
    document.head.appendChild(script);
  }
})();

/* Page-specific AI imagery */
(() => {
  const path = location.pathname.replace(/\/$/,'') || '/';
  const assets = {about:'/assets/ai-cleanroom-about.jpg',business:'/assets/ai-business-engineering.jpg',projects:'/assets/ai-project-installation.jpg',contact:'/assets/ai-contact-consultation.jpg'};
  const key = path.slice(1); if (!assets[key]) return;
  const add = () => {
    if (document.querySelector('.page-media-visual')) return;
    const img = document.createElement('img'); img.className='page-media-visual'; img.src=assets[key]; img.alt='이상이엔지 엔지니어링 현장';
    const style=document.createElement('style'); style.textContent='.page-media-visual{display:block;width:min(1180px,88vw);height:clamp(180px,30vw,360px);object-fit:cover;border-radius:18px;margin:0 auto 38px;box-shadow:0 16px 34px rgba(16,36,61,.12)}.biz-media-visual{width:100%;max-height:300px;object-fit:cover;border-radius:16px;margin:0 0 28px;display:block}'; document.head.appendChild(style);
    if (key === 'business') { const heading=document.querySelector('.biz-heading'); if(heading){const wrap=document.createElement('div');wrap.className='biz-media-wrap';wrap.appendChild(img);heading.after(wrap);img.className='biz-media-visual';} }
    else { const root=document.querySelector('#root'); if(!root)return; const existing=root.querySelector('img[alt="클린룸 시공 현장"]'); if (key==='about' && existing) { existing.src=assets[key]; existing.removeAttribute('srcset'); return; } const head=root.querySelector('.page-head') || root.querySelector('main > section'); if(head) head.after(img); else root.querySelector('main')?.prepend(img); }
  };
  setTimeout(add,800); setTimeout(add,2200);
})();
