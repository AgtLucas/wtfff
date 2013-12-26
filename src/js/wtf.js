var wtf = wtf || {};

(function(window, undefined) {

  'use strict';

  var forbiddenWords = ['javascript:void(0);', 'javascript:void(0)', 'javascript:', '#'];
  var anchors = document.getElementsByTagName('a'),
      len,
      x, z,
      e, i;

  for (i = 0; i < anchors.length; i++) {
    for (x = 0; x < forbiddenWords.length; x++) {
      if (anchors[i] == forbiddenWords[x]) {
        anchors[i].href = '';
      }
    }
  }

})(window);