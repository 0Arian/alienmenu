import '../css/Thread.css';
import React from 'react';

class Thread extends React.Component {
  render() {
    return (
      <table>
        <tbody>
          {this.props.threads.map(post =>
            <tr key={post.data.id}>
              <td>
                <p className="score">{post.data.score}</p>
              </td>
              <td>
                <p className="title">
                  {/* CREATE A LINK TO EACH COMMENT*/}
                  <a href={post.data.url}>
                    {post.data.title}                    
                  </a>
                </p>
                <p className="author">
                  Posted by <a href={`http://reddit.com/u/${post.data.author}`}>{post.data.author}</a>
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