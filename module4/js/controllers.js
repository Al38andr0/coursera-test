(function () {
    'use strict';

    angular.module('appMenu')
        .controller('categoriesController', categoriesController);

    categoriesController.$inject = ['categories'];

    function categoriesController(categories) {
        var cat = this;
        cat.categories = categories;
    }
})();

(function () {
    'use strict';

    angular.module('appMenu')
        .controller('itemController', itemController);

    itemController.$inject = ['$stateParams', 'items'];

    function itemController($stateParams, items) {
        var iCtrl = this;
        iCtrl.items = items.menu_items;
        iCtrl.category = $stateParams.categoryShortName;
    }
})();