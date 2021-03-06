import _ from 'lodash';
export const PostsServiceName = 'postsService';
export const PostsService = function () {
  let postsList = [];
  postsList.push(
    {
      id: 1,
      name: `Donec sollicitudin molestie malesuada.`,
      content: `Donec sollicitudin molestie malesuada. Curabitur non nulla sit amet nisl tempus convallis
      quis ac lectus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.`,
      date: 'Wen Apr 13 2016 12:11:45'
    }
  );
  postsList.push(
    {
      id: 2,
      name: `Vestibulum ac diam sit amet quam vehicula.`,
      content: `Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; 
      Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.`,
      date: 'Mon Sep 22 2017 8:44:22'
    }
  );
  this.findPost = (routeID) => {
    return _.find(postsList, {id: routeID});
  };
  this.addPost = (newName, newContent) => {
    let d = new Date();
    if (newName.trim() && newContent.trim()) {
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
  this.getLenght = () => {
    return postsList.length;
  };
};