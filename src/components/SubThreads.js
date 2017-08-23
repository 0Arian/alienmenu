import '../css/SubThreads.css';
import React from 'react';
import Thread from './Thread';

class SubThreads extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      threads: [],
    }
  }

  componentWillMount() {
    var subName = this.props.match.params.subId;
    var _this = this;
    var cbname = `fn${Date.now()}`;
    var script = document.createElement("script");
    script.src = `https://www.reddit.com/r/${subName}.json?sort=top&t=month&jsonp=${cbname}`;
    console.log(script.src);

    window[cbname] = function(jsonData) {
      _this.setState({
        threads: jsonData.data.children
      });
      delete window[cbname];
      document.head.removeChild(script);
    };

    document.head.appendChild(script);

    this.setState({
      threads: []
    });

  }

  render() {
    return (
      <div>
        <Thread threads={this.state.threads} id={this.props.match.params.subId} />
      </div>

    )
  }
}

export default SubThreads;