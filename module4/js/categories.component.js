(function () {
    'use strict';

    angular.module('appMenu')
        .component('categoriesComponent', {
            templateUrl: 'templates/category.html',
            bindings: {
                categories: "<"
            }
        });
})();