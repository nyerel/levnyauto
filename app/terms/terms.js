'use strict';

angular.module('myApp.terms', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/terms', {
    templateUrl: 'terms/terms.html',
    controller: 'TermsCtrl'
  });
}])

.controller('TermsCtrl', [function() {

}]);
