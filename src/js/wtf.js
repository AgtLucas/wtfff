(function(window, document, undefined) {

  'use strict';

  var forbiddenWords = ['javascript:void(0);', '#', 'javascript:void(0)', 'javascript:'];
  var anchors = document.querySelectorAll('a'),
  // var as = Array.prototype.slice.call(document.querySelectorAll('a')),
      len,
      x, z,
      e, i;

  function stopThat(evt) {
    evt.preventDefault();
  }

  // as.forEach(function() {
  //   for (x = 0; x < forbiddenWords.length; x++) {
  //     if (as[i] == forbiddenWords[x]) {
  //       as[i].href = '';
  //       as[i].addEventListener(click, stopThat, false);
  //     }
  //   }
  // });

  for (i = 0; i < anchors.length; i++) {
    for (x = 0; x < forbiddenWords.length; x++) {
      if (anchors[i] == forbiddenWords[x]) {
        anchors[i].href = '';
        anchors[i].addEventListener('click', stopThat, false);
        // stopThat;
      }
    }
  }

  var never = document.getElementById('never');
  never.addEventListener('click', function() {
    document.body.style.background = '#666';
  }, false);

})(window, document);