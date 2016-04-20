angular.module('main')
    .controller('cityController', ['$scope', '$http', '$filter', function ($scope, $http, $filter) {
        $scope.title = '住所検索';
        $scope.len = 10;
        $scope.start = 0;
        $scope.keyword = '';
        $scope.currentPage = 1;
        $scope.maxPage = 1;
        $scope.locations = [];
        $scope.pagination = [];
        
        // サブミット処理
        // JSONPでWEB APIを実行
        $scope.onsubmit = function () {
            // バリデーションエラーなしの場合
            if ($scope.myForm.$valid) {
                // Web APIを実行
                // HeartRails Geo API を使用
                // http://geoapi.heartrails.com/api.html
                $http.jsonp('http://geoapi.heartrails.com/api/json', {
                        params: {
                            method: 'suggest',
                            jsonp: 'JSON_CALLBACK',
                            keyword: $scope.keyword,
                            matching: 'like',
                        }
                    })
                    .success(function (data) {
                        if (data.response.error == null) {
                            // 検索結果をクリア
                            $scope.start = 0;
                            $scope.pagination.length = 0;
                            $scope.currentPage = 1;
                            // 取得したデータをソートして設定
                            $scope.locations = $filter('orderBy')(data.response.location, ['prefecture', 'city', 'town'], true);
                            // ページ数を算出
                            $scope.maxPage = Math.ceil($scope.locations.length / $scope.len);
                            // ページャー情報を作成
                            for (var i = 1; i <= $scope.maxPage; i++) {
                                $scope.pagination.push({
                                    no: i
                                });
                            }
                        } else {
                            // 検索結果をクリア
                            $scope.start = 0;
                            $scope.locations.length = 0;
                            $scope.pagination.length = 0;
                            $scope.currentPage = 1;
                            $scope.maxPage = 1;
                        }
                    })
                    .error(function (err) {
                    });
            }
            return false;
        }
        // ソート切替
        $scope.sort = function (exp, reverse) {
            $scope.locations = $filter('orderBy')($scope.locations, exp, reverse);
        }
        // ページ指定
        $scope.pager = function (page) {
            $scope.currentPage = page;
            $scope.start = $scope.len * ($scope.currentPage - 1);
        }
        // 次ページ移動
        $scope.pagerNext = function () {
            if ($scope.currentPage >= $scope.maxPage) {
                return;
            }
            $scope.currentPage++;
            $scope.start = $scope.len * ($scope.currentPage - 1);
        }
        // 前ページ移動
        $scope.pagerPrev = function () {
            if ($scope.currentPage <= 1) {
                return;
            }
            $scope.currentPage--;
            $scope.start = $scope.len * ($scope.currentPage - 1);
        }
        // アクティブページの判定
        $scope.isActive = function (page) {
            return $scope.currentPage == page;
        }
    }]);