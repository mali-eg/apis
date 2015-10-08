angular.module('onepos.controllers', []).
controller('captchaController', function($scope, $http) {
    $scope.text = "";
    $scope.message = "";
    $scope.submit = function() {
      // if ($scope.text.length>0) {
        $http({
            url: "http://localhost:8080/captcha?username=Mohamed&captcha-text="+$scope.text,
            method: "get"
        }).success(function (data, status, headers, config) {
            $scope.message = "Success";
        }).error(function (data, status, headers, config) {
            $scope.message = "Error, status = "+status;
        });
      // } else {
      //   $scope.message = "Please enter the code";
      // }
    };
});