angular.module('onepos.directives', [])
    .directive('captchaImage', function(){
      return {
        restrict: 'E',
        scope: {},
        templateUrl: 'partials/widgets/captcha.html',
        link: function(scope, elem) {
	        elem.on('submit', function() {
	           scope.$broadcast('form:submit');
	        });
	    },
        controller: function ($scope, $http, $attrs) {
	        $http({
	            url: "http://localhost:8080/captchGeneration",
	            method: "post"
	        }).success(function (data, status, headers, config) {
	            $scope.imageBase64 = "data:image/png;base64, " + data.credentialVBO.captchaBinaryContent;
	        }).error(function (data, status, headers, config) {
	            $scope.data = data;
	            $scope.imageBase64 = "";
	            $scope.status = status;
	        });
	    }
      }
    });