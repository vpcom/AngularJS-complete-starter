(function() {
  'use strict';

  angular
    .module('app')
    .config(aboutRoute);

  function aboutRoute($stateProvider) {
    $stateProvider
      .state('about', {
        url: '/about',
        templateUrl: 'app/components/about/about.html',
        controller: 'AboutController',
        controllerAs: 'about'
      });
  }

})();
