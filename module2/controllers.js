ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];

function ToBuyShoppingController(ShoppingListCheckOffService) {
    var listToBuy = this;

    listToBuy.items = ShoppingListCheckOffService.getItems();
    listToBuy.buyProduct = function (id) {
        ShoppingListCheckOffService.buyItem(id);
    };
}

/*
AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];

function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
    var itemsBought = this;
}*/

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