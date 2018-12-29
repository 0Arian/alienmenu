import '../css/Thread.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

class Thread extends React.Component {
  render() {
    console.log(this.props.threads);
    let posts;
    if(this.props.threads.length > 1){
      posts = this.props.threads.map((post, index) => {
        if(post.data.is_self === true){
          return <tr key={post.data.id}>
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
                  <Link to={post.data.permalink} className="url">{post.data.url}</Link>
                  <p className="author">
                    Submitted <Moment fromNow>{post.data.created_utc * 1000}</Moment> by <a href={`http://reddit.com/u/${post.data.author}`}>
                      {post.data.author}</a> <Link to={post.data.permalink}><span className="span">Comments</span></Link>
                  </p>
                </td>
              </tr>;
        } else{
          return <tr key={post.data.id}>
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
                  <Link to={`/frame/${post.data.url}`} className="url">{post.data.url}</Link>
                  <p className="author">
                    Submitted <Moment fromNow>{post.data.created_utc * 1000}</Moment> by <a href={`http://reddit.com/u/${post.data.author}`}>
                      {post.data.author}</a> <Link to={post.data.permalink}><span className="span">Comments</span></Link>
                  </p>
                </td>
              </tr>;
        }
      });
      console.log(posts);
    } else {
      posts = <tr><td><h1>Loading...</h1></td></tr>
    }
    //let sync = this.props.threads.slice(0, 25);
    return (
      <table className="container">
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
         {posts} 
        </tbody>
      </table>
    )
  }
}

export default Thread;