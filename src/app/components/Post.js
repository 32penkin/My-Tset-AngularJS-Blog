import _ from 'lodash';
export class Post {

  constructor(id, name, content, date){
    this.id = id;
    this.name = name;
    this.content = content;
    this.date = date;
  }
}

// let postid = Number($routeParams.postId);
// $scope.post = _.find(postsService.getPostsList(), {id: postid});