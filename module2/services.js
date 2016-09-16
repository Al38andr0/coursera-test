function ShoppingListCheckOffService() {
    var service = this;
    var toBuy = [
        {
            name : "cookies",
            quantity : 10
        },
        {
            name : "cakes",
            quantity : 2
        },
        {
            name : "baguettes",
            quantity : 5
        },
        {
            name : "donuts",
            quantity : 3
        },
        {
            name : "pains au chocolate",
            quantity : 6
        }
    ];

    var bought = [
        {
            message : "Nothing bought yet"
        }
    ];

    service.buyItem = function (index) {
        bought.push(toBuy[index]);
        toBuy.splice(index, 1);
    };

    service.getItemsToBuy = function () {
        return toBuy;
    };
    service.getItemsBought = function () {
        return bought;
    };
}