(() => {
  if (location.pathname.replace(/\/$/, '') !== '/business') return;
  const run = () => {
    if (document.querySelector('.business-rebuild')) return;
    const script = document.createElement('script');
    script.src = '/business-bridge.js?v=icr-dr-bcr-idc-6';
    document.head.appendChild(script);
  };
  if (document.readyState === 'complete') setTimeout(run, 300);
  else window.addEventListener('load', () => setTimeout(run, 300), { once: true });
})();
