import React, { Component } from 'react'
import Comment from './Comment'

class CommentList extends Component {
  static defaultProps = {
    comments: []
  }

  handleDeteteComment (index) {
    if(this.props.onDeleteComment){
      this.props.onDeleteComment(index);
    }
  }

  render() {
    
    return (
      <div>
           {
             this.props.comments.map((comment, i) =>
                <Comment 
                  comment={comment} 
                  index={i}
                  onDeleteComment={this.handleDeteteComment.bind(this)}
                  key={i} />
              )
            }
      </div>
    )
  }
}

export default CommentList  