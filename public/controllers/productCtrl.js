(function () {

    var app = angular.module('productsController', ['postServices']);

    app.config(function () {

        //console.log("shoesCtrl loaded");

    });

    app.controller('shoesCtrl', function ( $scope, $rootScope, $window,  $document,$timeout,Posts) {
     
        $scope.allShoes = [];
        $scope.theShoes1 = []
        $scope.theShoes2 = []
        $scope.theShoes2 = Posts.getPosts()

        var _page = 0;
        $scope.currentPageNumber = 0;
        $scope.window = angular.element($window)
         $scope.loadMoreo = function () {
            _page++;
      
            if($scope.theShoes1.length == 5){

                $scope.feedEmpty = true;

            }if($scope.theShoes2[_page] !== undefined){

                    $scope.somethingWentWrong = false;
                  
                        $scope.theShoes1 = $scope.theShoes1.concat($scope.theShoes2[_page]);
                        console.log("updated",$scope.theShoes1)
                        $scope.somethingWentWrong = true;
        
            } 

        };

    });

}());