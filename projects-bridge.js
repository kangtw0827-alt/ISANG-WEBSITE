(() => {
  const SUPABASE_URL = 'https://knormndeorczxgwqvkol.supabase.co';
  const SUPABASE_KEY = 'sb_publishable_Dx6cuRP7CgJUwQlj67OFyQ_viNQ1SyL';
  let projectRecords = [];
  const esc = (v='') => String(v).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const sectorLabel = {cleanroom:'산업·바이오 클린룸',dryroom:'초저습 드라이룸',cold:'냉동공학 & 저온물류',datacenter:'데이터센터 액체냉각'};
  const showProjectModal = record => {
    let modal = document.querySelector('.project-detail-modal');
    if (!modal) { modal=document.createElement('div'); modal.className='project-detail-modal'; document.body.appendChild(modal); }
    modal.innerHTML=`<div class="project-detail-backdrop" data-close-project></div><article class="project-detail-card" role="dialog" aria-modal="true"><button class="project-detail-close" data-close-project aria-label="닫기">×</button><p class="project-detail-kicker">PROJECT DETAIL</p><h2>${esc(record.name||'시공 사례')}</h2><p class="project-detail-period">${esc(record.duration||'기간 미입력')}</p><dl><div><dt>발주처</dt><dd>${esc(record.client||'미입력')}</dd></div><div><dt>위치</dt><dd>${esc(record.location||'미입력')}</dd></div><div><dt>공정</dt><dd>${esc(record.process_type==='턴키'?'Turnkey':(record.process_type||'미입력'))}</dd></div><div><dt>산업 섹터</dt><dd>${esc(sectorLabel[record.sector]||record.sector||'미입력')}</dd></div></dl><p class="project-detail-description">${esc(record.description||'등록된 상세 설명이 없습니다.')}</p></article>`;
    modal.classList.add('is-open'); modal.querySelectorAll('[data-close-project]').forEach(x=>x.onclick=()=>modal.classList.remove('is-open'));
  };
  const originalFetch = window.fetch.bind(window);
  window.fetch = async (input, init) => {
    const url = typeof input === 'string' ? input : input?.url || '';
    if (url.includes('/api/trpc') && url.includes('projects.list')) {
      const response = await originalFetch(`${SUPABASE_URL}/rest/v1/projects?select=*&order=created_at.desc&limit=100`, { headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}` } });
      const data = await response.json();
      const mapped = (data || []).map(row => ({ ...row, grade: row.duration || row.grade || '', area: row.process_type === '턴키' ? 'Turnkey' : (row.process_type || row.area || ''), project_type: row.sector || row.project_type || '' }));
      projectRecords = mapped;
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
    const table = document.querySelector('.min-w-\\[780px\\]');
    if (table) {
      const rows = [table.firstElementChild, ...table.querySelectorAll('button.w-full')].filter(Boolean);
      rows.forEach(row => { row.style.gridTemplateColumns='72px minmax(220px,1fr) 125px 130px 100px 160px'; const cells = [...row.children]; cells.forEach(cell => { cell.style.alignSelf='center'; }); if (cells.length >= 6 && !row.dataset.processFirst) row.append(cells[5], cells[4]); const finalCells=[...row.children]; if (finalCells.length >= 6) { finalCells[4].style.lineHeight='18px'; finalCells[5].style.lineHeight='18px'; finalCells[4].style.alignSelf='center'; finalCells[5].style.alignSelf='center'; } row.dataset.processFirst='true'; });
      table.querySelectorAll('button.w-full').forEach(row => {
        if (row.dataset.workStyled) return;
        const cells=[...row.children]; const name=(cells[1]?.innerText||'').trim();
        if (!name || name==='.') { row.style.display='none'; row.dataset.workStyled='true'; return; }
        const record=projectRecords.find(x=>String(x.name||'').trim()===name) || {};
        const process=record.process_type==='턴키'?'Turnkey':(record.process_type||'');
        row.innerHTML=`<span class="work-period">${esc(record.duration||cells[5]?.innerText||'기간 미입력')}</span><span class="work-title">${esc(record.client||cells[2]?.innerText||'')} <strong>${esc(record.name||name)}</strong></span><span class="work-meta">${esc(process)}${record.location?` · ${esc(record.location)}`:''}</span>`;
        row.className='project-work-row'; row.dataset.workStyled='true'; row.onclick=e=>{e.preventDefault();showProjectModal(record);};
      });
    }
    document.querySelectorAll('.inline-block.text-\\[11px\\].bg-\\[\\#EEF2FF\\]').forEach(el => { el.classList.remove('bg-[#EEF2FF]','text-[#1565C0]','px-2','py-0.5'); el.style.color='inherit'; el.style.background='transparent'; el.style.padding='0'; });
    if (!document.querySelector('#project-work-style')) { const style=document.createElement('style'); style.id='project-work-style'; style.textContent='.min-w-\\[780px\\]{min-width:0!important}.min-w-\\[780px\\]>div:first-child{display:none}.project-work-row{display:block!important;width:100%;text-align:left;padding:26px 32px 24px!important;border:0!important;border-bottom:1px solid #edf0f3!important;background:#fff;cursor:pointer;transition:background .2s}.project-work-row:hover{background:#fafbfd}.work-period{display:block;color:#8b96a3;font:500 12px/1.4 "DM Mono",monospace;margin-bottom:10px}.work-title{display:block;color:#253449;font:600 18px/1.45 "Noto Sans KR",sans-serif}.work-title strong{margin-left:12px;font-weight:700}.work-meta{display:block;color:#7c8793;font:400 12px/1.5 "Noto Sans KR",sans-serif;margin-top:8px}.project-detail-modal{display:none;position:fixed;inset:0;z-index:9999}.project-detail-modal.is-open{display:block}.project-detail-backdrop{position:absolute;inset:0;background:rgba(12,24,39,.48);backdrop-filter:blur(3px)}.project-detail-card{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:min(560px,calc(100vw - 36px));max-height:calc(100vh - 48px);overflow:auto;background:#fff;padding:38px 40px 36px;box-shadow:0 24px 70px rgba(11,27,47,.24)}.project-detail-close{position:absolute;right:18px;top:12px;border:0;background:transparent;color:#728096;font-size:28px;line-height:1;cursor:pointer}.project-detail-kicker{margin:0 0 12px;color:#1c78c8;font:600 11px/1.4 "DM Mono",monospace;letter-spacing:.14em}.project-detail-card h2{margin:0;color:#17263a;font:700 26px/1.35 "Noto Sans KR",sans-serif}.project-detail-period{margin:12px 0 26px;color:#7b8795;font:500 13px/1.4 "DM Mono",monospace}.project-detail-card dl{display:grid;grid-template-columns:1fr 1fr;gap:16px 24px;margin:0;padding:20px 0;border-top:1px solid #e7ebef;border-bottom:1px solid #e7ebef}.project-detail-card dl div{min-width:0}.project-detail-card dt{color:#8a95a1;font-size:11px;margin-bottom:5px}.project-detail-card dd{margin:0;color:#253449;font-size:14px;font-weight:600}.project-detail-description{margin:22px 0 0;color:#606d7c;font-size:14px;line-height:1.8;white-space:pre-line}@media(max-width:640px){.project-work-row{padding:22px 20px 20px!important}.work-title{font-size:16px}.work-title strong{display:block;margin:4px 0 0}.project-detail-card{padding:34px 24px 28px}.project-detail-card dl{grid-template-columns:1fr}}'; document.head.appendChild(style); }
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
