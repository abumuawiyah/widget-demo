(function() {
  'use strict';

  angular
    .module('rapi')
    .factory('tmplUtil', tmplUtil);

  /** @ngInject */
  function tmplUtil() {

    var ret = {
        tmpl: _tmpl
    };
      
    function _tmpl(str,data){
        for(var prop in data) {
            str=str.replace(new RegExp('{'+prop+'}','g'), data[prop]);
        }
        return str;
    }
      
    this.$get = function() {
        return ret;
    };
      
    return ret;
  }
    
})();
