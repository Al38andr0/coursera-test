(function (){
    'use strict';

    angular.module('mod1SolApp', [])
        .controller('mainCtrl', mainCtrl);

    mainCtrl.$inject = ['$scope'];

    function mainCtrl($scope) {
        $scope.name = 'pollo arrosto';
    }
})();
