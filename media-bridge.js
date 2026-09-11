(() => {
  const apply = () => {
    const hero = Array.from(document.querySelectorAll('section')).find(s => s.className.includes('h-screen') && s.className.includes('overflow-hidden'));
    if (hero) {
      hero.style.backgroundImage = 'none';
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
