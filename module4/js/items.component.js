(function () {
    'use strict';

    angular.module('appMenu')
        .component('itemsComponent', {
            templateUrl : 'templates/item.html',
            bindings : {
                items : "<"
            }
    });
})();