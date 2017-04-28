var app = angular.module("myApp",[]);





app.directive("userinfo", function() {
    var directive = {};

        directive.restrict = 'E';
        directive.templateUrl = './templateHTML.html';
        directive.scope = {
            user : "=user"
        }

        directive.compile = function(element , attributes){
            element.html = ("The New Text is Here : ");
            //element.css = ("border", "1px solid #cccccc");

            var link = function($scope, element, attribute) {
                
                element.css("background-color" , "yellow");
            }
            return link;
             
        }
        return directive;
});




app.controller("myController", function($scope, $http) {
    $scope.dikshit = {};
    $scope.dikshit.firstName = "Dikshit";
    $scope.dikshit.lastName = "Dhiman";

    $scope.kamal = {};
    $scope.kamal.firstName = "Kamal";
    $scope.kamal.lastName = "Dolikay";

    $scope.Harish = {};
    $scope.Harish.firstName = "Harish";
    $scope.Harish.lastName = "Kumar";

    $scope.doClick = function() {
            console.log("doClick() called");
        }
});