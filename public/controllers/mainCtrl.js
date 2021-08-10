(function () {

    var app = angular.module("mainController", [ 'infinite-scroll']);

    app.config(function () {

        //console.log("mainController module loaded");

    });


    app.controller('mainCtrl', function ($http, $location, $timeout, $rootScope, $interval, $window,  $route, $scope) {

        var scope = this;
        scope.loadme = true;
     
    });


}());