(function () {

    var app = angular.module('productsController', ['postServices']);

    app.config(function () {

        //console.log("shoesCtrl loaded");

    });

    app.controller('shoesCtrl', function ( $scope, $rootScope, $window,  $document,$timeout, $window,Users) {
     
        $scope.allShoes = [];
        $scope.theShoes1 = []
   $scope.theShoes2 = []
    

         $scope.theShoes2 = Users.getPosts()


     

         console.log($scope.shoes)
        $scope.load = function () {

            console.log($scope.shoes)

            //console.log("$scope.load works!");
            // When the user scrolls down 20px from the top of the document, show the button
            window.onscroll = function () { scrollFunction() };

            function scrollFunction() {
                //console.log("scrollFunction()");
                if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                    document.getElementById("myBtn").style.opacity = 100;
                } else {
                    document.getElementById("myBtn").style.opacity = 0;
                    document.getElementById("myBtn").style.backgroundColor = "#ffbbbc";
                }
            }



        };

        $scope.topFunction = function () {

            //console.log("hello");
            document.body.scrollTop = 0; // For Chrome, Safari and Opera 
            document.documentElement.scrollTop = 0; // For IE and Firefox

        }
        // When the user clicks on the button, scroll to the top of the document
        // function topFunction() {
        //   //console.log("hello");
        //  document.body.scrollTop = 0; // For Chrome, Safari and Opera 
        //  document.documentElement.scrollTop = 0; // For IE and Firefox
        //}
        $scope.load();
        var _page = 0;




    
console.log(        $scope.$emit('list:filtered')
)
        $scope.currentPageNumber = 0;
        $scope.window = angular.element($window)
       $scope.window.bind('scroll',()=>{

            var bottomDiv = angular.element($('#bottomDiv'))
          //  console.log(bottomDiv.offset())
                    $scope.bottomOfPageValue = $window.innerHeight + $window.pageYOffset

           // console.log($scope.bottomOfPageValue)
 if (($window.innerHeight + $window.pageYOffset) >= document.body.offsetHeight) {

        //alert("you're at the bottom of the page");
        $scope.somethingWentWrong = false;
    }
        })

        $($window).scroll(()=>{

           // console.log($window.scrollY)

        })
         $scope.loadMoreo = function () {
            _page++;

             //setTimeout(()=>{

           // $scope.currentPageNumber = _page
            console.log("_page",_page);
            //console.log($scope.theShoes1.length)
            //console.log("theShoes1", $scope.theShoes1)
            console.log("theShoes2", $scope.theShoes2)
            console.log($scope.theShoes1.length)

            if($scope.theShoes1.length == 5){

                //$scope.somethingWentWrong = false;
                $scope.feedEmpty = true;

            }if($scope.theShoes2[_page] !== undefined)
                            //$scope.theShoes1 = $scope.theShoes1.concat($scope.theShoes2[_page]);

                  {

                    console.log("coos")
                    $scope.somethingWentWrong = false;
                    //setTimeout(()=>{
                       // if(_page<5){
                        $scope.theShoes1 = $scope.theShoes1.concat($scope.theShoes2[_page]);
                        console.log("updated",$scope.theShoes1)
                        $scope.somethingWentWrong = true;
                   // }
                   // },5000)

                    // scope.loading = false;
                } 

            };



    });

 
  
    

}());