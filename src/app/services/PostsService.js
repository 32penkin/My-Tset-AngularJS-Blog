import {Post} from '../components/Post';

export const PostsServiceName = 'postsService';
export const PostsService = function (){
  let postsArr = [];
  this.addNewPost = (newName, newContent, dateTime) => {
    if(newName.trim() && newContent.trim() && dateTime) {
      postsArr.push(new Post(postsArr.length + 1, newName, newContent, dateTime));
      newName = '';
      newContent = '';
    }
  };
  this.getPostsList = () => {
    return postsArr;
  };
};