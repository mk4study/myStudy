angular.module('main')
    .controller('staffController', ['$scope', 'Staffs', function($scope, Staffs) {
        $scope.title = 'Staff';
// サービス化
//        var Staffs = $resource(
//            'http://localhost:5000/employees/:id'
//        );
        $scope.staffs = Staffs.query();
// リソース化
//        $http ({
//            method: 'GET',
//            url: 'http://localhost:5000/employees',
//            params: { name: ''}
//        })
//        .success(function(data, status, headers, config){
//            $scope.staffs = data;
//        })
//        .error(function(data, status, headers, config){
//            $scope.staffs = [];
//        });
    }]);