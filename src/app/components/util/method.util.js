(function(glob, ng, $) {
  'use strict';

  angular
    .module('epsaui')
    .factory('methodUtil', methodUtil);

  /** @ngInject */
  function methodUtil() {
    
    // boolean
    function _isEmpty(value) {
        if (!value) {
          return true;
        }
        if (ng.isArray(value) || ng.isString(value)) {
          return !value.length;
        }
        for (var key in value) {
          if (hasOwnProperty.call(value, key)) {
            return false;
          }
        }
        return true;
    }
      
    // collections
    function _find(items, callback){
        if(items){
            var ret;
            for(var i = 0, len = items.length; i < len; i++){
                var item = items[i];
                if(callback(item)){
                    ret = item;
                    break;
                }
            }
            return ret;
        }
    }
      
    function _toArray(obj){        
        return glob.Object.keys(obj).map(function (key,b,c) {
            return obj[key]
        });
    }
      
    function _shuffle(array) {
        var tmp, current, top = array.length;

        if (top) {
          while (--top) {
            current = Math.floor(Math.random() * (top + 1));
            tmp = array[current];
            array[current] = array[top];
            array[top] = tmp;
          }
        }

        return array;
    }
 
    return ng.extend({
        // globals function
        storage     : glob.localStorage,
        parseJSON   : glob.JSON.parse,
        
        // jQuery utility functions
        map         : $.map,
        
        // angular utility functions
        clone       : ng.copy,
        extend      : ng.extend,
        bind        : ng.bind,
        element     : ng.element,        
        isFunction  : ng.isFunction,
        isObject    : ng.isObject,
        isUndefined : ng.isUndefined,
        isDefined   : ng.isDefined,
        each        : ng.forEach,
        noop        : ng.noop,
        gObject     : glob.Object
    },{
        // local utility functions
        find        : _find,
        isEmpty     : _isEmpty,
        toArray     : _toArray,
        shuffle     : _shuffle
    });
  }
    
})(window, angular, jQuery);
