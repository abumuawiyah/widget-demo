(function() {
  'use strict';

  angular
    .module('epsaui')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
