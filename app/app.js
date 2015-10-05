/* 
Definition of the main controller with a named function for helping during
the debugging. 
*/

(function () {
  'use strict';

  angular
    .module('app')
    .controller('MainCtrl', MainCtrl); /* Named function */

  // Controller
  function MainCtrl () {
    /* Capturing the context of this because it can change in a function.
    vm represents the model's view. */
    var vm = this; 

    vm.text ="Some text";

    //...

  }
      
})();
