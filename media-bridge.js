(() => {
  const apply = () => {
    const hero = Array.from(document.querySelectorAll('section')).find(s => s.className.includes('h-screen') && s.className.includes('overflow-hidden'));
    if (hero) {
      hero.style.setProperty('background-image', 'none', 'important');
      hero.style.setProperty('height', '100svh', 'important');
      hero.style.setProperty('min-height', '100svh', 'important');
      hero.style.setProperty('max-height', 'none', 'important');
      hero.style.setProperty('align-items', 'center', 'important');
      const heroContent = Array.from(hero.children).find(x => String(x.className).includes('max-w-[1280px]'));
      if (heroContent) {
        heroContent.style.setProperty('position', 'relative', 'important');
        heroContent.style.setProperty('z-index', '2', 'important');
        heroContent.style.setProperty('width', '100%', 'important');
        heroContent.style.setProperty('max-width', '1280px', 'important');
        heroContent.style.setProperty('margin', '0 auto', 'important');
        heroContent.style.setProperty('padding-bottom', '0', 'important');
        heroContent.style.setProperty('padding-left', '8vw', 'important');
        heroContent.style.setProperty('padding-right', '2vw', 'important');
        heroContent.style.setProperty('transform', 'translateY(7%)', 'important');
        if (window.innerWidth <= 720) {
          heroContent.style.setProperty('padding-left', '24px', 'important');
          heroContent.style.setProperty('padding-right', '24px', 'important');
          heroContent.style.setProperty('transform', 'translateY(-8%)', 'important');
        }
      }
      if (!hero.querySelector('.hero-business-buttons')) {
        const wrap = document.createElement('div');
        wrap.className = 'hero-business-buttons';
        wrap.innerHTML = `<a href="/business#cleanroom"><span class="hero-business-icon">▦</span><b>ICR</b><small>산업·바이오 클린룸</small><em>→</em></a><a href="/business#bcr"><span class="hero-business-icon">▤</span><b>BCR</b><small>바이오·제약 클린룸</small><em>→</em></a><a href="/business#dryroom"><span class="hero-business-icon">◌</span><b>DRY ROOM</b><small>초저습 드라이룸</small><em>→</em></a><a href="/business#cdu"><span class="hero-business-icon">▥</span><b>DATA CENTER</b><small>데이터센터 액체냉각</small><em>→</em></a>`;
        const style = document.createElement('style');
        style.textContent = `.hero-business-buttons{position:absolute;z-index:3;right:5vw;top:50%;transform:translateY(-38%);display:grid;grid-template-columns:repeat(4,minmax(118px,1fr));gap:14px;width:min(53vw,690px)}.hero-business-buttons a{min-height:190px;padding:26px 18px 18px;border:1px solid rgba(255,255,255,.42);border-radius:11px;background:rgba(26,58,91,.3);backdrop-filter:blur(5px);color:#fff;text-decoration:none;display:flex;flex-direction:column;align-items:center;justify-content:center;transition:.25s}.hero-business-buttons a:hover{background:rgba(18,116,207,.7);transform:translateY(-7px);border-color:#fff}.hero-business-icon{font-size:34px;line-height:1;margin-bottom:20px;color:#d9efff}.hero-business-buttons b{font-size:14px;letter-spacing:.02em}.hero-business-buttons small{font-size:10px;margin-top:9px;color:rgba(255,255,255,.8);text-align:center;line-height:1.35}.hero-business-buttons em{font-style:normal;font-size:20px;margin-top:14px;color:#d7edff}@media(max-width:1050px){.hero-business-buttons{right:3vw;width:52vw;gap:8px}.hero-business-buttons a{min-height:155px;padding:18px 8px}.hero-business-icon{font-size:27px;margin-bottom:13px}.hero-business-buttons small{font-size:9px}}@media(max-width:720px){.hero-business-buttons{top:auto;bottom:35px;left:18px;right:18px;transform:none;width:auto;grid-template-columns:repeat(2,1fr);gap:8px}.hero-business-buttons a{min-height:112px;padding:12px 8px}.hero-business-icon{font-size:23px;margin-bottom:8px}.hero-business-buttons b{font-size:12px}.hero-business-buttons small{font-size:9px;margin-top:4px}.hero-business-buttons em{font-size:15px;margin-top:5px}}`;
        document.head.appendChild(style);
        hero.appendChild(wrap);
      }
      const buttons = hero.querySelector('.hero-business-buttons');
      if (buttons) {
        buttons.style.setProperty('position', 'absolute', 'important');
        buttons.style.setProperty('z-index', '4', 'important');
        if (window.innerWidth <= 720) {
          buttons.style.setProperty('top', 'auto', 'important');
          buttons.style.setProperty('bottom', '28px', 'important');
          buttons.style.setProperty('left', '18px', 'important');
          buttons.style.setProperty('right', '18px', 'important');
          buttons.style.setProperty('width', 'auto', 'important');
          buttons.style.setProperty('transform', 'none', 'important');
        } else {
          buttons.style.setProperty('top', '52%', 'important');
          buttons.style.setProperty('right', '5vw', 'important');
          buttons.style.setProperty('bottom', 'auto', 'important');
          buttons.style.setProperty('left', 'auto', 'important');
          buttons.style.setProperty('width', 'min(50vw, 690px)', 'important');
          buttons.style.setProperty('transform', 'translateY(-50%)', 'important');
        }
      }
      if (!hero.querySelector('video.isang-hero-video')) {
        const video = document.createElement('video');
        video.className = 'isang-hero-video';
        video.autoplay = true; video.loop = true; video.muted = true; video.playsInline = true;
        video.setAttribute('aria-hidden', 'true');
        video.src = '/assets/KakaoTalk_20260911_101857131.mp4';
        Object.assign(video.style, {position:'absolute', inset:'0', width:'100%', height:'100%', objectFit:'cover', zIndex:'0', opacity:'0.72'});
        hero.insertBefore(video, hero.firstChild);
        const overlay = document.createElement('div');
        overlay.className = 'isang-hero-overlay';
        Object.assign(overlay.style, {position:'absolute', inset:'0', zIndex:'1', background:'linear-gradient(90deg, rgba(7,18,34,.82) 0%, rgba(7,18,34,.48) 48%, rgba(7,18,34,.15) 100%)', pointerEvents:'none'});
        hero.insertBefore(overlay, video.nextSibling);
        Array.from(hero.children).forEach(child => { if (child !== video && child !== overlay) { child.style.position='relative'; child.style.zIndex='2'; } });
      }
    }
    document.querySelectorAll('img[alt="클린룸 시공 현장"]').forEach(img => {
      img.src = '/assets/ai-cleanroom-about.jpg';
      img.removeAttribute('srcset');
    });
    const ctaHeading = Array.from(document.querySelectorAll('h1,h2,h3')).find(el => (el.textContent || '').includes('프로젝트를 시작하세요'));
    const ctaSection = ctaHeading?.closest('section');
    if (ctaSection) ctaSection.style.setProperty('display', 'none', 'important');
    if (location.pathname === '/' || location.pathname === '/index.html') {
      const heroSection = Array.from(document.querySelectorAll('section')).find(s => s.className.includes('h-screen') && s.className.includes('overflow-hidden'));
      const statsSection = heroSection?.nextElementSibling;
      if (statsSection) statsSection.style.setProperty('display', 'none', 'important');
    }
  };
  const observer = new MutationObserver(apply);
  observer.observe(document.documentElement, {childList:true, subtree:true});
  setTimeout(apply, 600);
  setTimeout(apply, 1800);
  if ((location.pathname === '/' || location.pathname === '/index.html') && !document.querySelector('script[data-home-business]')) {
    const script = document.createElement('script');
    script.dataset.homeBusiness = 'true';
    script.src = `/home-business-bridge.js?v=${Date.now()}`;
    document.head.appendChild(script);
  }
})();

/* Home business section integration */
(() => {
  if (location.pathname !== '/' && location.pathname !== '/index.html') return;
  const data = [
    ['01','산업·바이오 클린룸','Industrial & Bio Cleanroom','Class 1,000~100,000 청정도, 차압 제어, HEPA·ULPA FFU 유닛 기반의 고청정 환경을 설계·시공합니다.'],
    ['02','초저습 드라이룸','Secondary Battery Dry Room','이차전지 전극·조립 라인을 위한 노점온도 -40°C~-60°C 초저습 공조와 기밀 덕트 시스템을 구축합니다.'],
    ['03','냉동공학 & 저온물류','Refrigeration & Cold Storage','-18°C~-40°C 산업용 냉동 플랜트와 저온 저장 설비, Bitzer 2단 압축 및 제상 시스템을 제공합니다.'],
    ['04','데이터센터 액체냉각','AI Data Center Liquid Cooling','AI·GPU 서버의 고발열을 해소하는 CDU와 STS316L 특수배관, 오비탈 TIG 용접 시스템을 구축합니다.']
  ];
  const css = `.home-business{background:#f6f8fb;border-top:1px solid #e5e9ee;padding:92px 6vw}.home-business-inner{max-width:1240px;margin:auto}.home-business-head{text-align:center;margin-bottom:34px}.home-business-head .eyebrow{color:#1670c5;font-size:11px;letter-spacing:.16em;font-weight:700}.home-business-head h2{font-size:clamp(27px,4vw,42px);letter-spacing:-.06em;margin:9px 0}.home-business-head p{color:#6e7b8c;font-size:13px}.home-business-tabs{display:flex;flex-wrap:wrap;justify-content:center;gap:9px;margin-bottom:34px}.home-business-tabs button{background:#fff;border:1px solid #dce3eb;border-radius:999px;padding:12px 18px;color:#526071;font:600 12px inherit;cursor:pointer}.home-business-tabs button.active{background:#1670c5;color:#fff;border-color:#1670c5;box-shadow:0 8px 18px #1670c52b}.home-business-card{background:#fff;border:1px solid #e0e5eb;border-radius:22px;padding:40px;display:grid;grid-template-columns:1.35fr .85fr;gap:42px;box-shadow:0 10px 30px #10243d0b}.home-business-card h3{font-size:clamp(22px,3vw,32px);letter-spacing:-.055em;margin:15px 0 12px}.home-business-card p{color:#677487;font-size:13px;line-height:1.85}.home-business-kicker{display:inline-block;background:#edf5ff;color:#2377c7;border-radius:999px;padding:7px 11px;font-size:10px;font-weight:700}.home-business-features{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:22px}.home-business-features div{background:#f8fafc;border:1px solid #edf0f4;border-radius:10px;padding:14px;font-size:11px;color:#536174}.home-business-spec{background:#111b30;color:#fff;border-radius:16px;padding:24px}.home-business-spec strong{display:block;color:#7eb4f0;font:10px monospace;margin-bottom:10px}.home-business-spec div{display:flex;justify-content:space-between;gap:14px;border-bottom:1px solid #2b3548;padding:12px 0;font-size:10px}.home-business-spec span{color:#aab5c6}.home-business-spec b{text-align:right}.home-business-link{display:inline-block;margin-top:22px;color:#166ac0;font-size:11px;font-weight:700;text-decoration:none}@media(max-width:800px){.home-business{padding:65px 20px}.home-business-card{grid-template-columns:1fr;padding:24px 20px}.home-business-features{grid-template-columns:1fr}.home-business-spec div{display:block}.home-business-spec b{display:block;text-align:left;margin-top:4px}}`;
  const add = () => {
    if (document.querySelector('.home-business')) return;
    const sections = Array.from(document.querySelectorAll('section'));
    const target = sections.find(s => /전문 서비스/.test(s.innerText || ''));
    if (!target) return;
    const section = document.createElement('section'); section.className='home-business';
    section.innerHTML = `<div class="home-business-inner"><div class="home-business-head"><div class="eyebrow">OUR CORE BUSINESS</div><h2>첨단 산업을 선도하는 엔지니어링 솔루션</h2><p>산업별 공조 및 유틸리티 기준을 오차 없이 완벽하게 구축합니다.</p></div><div class="home-business-tabs">${data.map((x,i)=>`<button class="${i===0?'active':''}" data-home-business="${i}">${x[1]}</button>`).join('')}</div><div class="home-business-card"></div></div>`;
    target.parentNode.insertBefore(section, target.nextSibling);
    const card=section.querySelector('.home-business-card');
    const render=i=>{const x=data[i]; card.innerHTML=`<div><span class="home-business-kicker">${x[2]}</span><h3>${x[1]}</h3><p>${x[3]}</p><div class="home-business-features"><div><b>맞춤 설계</b><br>현장 조건 및 요구사항 분석</div><div><b>검증된 시공</b><br>품질·시공성·운영 효율 최적화</div></div><a class="home-business-link" href="/business">상세 사업소개 보기 →</a></div><aside class="home-business-spec"><strong>// ENGINEERING SPECIFICATIONS</strong><div><span>적용 분야</span><b>${x[1]}</b></div><div><span>핵심 기준</span><b>현장 맞춤 엔지니어링</b></div><div><span>수행 범위</span><b>설계 · 시공 · 검증</b></div><em>전문 엔지니어 상담 가능</em></aside>`};
    section.querySelectorAll('[data-home-business]').forEach(btn=>btn.onclick=()=>{section.querySelectorAll('button').forEach(x=>x.classList.remove('active'));btn.classList.add('active');render(Number(btn.dataset.homeBusiness));}); render(0);
    const style=document.createElement('style'); style.textContent=css; document.head.appendChild(style);
  };
  setTimeout(add,700); setTimeout(add,1800);
})();
