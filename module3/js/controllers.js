NarrowItDownController.$inject = ['MenuSearchService'];

function NarrowItDownController(MenuSearchService) {
    var vm = this;
    vm.searchedWord = '';
    vm.loader = false;
    vm.empty = false;
    vm.onRemove = function (index) {
        vm.found.splice(index, 1);
        vm.empty = (vm.found.length === 0);
    };
    vm.searchTerms = function(searchTerms) {
        vm.loader = true;
        var promise = MenuSearchService.getMatchedMenuItems(searchTerms);
        promise.then(function (response) {
            vm.found  = response;
            vm.empty = (vm.found.length === 0);
            vm.loader = false;
        })
        .catch(function (error) {
            console.log("Something wrong!");
        });
    };
}