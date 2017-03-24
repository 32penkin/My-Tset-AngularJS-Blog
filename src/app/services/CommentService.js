export const CommentsServiceName = 'commentsService';
export const CommentsService = function () {
  let commentList = [];
  this.addComment = (commentatorName, commentCont, postID) => {
    let d = new Date();
    if (commentatorName.trim() && commentCont.trim()) {
      commentList.push({
        name: commentatorName,
        content: commentCont,
        date: d.toDateString() + ' ' + d.toLocaleTimeString(),
        post_id: postID
      });
    }
  };
  this.getComments = (postID) => {
    return commentList.filter((item) => {
      return item.post_id === postID;
    });
  };
  this.getCommentsCount = (post) => {
    return commentList.filter((comment) => {
      return comment.post_id == post.id;
    }).length;
  };
  this.getAllComments = () => {
    return commentList;
  };
};