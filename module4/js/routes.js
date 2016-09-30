(function () {
    'use strict';

    angular.module('appMenu')
        .config(routeConfig);

    routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function routeConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('home', {
                url : '/home',
                templateUrl : 'templates/home.html'
            })
            .state('categories', {
                url : '/categories',
                templateUrl : 'templates/categories.html',
                controller : 'categoriesController as cat',
                resolve : {
                    categories : ['menuDataService', function (menuDataService) {
                        return menuDataService.getAllCategories();
                    }]
                }
            })
            .state('items', {
                url : '/items/{categoryShortName}',
                templateUrl : 'templates/items.html',
                controller : 'itemController as iCtrl',
                resolve : {
                    items : ['$stateParams', 'menuDataService', function ($stateParams, menuDataService) {
                        return menuDataService.getItemsForCategory($stateParams.categoryShortName)
                    }]
                }
            })
    }
})();