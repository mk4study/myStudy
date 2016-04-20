angular.module('main')
    .controller('articleController', ['$scope', 'Articles', '$routeParams', function($scope, Articles, $routeParams) {
        $scope.article = Articles.getArticle($routeParams.groupid, $routeParams.articleid);
    }]);