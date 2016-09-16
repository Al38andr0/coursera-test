ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];

function ToBuyShoppingController(ShoppingListCheckOffService) {
    var itemsToBuy = this;
    itemsToBuy.items = ShoppingListCheckOffService.getItemsToBuy();
    itemsToBuy.emptyList = false;

    itemsToBuy.buyItem = function(id) {
        ShoppingListCheckOffService.buyItem(id);
        itemsToBuy.emptyList = (itemsToBuy.items.length === 0);
    };
}

AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];

function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
    var itemsBought = this;
    itemsBought.items = ShoppingListCheckOffService.getItemsBought();
}