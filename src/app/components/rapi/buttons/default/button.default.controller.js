(function() {
  'use strict';

  angular
    .module('rapi')
    .directive('rapiButtonDefault', rapiButtonDefault);

  /** @ngInject */
  function rapiButtonDefault(util) {
    var templateUrl = util.tmpl('{appPath}/{htmlPath}',{
        appPath: 'app',
        htmlPath: 'components/rapi/buttons/default/button.default.html'
    });  
      
    var directive = {
      restrict: 'A',
      templateUrl: templateUrl,
      scope: {
          type: '@',
          value: '@',
          styles: '='
      },
      controller: RapiButtonDefaultController,
      controllerAs: 'vm',
      bindToController: true,
      transclude: true,
      replace: true
    };

    return directive;

    /** @ngInject */
    function RapiButtonDefaultController($scope) {

        util.extend(this, {
        
            onClick: function(e, button){
                var pubEvt = util.pubEvt({
                     directiveName: directive.name, 
                     triggeredBy: 'click'
                 });
                $scope.$emit(pubEvt, { value: button.value });
            }
            
        });
    }
  }

})();
