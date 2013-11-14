var wtf = wtf || {};

(function(window, undefined) {

  'use strict';

  var forbiddenWords = ['javascript:void(0);', 'javascript:void(0)', 'javascript:', '#'];
  var anchors = document.getElementsByTagName('a'),
      len,
      x, z,
      i;

      // for (x = 0, z = forbiddenWords.length; x < z; x++) {
      //   console.log(forbiddenWords[x]);
      // }

      Array.prototype.equals = function(array, strict) {
        if (!array)
          return false;

        if (arguments.length == 1)
          strict = true;

        if (this.length != array.length)
          return false;

        for (i = 0; i < this.length; i++) {
          if (this[i] instanceof Array && array[i] instanceof Array) {
            if (!this[i].equals(array[i], strict))
              return false;
          }
          else if (strict && this[i] != array[i]) {
            return false;
          }
          else if (!strict) {
            return this.sort().equals(array.sort(), true);
          }
        }
        return true;
      };

      // if (anchors.equals(forbiddenWords, false)) {
      //   console.log('ok');
      // }

      for (i = 0, len = anchors.length; i < len; i++) {
        console.log(anchors[i].href);
        var anchorsLinks = anchors[i].href;
        // var anchorsLinks = anchors[i].href;
        // if (anchorsLinks.equals(forbiddenWords, false)) {
        //   // anchors[i].addEventListener('click', function(e) {
        //     anchors[i].href = '';
        //     // e.preventDefault();
        //   // });
        // }
      }

})(window);