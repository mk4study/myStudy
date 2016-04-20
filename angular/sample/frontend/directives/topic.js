angular.module('main')
    .directive('topic', function() {
        return  {
            restrict: 'E',
            templateUrl: '/directives/topic.html',
            replace: true,
            transclude: true,
            scope: {
                title: '@title',
                date: '@date'
            }
        };
    });