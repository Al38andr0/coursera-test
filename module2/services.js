function ShoppingListCheckOffService() {
    var service = this;
    var items = [
        {
            name : "cookies",
            quantity : 10,
            bought : false,
            id : 1
        },
        {
            name : "cakes",
            quantity : 2,
            bought : false,
            id : 2
        },
        {
            name : "baguettes",
            quantity : 5,
            bought : false,
            id : 3
        },
        {
            name : "donuts",
            quantity : 3,
            bought : false,
            id : 4
        },
        {
            name : "pains au chocolate",
            quantity : 6,
            bought : false,
            id : 5
        }
    ];
    var numberItemsBought = 0;

    service.buyItem = function (id) {
        for(var i = 0; i < items.length; i++) {
            if (items[i].id === id) {
                items[i].bought = true;
            }
        }
        return numberItemsBought++;
    };

    service.getItems = function () {
        return items;
    }
}