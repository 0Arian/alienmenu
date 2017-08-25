import '../css/Comment.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import ReactHtmlParser from 'react-html-parser';

class Comment extends React.Component {
  render() {
    let CommentsTable, HeaderRow, title, key, headerKey;

    if(this.props.comments.length === 0){
      CommentsTable = null;
      HeaderRow = <tr><td><h1>Loading...</h1></td></tr>;
      title = null;
      key = `key${Date.now()}`;
      headerKey = `key${Date.now() + Date.now()}`
    } 

    else {
      key = this.props.comments[0].data.children[0].data.id;
      let signature = this.props.comments[0].data.children[0].data;


      HeaderRow = 
        <tr key={headerKey} className="mainRow">
          <td>
            <p className="threadScore">
              {signature.score}
            </p>
          </td>
          <td>
            <p className="mainAuthor">
              { ReactHtmlParser(ReactHtmlParser(signature.selftext_html)) }<br/>
              <span className="italicTextMain">Submitted <Moment fromNow>{signature.created_utc * 1000}</Moment> by <a href={`http://reddit.com/u/${signature.author}`}> {signature.author}</a> <font color="red">[Original Poster]</font></span>
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
                {ReactHtmlParser(ReactHtmlParser(comment.data.body_html))}<br/>
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
        <table className="container">
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