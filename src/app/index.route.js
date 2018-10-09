(function() {
  'use strict';

  angular
    .module('rapi')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider, tmplUtilProvider) {
    var tmpl = tmplUtilProvider.$get().tmpl;


    $stateProvider
      .state('rapihome', {
        url: '/',
        data: {
            displayName: 'Home'
        }
      })
        .state('rapisample', {
            url: '/sample',
            controller: 'SampleController',
            templateUrl: 'app/layout/samples/sample.html'
        })
        .state('rapisample.popup', {
            url: '/popup',
            controller: 'SamplePopupController',
            templateUrl: 'app/layout/samples/popup/sample.popup.html'
        })
            .state('rapisample.tree', {
                url: '/tree',
                controller: 'SampleTreeController',
                templateUrl: 'app/layout/samples/tree/sample.tree.html'
            })
            .state('rapisample.popover', {
                url: '/popover',
                controller: 'SamplePopoverController',
                templateUrl: 'app/layout/samples/popover/sample.popover.html'
            })
            .state('rapisample.gallery', {
                url: '/gallery',
                controller: 'SampleGalleryController',
                templateUrl: 'app/layout/samples/gallery/sample.gallery.html'
            })
            .state('rapisample.basenested', {
                url: '/basenested',
                controller: 'SampleBaseNestedController',
                templateUrl: 'app/layout/samples/base-nested/sample.base.nested.html'
            })
                .state('rapisample.basenested.item1', {
                    url: '/item1',
                    templateUrl: 'app/layout/samples/base-nested/item1/item1.html'
                })
                .state('rapisample.basenested.item2', {
                    url: '/item2',
                    templateUrl: 'app/layout/samples/base-nested/item2/item2.html'
                })
            .state('rapisample.multiselect', {
                url: '/multiselect',
                controller: 'SampleMultiSelectController',
                templateUrl: 'app/layout/samples/multi-select/sample.multi.select.html'
            });
      
    $urlRouterProvider.otherwise('/sample');

  }

})();
