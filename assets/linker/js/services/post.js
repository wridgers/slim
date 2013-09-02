'use strict';

angular.module('slimServices', ['ngResource']).
  factory('Post', function($resource) {
    return $resource('post/:id', {}, {
      query: {
        method: 'GET',
        params: {
          id: ''
        },
        isArray: true
      }
    });
});
