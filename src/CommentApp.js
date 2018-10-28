import React, { Component } from 'react';
import './App.css';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

class CommentApp extends Component {
  constructor () {
    super()
    this.state = {
      comments:[]
    }
  }

  componentWillMount () {
    this._loadComments()
  }
  

  _loadComments(){
    let comments = localStorage.getItem('comments');
    if(comments){
      //JSON.parse() 方法用于将一个 JSON 字符串转换为对象
      comments = JSON.parse(comments);
      this.setState({
        comments
      })
    }
  }
  
  _saveComments(comments){
    //json.stringfy()将对象、数组转换成字符串
    localStorage.setItem('comments', JSON.stringify(comments));
  }

  handleSubmitComment (comment) {
    if (!comment) return
    if (!comment.username) return alert('请输入用户名')
    if (!comment.content) return alert('请输入评论内容')
    const comments = this.state.comments;
    comments.push(comment);
    this.setState({
      comments
    })
    this._saveComments(comments)
  }
  
  handleDeleteComment (index){
    const comments = this.state.comments;
    comments.splice(index,1);
    this.setState({comments});
    this._saveComments(comments);
  }

  render() {
    return (
      <div className='wrapper'>
        <CommentInput
          onSubmit={this.handleSubmitComment.bind(this)} />
        <CommentList 
          comments={this.state.comments}
          onDeleteComment={this.handleDeleteComment.bind(this)}
        />
      </div>
    )
  }
}

export default CommentApp;
