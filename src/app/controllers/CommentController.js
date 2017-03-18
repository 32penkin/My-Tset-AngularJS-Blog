export const CommentControllerName = 'commentCtrl';
export const CommentCtrl = ($scope, $routeParams, commentsService) => {
  let postid = Number($routeParams.postId);
  $scope.comments = commentsService.getComments(postid);
  console.log(postid);
};