export const NewPostCtrlName = 'newPostCtrl';
export const NewPostCtrl = ($scope, postsService, $location ) => {
  $scope.addNew = function() {
    postsService.addPost($scope.newName, $scope.newContent);
    $location.path('/posts/' + postsService.getLenght());
  }
};