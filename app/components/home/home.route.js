(function() {
  'use strict';

  angular
    .module('app')
    .config(homeRoute);

  function homeRoute($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/components/home/home.html',
        controller: 'HomeController',
        controllerAs: 'home'
      });
  }

})();
