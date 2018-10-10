(function() {
  'use strict';

  angular
    .module('rapi')
    .controller('SampleController', SampleController);

  /** @ngInject */
  function SampleController($scope, util) {

    $scope.data = {
      headers: [{value: "Id"},{value: "Name"}],
      rows: [{id: 1, value: "Hafsa", onClick: function(e, row){console.log(row);}}, {id: 2, value: "Rumaysa", onClick: function(e, row){console.log(row);}}]
    };

  }
})();
