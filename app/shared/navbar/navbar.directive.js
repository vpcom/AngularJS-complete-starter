(function() {
    'use strict';

    angular
        .module('app')
        .directive('navbar', navbar);

    /* Directive */
    function navbar() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/shared/navbar/navbar.html',
            controller: NavbarController,
        };

        return directive;

        function NavbarController($scope, $location) {
            // default navbar state
            $scope.navbarCollapsed = true;

            // testing the location to set the active element
            $scope.isActive = function (currentLocation) {
                return currentLocation == $location.path();
            };

        }
    }
})();
