angular.module('main')
    .service('Staffs', ['$resource', function ($resource) {
        return $resource('http://localhost:5000/employees/', {
            name: ''
        });
    }])
    .service('Staff', ['$resource', function ($resource) {
        return $resource('http://localhost:5000/employees/:id', {
            id: ''
        });
    }]);