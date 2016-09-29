MenuSearchService.$inject = ['$http', 'ApiPath'];
function MenuSearchService($http, ApiPath) {
    var service = this;
    service.getMatchedMenuItems = function (searchTerms) {
        searchTerms = searchTerms.toLowerCase();
        return $http({
            method: "GET",
            url: (ApiPath)
        }).then(function (result) {
            var foundItems = [];
            if (searchTerms === '') {
                return foundItems;
            }
            var items = result.data.menu_items;
            for(var i = 0; i < items.length; i++) {
                if(items[i].description.indexOf(searchTerms) !== -1) {
                    foundItems.push(items[i]);
                }
            }
            return foundItems;
        }).catch(function (error) {
            console.log(error);
        });
    };
}