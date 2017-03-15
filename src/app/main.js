import '../styles/style.scss';
import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';
import 'angular-route';
import _ from 'lodash';
import 'angular-css';

import TemplateHomeUrl from  'ngtemplate-loader!./templates/home.html';
import TemplatePostsUrl from 'ngtemplate-loader!./templates/posts.html';
import TemplatePostUrl from 'ngtemplate-loader!./templates/post.html';
import TemplateNewPostUrl from 'ngtemplate-loader!./templates/newPost.html';
import TemplateLoginUrl from 'ngtemplate-loader!./templates/login.html';

import HomeStyle from 'style-loader!./templates/templatesStyles/home.scss';
import PostsStyle from 'style-loader!./templates/templatesStyles/posts.scss';
import PostStyle from 'style-loader!./templates/templatesStyles/post.scss';
import NewPostStyle from 'style-loader!./templates/templatesStyles/newPost.scss';
import LoginStyle from 'style-loader!./templates/templatesStyles/login.scss';

const app = angular.module('app', ['ngRoute', 'angularCSS']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: TemplateHomeUrl,
      controller: 'homeCtrl',
      css: HomeStyle
    })
    .when('/posts', {
      templateUrl: TemplatePostsUrl,
      controller: 'postsCtrl',
      css: PostsStyle
    })
    .when('/posts/:postId', {
      templateUrl: TemplatePostUrl,
      controller: 'postCtrl',
      css: PostStyle
    })
    .when('/newPost', {
      templateUrl: TemplateNewPostUrl,
      controller: 'newPostCtrl',
      css: NewPostStyle
    })
    .when('/login', {
      templateUrl: TemplateLoginUrl,
      controller: 'loginCtrl',
      css: LoginStyle
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