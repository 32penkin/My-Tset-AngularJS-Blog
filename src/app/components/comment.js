import CommentPostUrl from 'ngtemplate-loader!../templates/comment.html';
import {CommentCtrl} from '../controllers/CommentController';
import {PostCtrl} from '../controllers/PostController';

export const CommentComponentName = 'comment';
export const CommentComponent = {
  templateUrl: CommentPostUrl,
  controller: CommentCtrl
}