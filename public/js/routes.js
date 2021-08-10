//console.log("routes.js loaded");

(function () {

    var app = angular.module('appRoutes', ['ngRoute']);



    app.config(function ($routeProvider, $locationProvider) {

        $routeProvider
        
            .when('/', {

                templateUrl: '../views/pages/shop.html',
                controller: 'shoesCtrl',
                name: "PF | Assignment",
                controllerAs: 'shoes'
            })
   
            .otherwise({ redirectTo: '/' });


        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        }); 

    });


}());