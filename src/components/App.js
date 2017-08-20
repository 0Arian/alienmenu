import React from 'react';
import Navigation from './Navigation';
import StoryList from './StoryList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeNavigationUrl: '',
      navigationSubs: [],
      storySubs: [],
    };
  }

  componentDidMount() {
    var _this = this;
    var cbname = `fn${Date.now()}`;
    console.log(cbname);
    var script = document.createElement("script");
    script.src = `https://www.reddit.com/reddits.json?jsonp=${cbname}`;
    console.log(script.src);

    window[cbname] = function(jsonData) {
      _this.setState({
        navigationSubs: jsonData.data.children
      });
      delete window[cbname];
      document.head.removeChild(script);
    };

    document.head.appendChild(script);
  }

  setSelectedSub = (sub) => {
    var _this = this;
    var cbname = `fn${Date.now()}`;
    var script = document.createElement("script");
    script.src = `https://www.reddit.com${sub.data.url}.json?sort=top&t=month&jsonp=${cbname}`;

    window[cbname] = function(jsonData) {
      _this.setState({
        storySubs: jsonData.data.children
      });
      delete window[cbname];
      document.head.removeChild(script);
    };

    document.head.appendChild(script);

    this.setState({
      activeNavigationUrl: sub.data.url,
      storySubs: [],
    });
  }

  render() {
    return (
      <div className="container">
        <Navigation 
          activeUrl={this.state.activeNavigationUrl}
          subs={this.state.navigationSubs}
          subSelected={this.setSelectedSub}
        />
        <StoryList subs={this.state.storySubs} />
      </div>
    );
  }
}

export default App;