//I'm using a separate file for the controllers and services

(function (){
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyShoppingController ', ToBuyShoppingController)
        // .controller('AlreadyBoughtShoppingController ', AlreadyBoughtShoppingController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService)
    ;
})();