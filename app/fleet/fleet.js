'use strict';

angular.module('myApp.fleet', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/fleet', {
    templateUrl: 'fleet/fleet.html',
    controller: 'FleetCtrl'
  });
}])

.controller('FleetCtrl', [function() {

}]);
