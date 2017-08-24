import '../css/Comment.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

class Comment extends React.Component {
  render() {
    let CommentsTable, HeaderRow, title, key;

    if(this.props.comments.length === 0){
      CommentsTable = null;
      HeaderRow = <tr><td><h1>Loading...</h1></td></tr>;
      title = null;
      key = `key${Date.now}`;
    } 
    
    else {
      key = this.props.comments[0].data.children[0].data.id;
      let signature = this.props.comments[0].data.children[0].data;


      HeaderRow = 
        <tr key={key} className="mainRow">
          <td>
            <p className="threadScore">
              {signature.score}
            </p>
          </td>
          <td>
            <p className="mainAuthor">
              {signature.selftext}<br/>
              <br className="brTop"/>
              <span className="italicTextMain">Submitted <Moment fromNow>{signature.created_utc * 1000}</Moment> by <a href={`http://reddit.com/u/${signature.author}`}> {signature.author}</a></span>
            </p>
          </td>
        </tr>;
      
      CommentsTable = this.props.comments[1].data.children.map(comment => {
        if(comment.kind === "more" || comment.data.author === "[deleted]"){
          return <tr key={key}></tr>;
        }

        return(
          <tr key={comment.data.id}>
            <td>
              <p className="score">
                {comment.data.score}
              </p>
            </td>
            <td>
              <p className="author">
                {comment.data.body}<br/>
                <br className="brTop"/>
                <span className="italicText">Submitted <Moment fromNow>{comment.data.created_utc * 1000}</Moment> by <a href={`http://reddit.com/u/${comment.data.author}`}> {comment.data.author}</a></span>
              </p>
            </td>
          </tr>
        )
      });
      title = this.props.comments[0].data.children[0].data.title;
    }

    return(
      <div key={key}>
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
            {HeaderRow}
            {CommentsTable}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Comment;