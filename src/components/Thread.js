import '../css/Thread.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

class Thread extends React.Component {
  render() {
    return (
      <table>
        <tbody>
          <tr>
            <td>
              <h1>
                <Link className="backLink" to="/">
                  ←
                </Link> 
              </h1>
            </td>
            <td>
              <h1>{this.props.id}</h1>
            </td>
          </tr>
          {this.props.threads.map(post =>
            <tr key={post.data.id}>
              <td>
                <p className="score">{post.data.score}</p>
              </td>
              <td>
                <p className="title">
                  {/* CREATE A LINK TO EACH THREAD*/}
                  <a href={post.data.url}>
                    {post.data.title}                    
                  </a>
                </p>
                <p className="author">
                  Submitted <Moment fromNow>{post.data.created_utc * 1000}</Moment> by <a href={`http://reddit.com/u/${post.data.author}`}>
                    {post.data.author}</a> <Link to={post.data.permalink}><span className="span">Comments</span></Link>
                </p>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    )
  }
}

export default Thread;