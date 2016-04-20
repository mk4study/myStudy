angular.module('main')
    .controller('contactUsController', ['$scope', '$http', function ($scope, $http) {
        $scope.title = 'Contact Us';
        $scope.init = true;
        $scope.completed = false;
        $scope.onsubmit = function () {
            $scope.init = false;
            $scope.completed = false;
            if ($scope.myForm.$valid) {
                alert('name:' + $scope.name + ' mail:' + $scope.mail + ' detail:' + $scope.detail);
                $scope.name = '';
                $scope.mail = '';
                $scope.detail = '';
                $scope.init = true;
                $scope.completed = true;
                $scope.myForm.$setPristine(true);
            }
        }
        $scope.clear = function () {
            $scope.name = '';
            $scope.mail = '';
            $scope.detail = '';
            $scope.init = true;
            $scope.completed = false;
            $scope.myForm.$setPristine(true);
            //$scope.myForm.$setUntouched();
            //            $scope.myForm.name.$setPristine();
            //            $scope.myForm.mail.$setPristine();
            //            $scope.myForm.detail.$setPristine();
            //            $scope.myForm.name.$setUntouched();
            //            $scope.myForm.mail.$setUntouched();
            //            $scope.myForm.detail.$setUntouched();
            //            $scope.myForm.name.$setDirty();
            //            $scope.myForm.mail.$setDirty();
            //            $scope.myForm.detail.$setDirty();
        }
    }]);