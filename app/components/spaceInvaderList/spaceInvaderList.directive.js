(function () {
  'use strict';

  angular
    .module('app')
    .directive('spaceInvaderList', spaceInvaderList); /* Named function */

  /* Dependency injection made separately is cleaner and allows non destructive minification. */
  spaceInvaderList.$inject = ['$log', 'spaceInvadersData']; 


    function spaceInvaderList() {
        var directive = {
            link: linkFunction,
            templateUrl: './app/components/spaceInvaderList/spaceInvaderList.view.html',
            restrict: 'E',
            controller: SpaceInvaderListController,
            controllerAs: 'vm',
        };
        return directive;

        function linkFunction() {
            //...
        }

        /** @ngInject */
        function SpaceInvaderListController($scope, $log, spaceInvadersData) {

            var vm = this;
            vm.spaceInvaders = [];

            activate();

            function activate() {
                return getSpaceInvaders().then(function() {
                    $log.info('Activated SpaceInvaders View');
                });
            }

            function getSpaceInvaders () {
                return spaceInvadersData.getSpaceInvaders()
                    .then(function(data) {
                        vm.spaceInvaders = data.space_invaders;
                        return vm.spaceInvaders;
                    });
            }
        }
    }
})();