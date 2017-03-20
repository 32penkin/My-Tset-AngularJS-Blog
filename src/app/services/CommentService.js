export const CommentsServiceName = 'commentsService';
export const CommentsService = function () {
  let commentList = [];
  this.addComment = (commentatorName, commentCont, postID) => {
    if (commentatorName.trim() && commentCont.trim()) {
      commentList.push({
        name: commentatorName,
        content: commentCont,
        id: postID
      });
    }
  };
  this.getComments = (postID) => {
    return commentList.filter((item) => {
      return item.id === postID;
    });
  };
  this.getAllComments = () => {
    return commentList;
  };
};