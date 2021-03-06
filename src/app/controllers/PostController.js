export const PostCtrlName = 'postCtrl';
export const PostCtrl = ($scope, $routeParams, postsService, commentsService) => {
  let postid = Number($routeParams.postId);
  $scope.post = postsService.findPost(postid);
  $scope.comments = commentsService.getComments(postid);
  $scope.addNewComment = function() {
    commentsService.addComment($scope.comName, $scope.comCont, postid);
    $scope.comments = commentsService.getComments(postid);
    $scope.comName = '';
    $scope.comCont = '';
  };
  $scope.showComments = function () {
    console.log($scope.comments);
  }
};