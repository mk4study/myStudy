angular.module('main')
    .directive('staffCard', function() {
        return  {
            restrict: 'E',
            templateUrl: '/directives/staffCard.html',
            replace: true,
            scope: false
        };
    });