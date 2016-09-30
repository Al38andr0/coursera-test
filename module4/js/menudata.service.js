(function () {
    'use strict';

    angular.module('data').service('menuDataService', menuDataService);

    menuDataService.$inject = ['$http', 'apiPath'];

    function menuDataService($http, apiPath) {
        var service = this;
        service.getAllCategories = function () {
            return $http({
                method : "GET",
                url : apiPath + "/categories.json"
            }).then(function (result) {
                return result.data;
            }).catch(function (error) {
                console.log("Error on categories", error)
            })
        };
        service.getItemsForCategory = function(categoryShortName) {
            return $http({
                method : "GET",
                url : apiPath + "/menu_items.json?category=" + categoryShortName
            }).then(function (result) {
                return result.data;
            }).catch(function (error) {
                console.log("Error on categories", error)
            })
        }
    }
})();