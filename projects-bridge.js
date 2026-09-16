(() => {
  const SUPABASE_URL = 'https://knormndeorczxgwqvkol.supabase.co';
  const SUPABASE_KEY = 'sb_publishable_Dx6cuRP7CgJUwQlj67OFyQ_viNQ1SyL';
  const originalFetch = window.fetch.bind(window);
  window.fetch = async (input, init) => {
    const url = typeof input === 'string' ? input : input?.url || '';
    if (url.includes('/api/trpc') && url.includes('projects.list')) {
      const response = await originalFetch(`${SUPABASE_URL}/rest/v1/projects?select=*&order=created_at.desc&limit=100`, { headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}` } });
      const data = await response.json();
      const mapped = (data || []).map(row => ({ ...row, grade: row.duration || row.grade || '', area: row.process_type || row.area || '', project_type: row.sector || row.project_type || '' }));
      return new Response(JSON.stringify({ result: { data: { json: mapped } } }), { status: response.ok ? 200 : response.status, headers: { 'Content-Type': 'application/json' } });
    }
    return originalFetch(input, init);
  };
  const clean = () => {
    document.querySelectorAll('button, a').forEach(el => { if (el.textContent?.trim().includes('관리자 로그인')) el.remove(); });
    document.querySelectorAll('img').forEach(img => { if ((img.src || '').includes('about-team')) { img.style.objectFit = 'contain'; img.style.height = 'auto'; img.style.aspectRatio = 'auto'; } });
    if (location.pathname.replace(/\/$/,'') !== '/projects') return;
    const selects = [...document.querySelectorAll('select')];
    const duration = selects[0];
    const sector = selects[1];
    if (duration && !duration.dataset.updated) {
      duration.dataset.updated = 'true';
      duration.innerHTML = '<option value="">전체 기간</option><option value="2026">2026년</option><option value="2025">2025년</option><option value="2024">2024년</option><option value="2023">2023년 이전</option>';
      duration.previousElementSibling?.setAttribute('placeholder','기간 필터');
    }
    if (sector && !sector.dataset.updated) {
      sector.dataset.updated = 'true';
      sector.innerHTML = '<option value="">전체 섹터</option><option value="cleanroom">산업·바이오 클린룸</option><option value="dryroom">초저습 드라이룸</option><option value="cold">냉동공학 & 저온물류</option><option value="datacenter">데이터센터 액체냉각</option>';
      const group = document.createElement('div'); group.className='project-sector-buttons';
      [['','전체'],['cleanroom','산업·바이오 클린룸'],['dryroom','초저습 드라이룸'],['cold','냉동공학 & 저온물류'],['datacenter','데이터센터 액체냉각']].forEach(([value,label]) => { const b=document.createElement('button'); b.type='button'; b.dataset.sector=value; b.textContent=label; b.onclick=()=>{sector.value=value; sector.dispatchEvent(new Event('change',{bubbles:true})); group.querySelectorAll('button').forEach(x=>x.classList.toggle('active',x===b));}; group.appendChild(b); });
      sector.style.display='none'; sector.parentElement?.appendChild(group);
      const style=document.createElement('style'); style.textContent='.project-sector-buttons{display:flex;flex-wrap:wrap;gap:8px;margin:14px 0 20px}.project-sector-buttons button{border:1px solid #dce3eb;background:#fff;color:#526071;border-radius:999px;padding:9px 14px;font:600 11px inherit;cursor:pointer}.project-sector-buttons button.active,.project-sector-buttons button:hover{background:#1670c5;border-color:#1670c5;color:#fff}.project-sector-buttons button:first-child{background:#1670c5;color:#fff}'; document.head.appendChild(style);
    }
    document.querySelectorAll('body *').forEach(el => { const label = (el.textContent || '').trim(); if (label === '등급') el.textContent = '기간'; if (label.startsWith('면적')) el.textContent = '공정'; });
  };
  new MutationObserver(clean).observe(document.documentElement, { childList:true, subtree:true });
  setTimeout(clean, 300); setTimeout(clean, 1000); setTimeout(clean, 2200);
  if (location.pathname === '/business') { const script = document.createElement('script'); script.src = `/business-bridge.js?v=${Date.now()}`; document.head.appendChild(script); }
})();

(() => {
  const path = location.pathname.replace(/\/$/,'') || '/';
  const assets = {about:'/assets/ai-cleanroom-about.jpg',business:'/assets/ai-business-engineering.jpg',contact:'/assets/ai-contact-consultation.jpg'};
  const key = path.slice(1); if (!assets[key] || key === 'projects') return;
  const add = () => {
    if (document.querySelector('.page-media-visual')) return;
    const img = document.createElement('img'); img.className='page-media-visual'; img.src=assets[key]; img.alt='이상이엔지 엔지니어링 현장';
    const style=document.createElement('style'); style.textContent='.page-media-visual{display:block;width:min(1180px,88vw);height:clamp(180px,30vw,360px);object-fit:cover;border-radius:18px;margin:0 auto 38px;box-shadow:0 16px 34px rgba(16,36,61,.12)}.biz-media-visual{width:100%;max-height:300px;object-fit:cover;border-radius:16px;margin:0 0 28px;display:block}'; document.head.appendChild(style);
    if (key === 'business') { const heading=document.querySelector('.biz-heading'); if(heading){const wrap=document.createElement('div');wrap.className='biz-media-wrap';wrap.appendChild(img);heading.after(wrap);img.className='biz-media-visual';} }
    else { const root=document.querySelector('#root'); if(!root)return; const existing=root.querySelector('img[alt="클린룸 시공 현장"]'); if (key==='about' && existing) { existing.src=assets[key]; existing.removeAttribute('srcset'); return; } const head=root.querySelector('.page-head') || root.querySelector('main > section'); if(head) head.after(img); else root.querySelector('main')?.prepend(img); }
  };
  setTimeout(add,800); setTimeout(add,2200);
})();
