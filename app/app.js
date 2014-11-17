(function () {
  'use strict';

  /* @ngdoc object
   * @name swks-genpoly
   * @requires $urlRouterProvider
   *
   * @description
   *
   */
  angular
    .module('swks-genpoly', [
      'ui.router',
      'ui.bootstrap',
      'home'
    ]);

  angular
    .module('swks-genpoly')
    .config(config);

  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
  }

})();
