//I'm using separate files for the controllers and services

(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .service('MenuSearchService', MenuSearchService)
        .constant('ApiPath', "https://davids-restaurant.herokuapp.com/menu_items.json")
        .controller('NarrowItDownController', NarrowItDownController)
        .directive('itemsLoaderIndicator', itemsLoaderIndicator)
        .directive('foundItems', foundItems);

})();