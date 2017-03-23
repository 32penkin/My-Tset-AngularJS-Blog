export const PostsCtrlName = 'postsCtrl';
export const PostsCtrl = ($scope, $routeParams, postsService, commentsService) => {
  $scope.posts = postsService.getPostsList();
  postsService.getPostsList().forEach((post) => {
    post.commentsCount = commentsService.getCommentsCount(post);
  });
};