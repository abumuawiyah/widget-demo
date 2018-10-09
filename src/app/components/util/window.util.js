(function(base) {
  'use strict';

  angular
    .module('rapi')
    .factory('windowUtil', windowUtil);

  /** @ngInject */
  function windowUtil() {
      var ret = base;
      
      this.$get = function() {
        return ret;
      };
      
      return ret;
  }
    
})(window);
