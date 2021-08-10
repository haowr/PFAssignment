//console.log("routes.js loaded");

(function () {

    var app = angular.module('appRoutes', ['ngRoute']);



    app.config(function ($routeProvider, $locationProvider) {//Only providers in config phase... no $rootScope or any other instances...

        $routeProvider
        
            .when('/', {

                templateUrl: '../views/pages/shop.html',
                controller: 'shoesCtrl',
                name: "HOJ | Shop",
                controllerAs: 'shoes'
            })
   
            .otherwise({ redirectTo: '/' });



        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        }); //now no more # before route


    });



}());