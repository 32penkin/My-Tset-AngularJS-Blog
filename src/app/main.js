import '../styles/style.scss';
import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';
import 'angular-route';
import 'angular-css';

import TemplateHomeUrl from  'ngtemplate-loader!./templates/home.html';
import TemplatePostsUrl from 'ngtemplate-loader!./templates/posts.html';
import TemplateNewPostUrl from 'ngtemplate-loader!./templates/newPost.html';
import TemplateLoginUrl from 'ngtemplate-loader!./templates/login.html';

import HomeStyle from 'style-loader!./templates/templatesStyles/home.scss';
import PostsStyle from 'style-loader!./templates/templatesStyles/posts.scss';
import PostStyle from 'style-loader!./templates/templatesStyles/post.scss';
import NewPostStyle from 'style-loader!./templates/templatesStyles/newPost.scss';
import LoginStyle from 'style-loader!./templates/templatesStyles/login.scss';

import {PostComponentName, PostComponent} from './components/post'

import {HomeCtrlName, HomeCtrl} from './controllers/HomeController';
import {PostsCtrlName, PostsCtrl} from './controllers/PostsController';
import {NewPostCtrlName, NewPostCtrl} from './controllers/NewPostController';
import {LoginCtrlName, LoginCtrl} from './controllers/LoginController';
import {PostsServiceName, PostsService} from './services/PostsService';

const app = angular.module('BlogApp', ['ngRoute', 'angularCSS']);

app
  .component(PostComponentName, PostComponent)
  .config(($locationProvider, $routeProvider) => {
    $locationProvider
      .html5Mode({
        enabled: true,
      });
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
        template: `<post></post>`,
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
  })
  .service(PostsServiceName, PostsService)
  .controller(HomeCtrlName, HomeCtrl)
  .controller(PostsCtrlName, PostsCtrl)
  .controller(NewPostCtrlName, NewPostCtrl)
  .controller(LoginCtrlName, LoginCtrl);

