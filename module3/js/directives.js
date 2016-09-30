function itemsLoaderIndicator() {
    var loader = {
        templateUrl : 'templates/itemsloaderindicator.template.html'
    };
    return loader;
}

function foundItems() {
    var list = {
        restrict : 'E',
        templateUrl : 'templates/list.template.html',
        scope : {
            foundItems : "<",
            onRemove : "&"
        }
    };

    return list;
}