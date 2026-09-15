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
        if (window.innerWidth >= 1920) {
          heroContent.style.setProperty('max-width', '1600px', 'important');
          heroContent.style.setProperty('padding-left', '6vw', 'important');
          heroContent.style.setProperty('padding-right', '3vw', 'important');
        }
        if (window.innerWidth <= 720) {
          heroContent.style.setProperty('padding-left', '24px', 'important');
          heroContent.style.setProperty('padding-right', '24px', 'important');
          heroContent.style.setProperty('transform', 'translateY(-8%)', 'important');
        }
      }
      if (!hero.querySelector('.hero-business-buttons')) {
        const wrap = document.createElement('div');
        wrap.className = 'hero-business-buttons';
        wrap.innerHTML = `<a href="/business#cleanroom"><span class="hero-business-icon"><svg viewBox="0 0 32 32" aria-hidden="true"><rect x="8" y="8" width="16" height="16" rx="1"/><path d="M4 12h4M4 16h4M4 20h4M24 12h4M24 16h4M24 20h4M12 4v4M16 4v4M20 4v4M12 24v4M16 24v4M20 24v4"/></svg></span><span class="hero-business-number">01</span><b>ICR</b><small>반도체 · 디스플레이</small><em>→</em></a><a href="/business#bcr"><span class="hero-business-icon"><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M8 27V9l8-4 8 4v18M5 27h22M12 14h8M12 19h8M12 24h5"/><path d="M21 5v5M18.5 7.5h5"/></svg></span><span class="hero-business-number">02</span><b>BCR</b><small>바이오 · 제약</small><em>→</em></a><a href="/business#dryroom"><span class="hero-business-icon"><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 4S8 13 8 19a8 8 0 0 0 16 0c0-6-8-15-8-15Z"/><path d="M12 21a4 4 0 0 0 4 3"/></svg></span><span class="hero-business-number">03</span><b>DRY ROOM</b><small>초저습 드라이룸</small><em>→</em></a><a href="/business#cdu"><span class="hero-business-icon"><svg viewBox="0 0 32 32" aria-hidden="true"><rect x="7" y="5" width="18" height="22" rx="2"/><path d="M10 10h12M10 16h12M10 22h12M13 12h1M13 18h1M13 24h1"/></svg></span><span class="hero-business-number">04</span><b>DATA CENTER</b><small>데이터센터 · 항온항습</small><em>→</em></a>`;
        const style = document.createElement('style');
        style.textContent = `.hero-business-buttons{position:absolute;z-index:3;right:4vw;top:56%;transform:translateY(-50%);display:grid;grid-template-columns:repeat(4,minmax(125px,1fr));gap:0;width:min(55vw,760px)}.hero-business-buttons a{min-height:132px;padding:8px 24px 10px;border:0;border-left:1px solid rgba(255,255,255,.22);border-radius:0;background:rgba(12,43,67,.08);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);color:rgba(255,255,255,.9);text-decoration:none;display:flex;flex-direction:column;align-items:flex-start;justify-content:center;transition:background .3s,color .3s}.hero-business-buttons a:first-child{border-left-color:transparent}.hero-business-buttons a:hover{background:rgba(26,112,180,.10);color:#4ab0ed}.hero-business-icon{height:28px;margin-bottom:13px;color:rgba(224,242,255,.9);line-height:1}.hero-business-icon svg{width:27px;height:27px;display:block;fill:none;stroke:currentColor;stroke-width:1.2;stroke-linecap:round;stroke-linejoin:round}.hero-business-number{font:10px 'DM Mono',monospace;letter-spacing:.15em;color:#4ca9e3;margin-bottom:7px}.hero-business-buttons b{font-size:16px;letter-spacing:.05em;font-weight:600;white-space:nowrap}.hero-business-buttons small{font-size:11px;margin-top:7px;color:rgba(232,241,248,.76);text-align:left;line-height:1.35;white-space:nowrap}.hero-business-buttons em{font-style:normal;font-size:16px;margin-top:12px;color:rgba(224,242,255,.85);transition:transform .3s,color .3s}.hero-business-buttons a:hover .hero-business-icon,.hero-business-buttons a:hover .hero-business-number,.hero-business-buttons a:hover em{color:#4ab0ed}.hero-business-buttons a:hover em{transform:translateX(7px)}@media(max-width:1050px){.hero-business-buttons{right:2vw;width:53vw}.hero-business-buttons a{padding-left:15px;padding-right:12px}.hero-business-buttons b{font-size:13px}.hero-business-buttons small{font-size:9px}}@media(max-width:720px){.hero-business-buttons{top:auto;bottom:25px;left:18px;right:18px;transform:none;width:auto;grid-template-columns:repeat(2,1fr);gap:0}.hero-business-buttons a{min-height:112px;padding:12px 14px;border-left:1px solid rgba(255,255,255,.22);border-top:1px solid rgba(255,255,255,.18)}.hero-business-buttons a:nth-child(odd){border-left-color:transparent}.hero-business-icon{margin-bottom:8px}.hero-business-buttons b{font-size:13px}.hero-business-buttons small{font-size:9px;margin-top:5px}.hero-business-buttons em{font-size:14px;margin-top:7px}}`;
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
          buttons.style.setProperty('top', '56%', 'important');
          buttons.style.setProperty('right', '5vw', 'important');
          buttons.style.setProperty('bottom', 'auto', 'important');
          buttons.style.setProperty('left', 'auto', 'important');
          buttons.style.setProperty('width', 'min(55vw, 760px)', 'important');
          buttons.style.setProperty('transform', 'translateY(-50%)', 'important');
          if (window.innerWidth >= 1920) {
            buttons.style.setProperty('right', '4vw', 'important');
            buttons.style.setProperty('width', 'min(50vw, 900px)', 'important');
          }
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
    if (hero && !document.querySelector('.isang-about-home')) {
      const oldAbout = Array.from(document.querySelectorAll('section:not(.isang-about-home)')).find(s => /ABOUT US/i.test(s.innerText || '') && /클린룸 전문/.test(s.innerText || ''));
      if (oldAbout) oldAbout.style.setProperty('display', 'none', 'important');
      const about = document.createElement('section');
      about.className = 'isang-about-home';
      about.setAttribute('aria-label', 'About us');
      about.innerHTML = `<div class="isang-about-home-inner"><div class="isang-about-visual"><img src="/assets/ai-cleanroom-about.jpg" alt="클린룸 작업 환경"><div class="isang-about-wash"></div></div><div class="isang-about-copy"><span class="isang-about-eyebrow">ABOUT US</span><h2>클린환경을 설계하는<br>엔지니어링 파트너,<br><em>이상이엔지</em></h2><p>이상이엔지는 반도체, 바이오, 배터리, 데이터센터 등 첨단 산업의 공정에 필요한 클린환경을 설계하고 구축하는 전문 엔지니어링 기업입니다.</p><p>단순한 시공이 아닌 공정의 특성과 요구조건을 분석해 최적의 환경을 설계하고, 공조·제어·클린룸 기술을 융합한 통합 솔루션을 제공합니다.</p><a class="isang-about-more" href="/about">회사소개 더보기 <span>→</span></a><div class="isang-about-features"><div><strong>⊙</strong><b>Precision</b><p>정밀한 환경 설계<br>공정의 요구조건을 정확히 분석합니다.</p></div><div><strong>♧</strong><b>Engineering</b><p>전문 엔지니어링 역량<br>풍부한 경험과 기술력으로 제안합니다.</p></div><div><strong>⌘</strong><b>Integration</b><p>통합 솔루션<br>공조·제어·클린룸을 하나로 연결합니다.</p></div><div><strong>♢</strong><b>Reliability</b><p>지속 가능한 가치<br>안정적인 운영을 위한 파트너가 됩니다.</p></div></div></div></div>`;
      const style = document.createElement('style');
      style.textContent = `.isang-about-home{background:#f8f9fa;border-top:1px solid #e2e6ea;border-bottom:1px solid #e2e6ea;color:#1c2b3b;margin-top:52px;padding:76px 6vw}.isang-about-home-inner{max-width:1240px;margin:0 auto;display:grid;grid-template-columns:minmax(300px,.9fr) minmax(0,1.1fr);gap:76px;align-items:center}.isang-about-visual{position:relative;height:440px;overflow:hidden;background:#dce3e9}.isang-about-visual img{width:100%;height:100%;display:block;object-fit:cover;filter:saturate(.55) contrast(1.02);opacity:.86}.isang-about-wash{position:absolute;inset:0;background:linear-gradient(135deg,rgba(20,49,75,.34),rgba(58,128,185,.08));pointer-events:none}.isang-about-copy{padding:8px 0;position:relative}.isang-about-eyebrow{display:block;color:#1772b9;font:600 11px 'DM Mono',monospace;letter-spacing:.16em;margin-bottom:24px}.isang-about-eyebrow:before{content:'';display:inline-block;width:20px;height:1px;background:#1772b9;vertical-align:middle;margin-right:10px}.isang-about-copy h2{font-size:clamp(27px,3vw,39px);line-height:1.3;letter-spacing:-.075em;margin:0 0 25px;color:#182b3e}.isang-about-copy h2 em{color:#1675bd;font-style:normal}.isang-about-copy>p{font-size:13px;line-height:1.9;color:#687887;letter-spacing:-.035em;margin:0 0 14px;max-width:620px}.isang-about-more{display:inline-flex;align-items:center;gap:14px;border-bottom:1px solid #23394d;color:#23394d;text-decoration:none;font-size:12px;font-weight:600;padding:0 0 9px;margin-top:8px}.isang-about-more span{font-size:17px}.isang-about-features{display:grid;grid-template-columns:repeat(4,1fr);gap:22px;margin-top:54px;padding-top:25px;border-top:1px solid #dce2e7}.isang-about-features div{display:flex;flex-direction:column;min-width:0}.isang-about-features strong{color:#1873b8;font-size:20px;font-weight:400;line-height:1;margin-bottom:15px}.isang-about-features b{font-size:14px;font-weight:600;margin-bottom:9px;color:#22384c}.isang-about-features p{font-size:12px;line-height:1.7;color:#7b8995;margin:0}@media(min-width:1920px){.isang-about-home-inner{max-width:1500px}.isang-about-home{padding-left:5vw;padding-right:5vw}}@media(max-width:900px){.isang-about-home{margin-top:40px;padding:58px 20px}.isang-about-home-inner{grid-template-columns:1fr;max-width:680px;gap:38px}.isang-about-visual{height:300px}.isang-about-copy{padding:0}.isang-about-copy h2{font-size:30px}.isang-about-features{margin-top:38px;gap:14px}}@media(max-width:560px){.isang-about-copy h2{font-size:25px}.isang-about-features{grid-template-columns:1fr 1fr;row-gap:24px}.isang-about-features p{font-size:13px}}`;
      document.head.appendChild(style);
      hero.parentNode.insertBefore(about, hero.nextSibling);
    }
    const homeAbout = document.querySelector('.isang-about-home');
    if (homeAbout) {
      homeAbout.hidden = false;
      homeAbout.removeAttribute('hidden');
      homeAbout.style.removeProperty('display');
      homeAbout.style.setProperty('display', 'block', 'important');
    }
    const duplicateAbout = Array.from(document.querySelectorAll('section:not(.isang-about-home)')).find(s => /ABOUT US/i.test(s.innerText || '') && /클린룸 전문/.test(s.innerText || ''));
    if (duplicateAbout) duplicateAbout.style.setProperty('display', 'none', 'important');
    if (location.pathname === '/' || location.pathname === '/index.html') {
      const stats = Array.from(document.querySelectorAll('section')).find(s => /설립 연도/.test(s.innerText || '') && /핵심 사업 분야/.test(s.innerText || ''));
      if (stats) stats.style.setProperty('display', 'none', 'important');
    }
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
  setTimeout(() => {
    const about = document.querySelector('.isang-about-home');
    if (about) {
      about.hidden = false;
      about.style.setProperty('display', 'block', 'important');
    }
  }, 3000);
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
