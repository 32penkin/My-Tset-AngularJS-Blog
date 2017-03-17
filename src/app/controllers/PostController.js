export const PostCtrlName = 'postCtrl';
export const PostCtrl = ($scope, $routeParams, postsService) => {
  let postid = Number($routeParams.postId);
  $scope.post = postsService.findPost(postid);
};