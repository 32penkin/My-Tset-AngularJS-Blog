export const PostsCtrlName = 'postsCtrl';
export const PostsCtrl = ($scope, postsService) => {
  $scope.posts = postsService.getPostsList();
};