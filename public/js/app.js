(function(){

//console.log("app.js loaded");

var app = angular.module('store',['appRoutes',"postServices","productsController","mainController","infinite-scroll",]);
																																																  
app.config(function(){


});

app.controller('StoreController', ['$http','$scope','$filter',  function($http,$scope,$filter,$rootScope,$window) {


}]);


}());