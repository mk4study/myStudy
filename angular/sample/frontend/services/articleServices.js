angular.module('main')
    .service('Articles', [function () {
		var articleGroups = [
			{
				id: 'news',
				title: 'News',
				articles: [
					{
						id: '1',
						title: 'AnularJsについて',
						overview: 'AngularJsについて調べた内容をまとめました。',
						date: '2016年1月4日',
						contents: [
							{
								title: 'AngularJSとは',
								detail: 'AngularJS（アンギュラージェイエス）は、Googleとコミュニティによって開発されているオープンソースのJavaScriptフレームワークである。ブラウザ上で動作するウェブアプリケーションの開発にMVCアーキテクチャを取り入れることを目的としている。MIT Licenseでライセンスされたフリーソフトウェアである。初版は、Miško HeveryとAdam Abronsによって2009年に発表され、2012年6月にバージョン1.0.0がリリースされた。',
								href: '',
								pics: '/assets/pics/angular-icon.svg'
							},
							{
								title: 'ライセンス',
								detail: 'MIT License',
								href: 'https://angularjs.org/',
								pics: ''
							},
							{
								title: '最新バージョン',
								detail: 'Angular1: 1.5.5\nAnular2: 2.0.0(Beta.15)',
								href: '',
								pics: ''
							},
						]
					},
					{
						id: '2',
						title: 'Cordovaについて',
						overview: 'Cordovaについて調べた内容をまとめました。',
						date: '2016年1月4日',
						contents: [
							{
								title: 'ハイブリッドアプリとは？',
								detail: 'モバイルへのアプリケーションの提供手段としては「ネイティブアプリ」「Webアプリ」「ハイブリッドアプリ」の3つが挙げられます。複数のデバイス/OS向けのアプリを作る場合、ネイティブアプリだとOSの種類によって異なる言語を使って開発を行わなくてはいけないため、開発コストの高さが問題となります。一方のWebアプリは、ブラウザのポテンシャルに縛られるため、ネイティブアプリらしい能動的な振る舞いや、セキュリティの厳しいデバイスの制御が容易に扱えないという問題があります。こうした問題を互いに補い、いいとこ取りをしたのが「ハイブリッドアプリ」です。',
								pics: '/assets/pics/hybridApplication.jpg'
							},
							{
								title: 'Apache Cordovaとは？',
								detail: 'モバイルデバイス向けのハイブリッドアプリ開発用のOSSのフレームワークです。HTML5+Javascriptを活用することでひとつのソースコードよりiOS、Androidなどの複数モバイルOSに対応させることが出来ます。また、ネイティブアプリのようなデバイス機能を使用したアプリ開発が可能となります。',
								href: 'https://cordova.apache.org/',
								pics: ''
							},
							{
								title: 'Cordovaの特徴',
								detail: '・HTML+CSS+Javascriptを使用したiOS/Androidアプリ開発が可能\n・ネイティブAPIのアクセスが可能\n・iOS/Androidを含むマルチプラットフォーム対応\n・既存のJavascriptフレームワークにも対応',
								pics: '/assets/pics/cordova.jpg'
							},
							{
								title: 'Cordovaの成り立ち',
								detail: 'Nitobi社のPhoneGapをAdobe社が買収し、Apacheへ寄贈してOSS化したもの。「Cordova」とはNitobi社が存在するストリートの名前である。（カナダ、バンクーバー）「PhoneGap」はAdobe社がCordovaを配布する際の名称（ディストリビュージョン名）となっている。',
								pics: ''
							},
							{
								title: 'ライセンス',
								detail: 'Apache License Version 2.0',
								pics: ''
							},
							{
								title: '最新バージョン',
								detail: '6.1.0',
								pics: ''
							},
						]
					},
				]
			},
			{
				id: 'notice',
				title: 'Notice',
				articles: [
					{
						id: '4',
						title: '当アプリケーションについて',
						overview: '当アプリケーションはmk4studyがAngularJsを勉強する過程で作成したものです。プログラムソースを参考にすることはお控えください。',
						date: '2016年1月4日'
					},
					{
						id: '5',
						title: '参考サイト',
						overview: '学習する際に参考にさせて頂いたサイト様はこちらです。',
						date: '2016年2月26日',
						contents: [
							{
								title: 'ふろしき.js',
								detail: '',
								href: 'http://furoshiki.hatenadiary.jp',
								pics: ''
							},
							{
								title: 'ビジネス+IT',
								detail: '',
								href: 'http://www.sbbit.jp/',
								pics: ''
							},
						]
					},
				]
			},
		];
		this.getAll = function() {
			return articleGroups;
		};
		this.getArticle = function(groudid, articleid) {
			var groupid = groudid;
			var articleid = articleid;
			group = articleGroups.filter(function(element) {
				return element.id == groupid;
			});
			results = group[0].articles.filter(function(element) {
				return element.id == articleid;
			});
			return results[0];
		};
	}]);