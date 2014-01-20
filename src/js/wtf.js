(function(window, document, undefined) {

  'use strict';

  var forbiddenWords = ['javascript:void(0);', 'javascript:void(0)', 'javascript:', '#'];
  var anchors = document.getElementsByTagName('a'),
      len,
      x, z,
      e, i;

  function stopThat(evt) {
    evt.preventDefault();
  }

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