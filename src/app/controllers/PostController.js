import _ from 'lodash';
export const PostCtrlName = 'postCtrl';
export const PostCtrl = ($scope, $routeParams, postsFactory) => {
  let postid = Number($routeParams.postId);
  $scope.post = _.find(postsFactory, {id: postid});
};