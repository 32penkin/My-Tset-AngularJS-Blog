import '../styles/style.scss';
import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';
import 'angular-route';
import 'angular-css';

import {PostCtrlName, PostCtrl} from './controllers/PostController';
import {HomeCtrlName, HomeCtrl} from './controllers/HomeController';
import {PostsCtrlName, PostsCtrl} from './controllers/PostsController';
import {NewPostCtrlName, NewPostCtrl} from './controllers/NewPostController';
import {LoginCtrlName, LoginCtrl} from './controllers/LoginController';
import {PostsServiceName, PostsService} from './services/PostsService';
import {CommentsServiceName, CommentService} from './services/CommentsService'
import {AppConfig} from './configs/AppConfig';

const app = angular.module('BlogApp', ['ngRoute', 'angularCSS']);

app
  .config(AppConfig)
  .service(PostsServiceName, PostsService)
  .factory(CommentsServiceName, CommentService)
  .controller(PostCtrlName, PostCtrl)
  .controller(HomeCtrlName, HomeCtrl)
  .controller(PostsCtrlName, PostsCtrl)
  .controller(NewPostCtrlName, NewPostCtrl)
  .controller(LoginCtrlName, LoginCtrl);

