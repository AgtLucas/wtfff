var wtf = wtf || {};

(function(window, undefined) {

  'use strict';

  var anchors = document.getElementsByTagName('a'),
      len,
      i;

      for ( i = 0, len = anchors.length; i < len; i++ ) {
        console.log( anchors[i].href );
      }

})(window);