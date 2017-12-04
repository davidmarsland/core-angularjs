angular.module('appHello', [])
  .controller('helloController', 
    function ($scope) {
      $scope.message="Mars"
    }
  );