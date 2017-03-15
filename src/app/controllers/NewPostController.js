export const NewPostCtrlName = 'newPostCtrl';
export const NewPostCtrl = ($scope, postsFactory) => {
  $scope.posts = postsFactory;
  $scope.addNew = function() {
    if($scope.newName.trim() && $scope.newContent.trim() && $scope.dateTime) {
      $scope.posts.push({
        id: $scope.posts.length + 1,
        name: $scope.newName,
        content: $scope.newContent,
        date: $scope.dateTime
      });
      $scope.newName = '';
      $scope.newContent = '';
    }
  }
};