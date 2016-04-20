angular.module('main')
    .controller('staffDetailController', ['$scope', 'Staff', '$routeParams', function($scope, Staff, $routeParams) {
        $scope.title = 'Staff Contact';
        $scope.id = $routeParams.id;
//        var StaffDetail = $resource(
//            'http://localhost:5000/employees/:id'
//        );
        $scope.staff = Staff.get({ id: $scope.id });
//        $http ({
//            method: 'GET',
//            url: 'http://localhost:5000/employees/' + $scope.id,
//        })
//        .success(function(data, status, headers, config){
//            $scope.staff = data;
//        })
//        .error(function(data, status, headers, config){
//            $scope.staff = {};
//        });
    }]);