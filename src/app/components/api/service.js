(function() {
    'use strict';
  
    angular
      .module('epsaui')
      .factory('EpsaService', EpsaService);
  
    /** @ngInject */
    function EpsaService($resource) {
        
        return {
            getData : function() {
              var request = $resource('../app/components/data/data.json');
              return request.get().$promise;
            }
        }
    }
  
  })();
  