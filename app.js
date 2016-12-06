(function() {
  'use strict';

  angular.module('LunchCheck', [])
    .controller('LunchCheckController', ControllerFunction);

    ControllerFunction.$inject = ['$scope'];
    function ControllerFunction($scope) {
        $scope.lunchItems = "";
        $scope.Message = "";

        $scope.CheckIfTooMuch = function() {
          if ($scope.lunchItems.length == 0) {
            $scope.Message = "Please enter data first!";
          } else {
            $scope.Message = processLunchItems($scope.lunchItems);
          }
        };

        function processLunchItems(lunchItems) {
          var items = lunchItems.split(',');
          if (items.length > 3) {
            return "Too much!";
          } else {
            return "Enjoy!";
          }
        }
    }
})();
