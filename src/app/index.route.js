(function() {
  'use strict';

  angular
    .module('rapi')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider, tmplUtilProvider) {
    var tmpl = tmplUtilProvider.$get().tmpl;


    $stateProvider
      
        .state('widgetsample', {
            url: '/sample',
            controller: 'SampleController',
            templateUrl: 'app/layout/samples/sample.html'
        });
      
    $urlRouterProvider.otherwise('/sample');

  }

})();
