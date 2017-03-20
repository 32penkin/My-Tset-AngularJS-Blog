import _ from 'lodash';
export const PostsServiceName = 'postsService';
export const PostsService = function () {
  let postsList = [];
  this.findPost = (routeID) => {
    return _.find(postsList, {id: routeID});
  };
  this.addPost = (newName, newContent) => {
    let d = new Date();
    if(newName.trim() && newContent.trim()) {
      postsList.push({
        id: postsList.length + 1,
        name: newName,
        content: newContent,
        date: d.toDateString() + ' ' + d.toLocaleTimeString()
      });
      newName = '';
      newContent = '';
    }
  };
  this.getPostsList = () => {
    return postsList;
  };
};