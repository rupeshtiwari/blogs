
// FullStackMaster Banner for Chirpy Theme
(function() {
  'use strict';
  
  function createBanner() {
    if (document.getElementById('fsm-banner')) return;
    
    var banner = document.createElement('div');
    banner.id = 'fsm-banner';
    banner.innerHTML = `
      <div style="position:fixed;top:0;left:0;right:0;z-index:9999;background:linear-gradient(90deg,#C9A227 0%,#D4AF37 50%,#E5C158 100%);box-shadow:0 2px 10px rgba(0,0,0,0.2);">
        <div style="max-width:1200px;margin:0 auto;padding:10px 16px;display:flex;align-items:center;justify-content:center;gap:16px;flex-wrap:wrap;">
          <div style="display:flex;align-items:center;gap:8px;color:#0A1628;">
            <span style="font-size:1.2em;">🚀</span>
            <span style="font-weight:600;font-size:0.95em;">Crack Your FAANG Interview!</span>
          </div>
          <a href="https://fullstackmaster.net" target="_blank" rel="noopener" style="background:#0A1628;color:white;padding:8px 20px;border-radius:6px;text-decoration:none;font-weight:600;font-size:0.9em;display:inline-flex;align-items:center;gap:6px;">
            Start Learning →
          </a>
          <a href="https://rupeshtiwari.com" target="_blank" rel="noopener" style="background:transparent;color:#0A1628;border:2px solid #0A1628;padding:6px 16px;border-radius:6px;text-decoration:none;font-weight:600;font-size:0.9em;">
            Portfolio
          </a>
          <button onclick="document.getElementById('fsm-banner').remove();document.body.style.paddingTop='0';" style="position:absolute;right:12px;top:50%;transform:translateY(-50%);background:none;border:none;color:#0A1628;cursor:pointer;padding:4px;font-size:1.2em;">×</button>
        </div>
      </div>
    `;
    document.body.insertBefore(banner, document.body.firstChild);
    document.body.style.paddingTop = '52px';
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createBanner);
  } else {
    createBanner();
  }
})();
