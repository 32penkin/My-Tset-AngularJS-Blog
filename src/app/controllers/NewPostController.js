export const NewPostCtrlName = 'newPostCtrl';
export const NewPostCtrl = ($scope, postsService) => {
  $scope.posts = postsService.getPostsList();
  $scope.addNew = function() {
    postsService.addNewPost($scope.newName, $scope.newContent, $scope.dateTime);
  }
};