import '../css/Thread.css';
import React from 'react';
import { Link } from 'react-router-dom';

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
                  {/* CREATE A LINK TO EACH COMMENT*/}
                  <a href={post.data.permalink}>
                    {post.data.title}                    
                  </a>
                </p>
                <p className="author">
                  Posted by <a href={`http://reddit.com/u/${post.data.author}`}>
                    {post.data.author}
                  </a>
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