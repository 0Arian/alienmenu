import React from 'react';
import Comment from './Comment';

class ViewPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    }
  }
  componentDidMount() {
    var signature = this.props.match.params;
    var _this = this;
    var cbname = `fn${Date.now()}`;
    var script = document.createElement("script");
    script.src = `http://reddit.com/r/${signature.subId}/comments/${signature.threadId}/${signature.shortTitle}.json?sort=top&t=month&jsonp=${cbname}`;
    console.log(script.src);
    
    window[cbname] = function(jsonData) {
      _this.setState({
        comments: jsonData,
      });
      delete window[cbname];
      document.head.removeChild(script);
    };

    document.head.appendChild(script);
  }
  render() {
    return (
      <div>
        <Comment comments={this.state.comments} subId={this.props.match.params.subId}/>
      </div>
    )
  }
}

export default ViewPost;