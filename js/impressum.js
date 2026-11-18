(function () {
   var buttons = document.querySelectorAll('.language-button');
   var panels = document.querySelectorAll('[data-language-panel]');
   var backLink = document.querySelector('.back-link');

   function setLanguage(language) {
      panels.forEach(function (panel) {
         panel.hidden = panel.getAttribute('data-language-panel') !== language;
      });

      buttons.forEach(function (button) {
         var isActive = button.getAttribute('data-language') === language;
         button.classList.toggle('active', isActive);
         button.setAttribute('aria-pressed', String(isActive));
      });

      document.documentElement.lang = language;
      backLink.textContent = language === 'de'
         ? '← Zurück zur Startseite'
         : '← Back to Homepage';
      document.title = language === 'de'
         ? (document.body.classList.contains('privacy-page')
            ? 'Datenschutzerklärung | Lisa-Maria Hollaus'
            : 'Datenschutzerklärung & Impressum | Lisa-Maria Hollaus')
         : (document.body.classList.contains('privacy-page')
            ? 'Privacy Policy | Lisa-Maria Hollaus'
            : 'Privacy Policy & Legal Notice | Lisa-Maria Hollaus');

      if (window.location.hash === '#datenschutz-de' || window.location.hash === '#privacy-policy') {
         window.requestAnimationFrame(function () {
            var target = document.querySelector(window.location.hash);
            if (target) {
               target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
         });
      }
   }

   var initialLanguage = window.location.hash === '#datenschutz-de' ? 'de' : 'en';

   buttons.forEach(function (button) {
      button.addEventListener('click', function () {
         setLanguage(button.getAttribute('data-language'));
      });
   });

   setLanguage(initialLanguage);
})();
