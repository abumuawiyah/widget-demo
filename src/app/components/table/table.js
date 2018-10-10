(function() {
  'use strict';

  angular
    .module('rapi')
    .directive('tableWidget', tableWidget);

  /** @ngInject */
  function tableWidget(util) {
    var templateUrl = util.tmpl('{appPath}/{htmlPath}',{
        appPath: 'app',
        htmlPath: 'components/table/table.html'
    });  
      
    var directive = {
      restrict: 'A',
      templateUrl: templateUrl,
      scope: {
          data: '='
      },
      controller: TableWidgetController,
      controllerAs: 'vm',
      bindToController: true,
      transclude: true,
      replace: true
    };

    return directive;

    /** @ngInject */
    function TableWidgetController($scope) {

    }
  }

})();
