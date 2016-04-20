angular.module('main', ['ngRoute', 'ngResource', 'ngMessages'])
    .controller('mainController', ['$scope', function ($scope) {
        $scope.title = 'Study AngularJs';
        $scope.explain = 'AngularJs学習用アプリケーション';
        $scope.menus = [
            {
                title: 'JSONP',
                url: 'city'
            },
            {
                title: 'Form',
                url: 'contactUs'
            },
            {
                title: 'HTTP',
                url: 'staff'
            },
        ];
    }])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/contactUs', {
                templateUrl: 'contactUs.html',
                controller: 'contactUsController',
            })
            .when('/staff', {
                templateUrl: 'staff.html',
                controller: 'staffController',
            })
            .when('/staffDetail/:id', {
                templateUrl: 'staffDetail.html',
                controller: 'staffDetailController',
            })
            .when('/article/', {
                templateUrl: 'article.html',
                controller: 'articleController',
            })
            .when('/city/', {
                templateUrl: 'city.html',
                controller: 'cityController',
            })
            .otherwise({
                templateUrl: 'dashboard.html',
                controller: 'dashboardController',
            });
    });