import TemplateHomeUrl from  'ngtemplate-loader!../templates/home.html';
import TemplatePostsUrl from 'ngtemplate-loader!../templates/posts.html';
import TemplatePostUrl from 'ngtemplate-loader!../templates/post.html';
import TemplateNewPostUrl from 'ngtemplate-loader!../templates/newPost.html';
import TemplateLoginUrl from 'ngtemplate-loader!../templates/login.html';

import HomeStyle from 'style-loader!../templates/templatesStyles/home.scss';
import PostsStyle from 'style-loader!../templates/templatesStyles/posts.scss';
import PostStyle from 'style-loader!../templates/templatesStyles/post.scss';
import NewPostStyle from 'style-loader!../templates/templatesStyles/newPost.scss';
import LoginStyle from 'style-loader!../templates/templatesStyles/login.scss';

export const AppConfig = ($routeProvider) => {
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
};