LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
    $scope.list = [];
    $scope.resultText = "";
    $scope.resultColor = "white";
    $scope.checkList = function () {
        var list = [];
        if(typeof $scope.list === 'string' && $scope.list != "") {
            list = $scope.list.split(",");
            $scope.resultText = (list.length <= 3) ? "Enjoy!" : "Too much!";
            $scope.resultColor = "green";
        } else {
            $scope.resultText = "Please enter data first";
            $scope.resultColor = "red";
        }
    }
}