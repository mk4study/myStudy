angular.module('main')
    .controller('dashboardController', ['$scope', 'Articles', function ($scope, Articles) {
		$scope.articleGroups = Articles.getAll();
//		$scope.articleGroups = [
//			{
//				id: 'news',
//				title: 'News',
//				articles: [
//					{
//						id: '1',
//						title: 'VSSD Boot Camp 申込み受付中',
//						detail: 'Verasym System Desiger（VSSD）をもっと知りたい！という方のために定期開催中！お気軽ご申し込み下さい!',
//						date: '2016年1月4日'
//					},
//					{
//						id: '2',
//						title: 'VSAG Boot Camp 申込み受付中',
//						detail: 'Verasym Application Generator（VSAG）をもっと知りたい！という方のために定期開催中！お気軽ご申し込み下さい!',
//						date: '2016年1月4日'
//					},
//					{
//						id: '3',
//						title: 'VSBA Boot Camp 申込み受付中',
//						detail: 'Verasym Business Analysis（VSBA）をもっと知りたい！という方のために定期開催中！お気軽ご申し込み下さい!',
//						date: '2016年1月4日'
//					},
//				]
//			},
//			{
//				id: 'notice',
//				title: 'Notice',
//				articles: [
//					{
//						id: '4',
//						title: 'サービスご利用時間のお知らせ',
//						detail: 'サービスのご利用時間は下記となります。下記の時間帯以外はサービスをご利用頂けません。\n6:00～24:00',
//						date: '2016年1月4日'
//					},
//					{
//						id: '5',
//						title: 'サーバーメンテナンスのお知らせ',
//						detail: '下記の日時にサーバーメンテナンスを行います。下記の時間帯はサービスをご利用頂けません。\n2016年3月2日(土) 19:00～23:00',
//						date: '2016年2月26日'
//					},
//				]
//			},
//		];
//        $scope.topicTitle = 'Topic';
//        $scope.topics = [
//            {
//                title: 'サービスご利用時間のお知らせ',
//                detail: 'サービスのご利用時間は下記となります。下記の時間帯以外はサービスをご利用頂けません。\n6:00～24:00',
//                date: '2016年1月4日'
//            },
//            {
//                title: 'サーバーメンテナンスのお知らせ',
//                detail: '下記の日時にサーバーメンテナンスを行います。下記の時間帯はサービスをご利用頂けません。\n2016年3月2日(土) 19:00～23:00',
//                date: '2016年2月26日'
//            },
//        ];
    }]);