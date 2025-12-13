
// FullStackMaster Banner - Mobile Optimized
(function() {
  'use strict';
  
  function createBanner() {
    if (document.getElementById('fsm-banner')) return;
    
    // Add mobile-optimized styles
    var style = document.createElement('style');
    style.textContent = `
      #fsm-banner-wrap {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 9999;
        background: linear-gradient(90deg, #C9A227 0%, #D4AF37 50%, #E5C158 100%);
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
      }
      #fsm-banner-inner {
        max-width: 1200px;
        margin: 0 auto;
        padding: 8px 40px 8px 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        flex-wrap: wrap;
      }
      #fsm-banner-text {
        display: flex;
        align-items: center;
        gap: 6px;
        color: #0A1628;
        font-weight: 600;
        font-size: 0.85em;
      }
      #fsm-banner-links {
        display: flex;
        gap: 6px;
        flex-wrap: wrap;
        justify-content: center;
      }
      .fsm-btn-primary {
        background: #0A1628;
        color: white !important;
        padding: 6px 12px;
        border-radius: 5px;
        text-decoration: none !important;
        font-weight: 600;
        font-size: 0.8em;
        white-space: nowrap;
      }
      .fsm-btn-secondary {
        background: transparent;
        color: #0A1628 !important;
        border: 2px solid #0A1628;
        padding: 4px 10px;
        border-radius: 5px;
        text-decoration: none !important;
        font-weight: 600;
        font-size: 0.8em;
        white-space: nowrap;
      }
      #fsm-close {
        position: absolute;
        right: 8px;
        top: 50%;
        transform: translateY(-50%);
        background: none;
        border: none;
        color: #0A1628;
        cursor: pointer;
        padding: 4px 8px;
        font-size: 1.2em;
        line-height: 1;
      }
      @media (max-width: 576px) {
        #fsm-banner-inner {
          padding: 6px 36px 6px 8px;
          gap: 4px;
        }
        #fsm-banner-text {
          font-size: 0.75em;
          width: 100%;
          justify-content: center;
        }
        #fsm-banner-links {
          width: 100%;
          justify-content: center;
        }
        .fsm-btn-primary, .fsm-btn-secondary {
          padding: 5px 10px;
          font-size: 0.75em;
        }
      }
    `;
    document.head.appendChild(style);
    
    var banner = document.createElement('div');
    banner.id = 'fsm-banner';
    banner.innerHTML = `
      <div id="fsm-banner-wrap">
        <div id="fsm-banner-inner">
          <div id="fsm-banner-text">
            <span>🚀</span>
            <span>Crack Your FAANG Interview!</span>
          </div>
          <div id="fsm-banner-links">
            <a href="https://fullstackmaster.net" target="_blank" rel="noopener" class="fsm-btn-primary">Start Learning →</a>
            <a href="https://rupeshtiwari.com" target="_blank" rel="noopener" class="fsm-btn-secondary">Portfolio</a>
          </div>
          <button id="fsm-close" onclick="document.getElementById('fsm-banner').remove();document.body.style.paddingTop='0';">×</button>
        </div>
      </div>
    `;
    document.body.insertBefore(banner, document.body.firstChild);
    
    // Adjust body padding based on banner height
    setTimeout(function() {
      var bannerHeight = document.getElementById('fsm-banner-wrap').offsetHeight;
      document.body.style.paddingTop = bannerHeight + 'px';
    }, 100);
    
    // Recalculate on resize
    window.addEventListener('resize', function() {
      var wrap = document.getElementById('fsm-banner-wrap');
      if (wrap) {
        document.body.style.paddingTop = wrap.offsetHeight + 'px';
      }
    });
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createBanner);
  } else {
    createBanner();
  }
})();
