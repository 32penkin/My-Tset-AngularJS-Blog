export const NewPostCtrlName = 'newPostCtrl';
export const NewPostCtrl = ($scope, postsService) => {
  $scope.addNew = function() {
    postsService.addPost($scope.newName, $scope.newContent, $scope.dateTime);
  }
};