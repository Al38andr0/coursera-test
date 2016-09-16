ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];

function ToBuyShoppingController(ShoppingListCheckOffService) {
    var itemsToBuy = this;
    itemsToBuy.items = ShoppingListCheckOffService.getItemsToBuy();

    itemsToBuy.buyItem = function(id) {
        ShoppingListCheckOffService.buyItem(id);
    };
}

AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];

function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
    var itemsBought = this;
    itemsBought.items = ShoppingListCheckOffService.getItemsBought();
}