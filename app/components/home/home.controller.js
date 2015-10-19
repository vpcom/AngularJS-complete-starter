(function() {
  'use strict';

  angular
    .module('app')
    .controller('HomeController', HomeController);

  function HomeController () {
    /* Capturing the context of this because it can change in a function.
    vm represents the model's view. */
    var vm = this; 

    vm.text ='The Space Invaders Doc is an AngularJS complete starter app that you can use to learn the basics or start a project quickly. See more info in the about page.';

    //...
      

  }
})();
