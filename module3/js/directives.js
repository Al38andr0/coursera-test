itemsLoaderIndicator.$inject = [];

function itemsLoaderIndicator() {
    var loader = {
        templateUrl : 'templates/itemsloaderindicator.template.html'
    };
    return loader;
}

foundItems.$inject = [];

function foundItems() {
    var list = {
        restrict : 'E',
        templateUrl : 'templates/list.template.html',
        scope : {
            items : "<foundItems",
            remove : "&onRemove"
        },
        controller : foundItemsController,
        controllerAs : 'dir',
        bindToController: true
    };

    return list;
}