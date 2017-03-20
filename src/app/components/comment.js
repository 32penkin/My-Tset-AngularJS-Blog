import CommentPostUrl from 'ngtemplate-loader!../templates/comment.html';

export const CommentComponentName = 'comment';
export const CommentComponent = {
  bindings: {
    name: '=',
    content: '='
  },
  templateUrl: CommentPostUrl,
  controller: function () {},
  controllerAs: '$ctrl'
};