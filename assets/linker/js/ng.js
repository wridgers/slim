'use strict';

angular.module('slim', ['ngRoute', 'slimServices']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.

      // view posts
      when('/posts', { templateUrl: '/list.html', controller: PostListCtrl }).
      when('/post/:postId', { templateUrl: '/view.html', controller: PostViewCtrl }).

      otherwise({redirectTo: '/posts'});
}]);
