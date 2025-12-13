
// Blog Enhancement Features
(function() {
  'use strict';

  // ========== 1. COPY TO CLIPBOARD FOR CODE SNIPPETS ==========
  function initCopyButtons() {
    document.querySelectorAll('pre').forEach(function(pre) {
      if (pre.querySelector('.copy-btn')) return;
      
      var btn = document.createElement('button');
      btn.className = 'copy-btn';
      btn.innerHTML = '📋 Copy';
      btn.title = 'Copy to clipboard';
      
      btn.addEventListener('click', function() {
        var code = pre.querySelector('code') || pre;
        var text = code.innerText || code.textContent;
        
        navigator.clipboard.writeText(text).then(function() {
          btn.innerHTML = '✅ Copied!';
          btn.classList.add('copied');
          setTimeout(function() {
            btn.innerHTML = '📋 Copy';
            btn.classList.remove('copied');
          }, 2000);
        }).catch(function() {
          btn.innerHTML = '❌ Failed';
          setTimeout(function() { btn.innerHTML = '📋 Copy'; }, 2000);
        });
      });
      
      pre.style.position = 'relative';
      pre.appendChild(btn);
    });
  }

  // ========== 2. SCROLL TO TOP BUTTON ==========
  function initScrollToTop() {
    var btn = document.createElement('button');
    btn.id = 'scroll-to-top';
    btn.innerHTML = '↑';
    btn.title = 'Scroll to top';
    btn.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(btn);
    
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    });
    
    btn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ========== 3. SOCIAL SHARE BUTTONS ==========
  function initSocialShare() {
    var postContent = document.querySelector('.post-content, article, .content');
    if (!postContent) return;
    
    var title = encodeURIComponent(document.title);
    var url = encodeURIComponent(window.location.href);
    
    var shareDiv = document.createElement('div');
    shareDiv.className = 'social-share';
    shareDiv.innerHTML = `
      <span class="share-label">Share:</span>
      <a href="https://twitter.com/intent/tweet?text=${title}&url=${url}" target="_blank" rel="noopener" class="share-btn twitter" title="Share on Twitter">𝕏</a>
      <a href="https://www.linkedin.com/sharing/share-offsite/?url=${url}" target="_blank" rel="noopener" class="share-btn linkedin" title="Share on LinkedIn">in</a>
      <a href="https://www.facebook.com/sharer/sharer.php?u=${url}" target="_blank" rel="noopener" class="share-btn facebook" title="Share on Facebook">f</a>
      <a href="https://wa.me/?text=${title}%20${url}" target="_blank" rel="noopener" class="share-btn whatsapp" title="Share on WhatsApp">💬</a>
      <a href="mailto:?subject=${title}&body=Check%20out%20this%20article:%20${url}" class="share-btn email" title="Share via Email">✉️</a>
    `;
    
    // Insert after post title or at top of content
    var postTitle = document.querySelector('h1, .post-title');
    if (postTitle && postTitle.parentNode) {
      postTitle.parentNode.insertBefore(shareDiv, postTitle.nextSibling);
    }
  }

  // ========== 4. READING PROGRESS BAR ==========
  function initProgressBar() {
    var article = document.querySelector('.post-content, article, .content');
    if (!article) return;
    
    var progressBar = document.createElement('div');
    progressBar.id = 'reading-progress';
    progressBar.innerHTML = '<div class="progress-fill"></div>';
    document.body.appendChild(progressBar);
    
    var fill = progressBar.querySelector('.progress-fill');
    
    window.addEventListener('scroll', function() {
      var articleTop = article.offsetTop;
      var articleHeight = article.offsetHeight;
      var windowHeight = window.innerHeight;
      var scrollY = window.scrollY;
      
      var start = articleTop - windowHeight;
      var end = articleTop + articleHeight - windowHeight;
      var progress = Math.min(Math.max((scrollY - start) / (end - start) * 100, 0), 100);
      
      fill.style.width = progress + '%';
    });
  }

  // ========== 5. PRINT BUTTON ==========
  function initPrintButton() {
    var postContent = document.querySelector('.post-content, article, .content');
    if (!postContent) return;
    
    var btn = document.createElement('button');
    btn.id = 'print-btn';
    btn.innerHTML = '🖨️ Print';
    btn.title = 'Print this article';
    
    btn.addEventListener('click', function() {
      window.print();
    });
    
    // Add near social share or at top of article
    var shareDiv = document.querySelector('.social-share');
    if (shareDiv) {
      shareDiv.appendChild(btn);
    } else {
      var postTitle = document.querySelector('h1, .post-title');
      if (postTitle && postTitle.parentNode) {
        var container = document.createElement('div');
        container.className = 'article-actions';
        container.appendChild(btn);
        postTitle.parentNode.insertBefore(container, postTitle.nextSibling);
      }
    }
  }

  // Initialize all features
  function init() {
    initCopyButtons();
    initScrollToTop();
    initSocialShare();
    initProgressBar();
    initPrintButton();
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
