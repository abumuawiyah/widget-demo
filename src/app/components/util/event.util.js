(function() {
  'use strict';

  angular
    .module('epsaui')
    .factory('eventUtil', eventUtil);

  /** @ngInject */
  function eventUtil($exceptionHandler, tmplUtil) {
      
    function _pubEvt(data){
        var event = '{directiveName}::{triggeredBy}';
        var error = tmplUtil.tmpl('Error, directiveName - {directiveName}, triggeredBy - {triggeredBy}',{
            directiveName: data.directiveName,
            triggeredBy: data.triggeredBy
        });
        
        if(data && ( data.directiveName && data.triggeredBy ) ){
            return tmplUtil.tmpl(event,data);
        } 
        
        $exceptionHandler(error);
    }
 
    return {
        pubEvt: _pubEvt
    };

  }
    
})();
