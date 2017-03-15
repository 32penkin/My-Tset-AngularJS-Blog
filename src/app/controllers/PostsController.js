export const PostsCtrlName = 'postsCtrl';
export const PostsCtrl = ($scope, postsFactory) => {
  $scope.posts = postsFactory;
};