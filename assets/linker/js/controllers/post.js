'use strict';

function PostListCtrl($scope, Post) {
  $scope.posts = Post.query();
}

function PostViewCtrl($scope, $routeParams, Post) {
  $scope.post = Post.get({id: $routeParams.postId});
}
