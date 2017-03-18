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
      if(item.id === postID) return item;
    });
  };
  this.getAllComments = () => {
    return commentList;
  };
};