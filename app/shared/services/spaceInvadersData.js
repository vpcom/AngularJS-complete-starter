/*
spaceInvadersData is a module of its own. It is independant from the app 
$http is use in order to use its implementation of Javascript promises with
then. The error is sent through the catch.
*/

(function () {
  'use strict';

  angular
    .module('spaceInvadersData', [])
    .factory('spaceInvadersData', spaceInvadersData); /* named function */

    spaceInvadersData.$inject = ['$http', '$log']; /* dependency injection made separately is cleaner */

    function spaceInvadersData($http, $log) {

        var dataUrl = "./assets/data/space_invaders.json"

        // The return exposes the interface
        return {
            getSpaceInvaders: getSpaceInvaders
        };

        // implementation of methods
        function getSpaceInvaders() {
            return $http.get(dataUrl)
                .then(getSpaceInvadersComplete)
                .catch(getSpaceInvadersFailed);

            function getSpaceInvadersComplete(response) {
                return response.data;
            }

            function getSpaceInvadersFailed(error) {
                $log.error('XHR Failed for getSpaceInvaders.' + error.data);
            }
        }
    }
})();