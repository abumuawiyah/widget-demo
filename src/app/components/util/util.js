(function() {
  'use strict';

  angular
    .module('rapi')
    .factory('util', util);

  /** @ngInject */
  function util(methodUtil, tmplUtil, eventUtil) {
    var args = arguments;

    //initialize all util props
    (function(that){
        
        if(args){
            for( var i = 0, len = args.length; i < len; i++ ) {
                var obj = args[i];
                for( var prop in obj ) {
                    if( typeof obj[prop] === 'function' ||
                      typeof obj[prop] === 'object' ) that[prop] = obj[prop];
                }
            }
        }
        
    }(this));
 
    return this;
  }
    
})();
