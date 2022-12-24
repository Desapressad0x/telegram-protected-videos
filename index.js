// ==UserScript==
// @name         Download Telegram Videos
// @version      0.1
// @description  Download protected videos of telegram
// @author       Desapressado
// @match        https://web.telegram.org/*
// @icon         https://www.google.com/s2/favicons?sz=75&domain=web.telegram.org
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    if(window.location.href.indexOf('https://web.telegram.org/z') !== -1) {
      window.location.href = window.location.href.replace('z', 'k');
    }

    document.addEventListener('keydown', function(event) {
      if(event.key === 'F2') {
      try {
        if(document.querySelector('video').getAttribute('src') !== null) {
          window.open('https://web.telegram.org/k/' + document.querySelector('video').getAttribute('src'), '_blank');
        }
       } catch {}
     }
  });
})();
