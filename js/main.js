/* ========================================
   Zelda.help - Main JavaScript
   ======================================== */

(function() {
  'use strict';

  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function() {
      mainNav.classList.toggle('open');
      const isOpen = mainNav.classList.contains('open');
      menuToggle.setAttribute('aria-expanded', isOpen);
      menuToggle.textContent = isOpen ? '✕' : '☰';
    });

    // Close menu on link click
    mainNav.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        mainNav.classList.remove('open');
        menuToggle.textContent = '☰';
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Back to top button
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }, { passive: true });

    backToTop.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Accordion functionality
  document.querySelectorAll('.accordion-header').forEach(function(header) {
    header.addEventListener('click', function() {
      const item = this.parentElement;
      const body = item.querySelector('.accordion-body');
      const isOpen = item.classList.contains('open');

      // Close all others in same group
      const group = item.parentElement;
      if (group) {
        group.querySelectorAll('.accordion-item.open').forEach(function(openItem) {
          if (openItem !== item) {
            openItem.classList.remove('open');
            var ob = openItem.querySelector('.accordion-body');
            if (ob) ob.style.maxHeight = null;
          }
        });
      }

      // Toggle current
      if (isOpen) {
        item.classList.remove('open');
        body.style.maxHeight = null;
      } else {
        item.classList.add('open');
        body.style.maxHeight = body.scrollHeight + 'px';
      }
    });
  });

  // Simple search filter
  var searchInputs = document.querySelectorAll('[data-search-target]');
  searchInputs.forEach(function(input) {
    input.addEventListener('input', function() {
      var targetId = this.getAttribute('data-search-target');
      var target = document.getElementById(targetId);
      if (!target) return;

      var query = this.value.toLowerCase().trim();
      var items = target.querySelectorAll('[data-searchable]');

      items.forEach(function(item) {
        var text = (item.getAttribute('data-searchable') || item.textContent).toLowerCase();
        if (query === '' || text.indexOf(query) !== -1) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        var offset = 80; // header height
        var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  // Intersection Observer for animations
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.card, .guide-block, .recipe-card').forEach(function(el) {
      el.style.opacity = '0';
      observer.observe(el);
    });
  }

  // Active sidebar link tracking
  var sidebarLinks = document.querySelectorAll('.sidebar-nav a[href^="#"]');
  if (sidebarLinks.length > 0) {
    var sections = [];
    sidebarLinks.forEach(function(link) {
      var id = link.getAttribute('href').substring(1);
      var section = document.getElementById(id);
      if (section) sections.push({ id: id, el: section, link: link });
    });

    window.addEventListener('scroll', function() {
      var scrollPos = window.scrollY + 100;
      var active = null;
      for (var i = sections.length - 1; i >= 0; i--) {
        if (sections[i].el.offsetTop <= scrollPos) {
          active = sections[i];
          break;
        }
      }
      sidebarLinks.forEach(function(l) { l.classList.remove('active'); });
      if (active) active.link.classList.add('active');
    }, { passive: true });
  }

})();
