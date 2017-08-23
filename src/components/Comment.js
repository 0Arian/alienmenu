import '../css/Comment.css';
import React from 'react';
import { Link } from 'react-router-dom';

class Comment extends React.Component {
  render() {
    let myComponent;
    let title;
    if(this.props.comments.length === 0){
      myComponent = null;
      title = null;
    } else {
      myComponent = 
        this.props.comments[1].data.children.map(comment => 
          <tr>
            <td>
              {comment.data.score}
            </td>
            <td>
              <p key={comment.data.id} className="author">
                {comment.data.body}
                <div className="spaceAbove">
                Posted by <a href={`http://reddit.com/u/${comment.data.author}`}> {comment.data.author}</a>
                </div>
              </p>
            </td>
          </tr>
        );
      title = this.props.comments[0].data.children[0].data.title;
    }
    return(
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <h1>
                  <Link className="backLink" to={`/r/${this.props.subId}`}>
                    ←
                  </Link>
                </h1>
              </td>
              <td>
                <h2>
                  {title}
                </h2>
              </td>
            </tr>
            {myComponent}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Comment;