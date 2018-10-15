(function() {
  'use strict';

  angular
    .module('epsaui')
    .controller('SampleController', SampleController);

  /** @ngInject */
  function SampleController($scope, util, EpsaService) {
    
    EpsaService.getData().then(function(res){
      $scope.specs = [
          {value: "COURSE CODE", id: "course_code", type: "text"},
          {value: "COURSE NAME", id: "course_name", type: "text"},
          {value: "USER STATUS", id: "user_status", type: "label", templateUrl: "app/layout/samples/templates/user-status.html"},
          {value: "ENROLLED", id: "enrolled", type: "text"},
          {value: "COURSE COMPLETION", id: "course_completion", type: "text"},
          {value: "CREDITS (CUES)", id: "credit", type: "text"},
          {value: "TOTAL TIME SPENT", id: "total_time_spent", type: "text"},
          {value: "SCORE", id: "score", type: "text"},
          {value: "", type: "icon", iconClass: "glyphicon glyphicon-certificate", callback: function(e, row, spec){
            console.log(row, spec);
          }}
      ];
      $scope.data = res.data;
    });

    

  }
})();
