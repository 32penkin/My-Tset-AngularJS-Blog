import _ from 'lodash';
export const PostCtrlName = 'postCtrl';
export const PostCtrl = ($scope, $routeParams, postsService) => {
  let postid = Number($routeParams.postId);
  $scope.post = _.find(postsService.getPostsList(), {id: postid});
};