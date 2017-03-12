import '../styles/style.scss';
import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';
import 'angular-route';
import _ from 'lodash';
import 'jquery';
import 'bootstrap';


var app = angular.module('BlogApp', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'src/app/templates/home.html',
      controller: 'homeCtrl'
    })
    .when('/posts', {
      templateUrl: 'src/app/templates/posts.html',
      controller: 'postsCtrl'
    })
    .when('/posts/:postId', {
      templateUrl: 'src/app/templates/post.html',
      controller: 'postCtrl'
    })
    .when('/newPost', {
      templateUrl: 'src/app/templates/newPost.html',
      controller: 'newPostCtrl'
    })
    .when('/login', {
      templateUrl: 'src/app/templates/login.html',
      controller: 'loginCtrl'
    })
    .otherwise({
      template: `<span>404 no such page</span>`
    })
});

app.controller('homeCtrl', function ($scope) {});

app.controller('postsCtrl', function ($scope, postsFactory) {
  $scope.posts = postsFactory;
});

app.controller('postCtrl', function ($scope, $routeParams, postsFactory) {
  let postid = Number($routeParams.postId);
  $scope.post = _.find(postsFactory, {id: postid});
});

app.controller('newPostCtrl', function ($scope, $routeParams, postsFactory) {
  $scope.posts = postsFactory;
  $scope.addNew = function() {
    if($scope.newName.trim() && $scope.newContent.trim() && $scope.dateTime) {
      $scope.posts.push({
        id: $scope.posts.length + 1,
        name: $scope.newName,
        content: $scope.newContent,
        date: $scope.dateTime
      });
      $scope.newName = '';
      $scope.newContent = '';
    }
  }
});

app.controller('loginCtrl', function ($scope) {});

app.factory('postsFactory', function () {
  return [];
});