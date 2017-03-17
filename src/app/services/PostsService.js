import _ from 'lodash';
export const PostsServiceName = 'postsService';
export const PostsService = function () {
  let postsList = [];
  this.findPost = (routeID) => {
    return _.find(postsList, {id: routeID});
  };
  this.addPost = (newName, newContent, dateTime) => {
    if(newName.trim() && newContent.trim() && dateTime) {
      postsList.push({
        id: postsList.length + 1,
        name: newName,
        content: newContent,
        date: dateTime
      });
      newName = '';
      newContent = '';
    }
  };
  this.getPostsList = () => {
    return postsList;
  };
};