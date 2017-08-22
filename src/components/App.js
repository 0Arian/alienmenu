import '../css/App.css';
import React from 'react';
import Navigation from './Navigation';

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
    var script = document.createElement("script");
    script.src = `https://www.reddit.com/reddits.json?jsonp=${cbname}`;

    window[cbname] = function(jsonData) {
      _this.setState({
        navigationSubs: jsonData.data.children
      });
      delete window[cbname];
      document.head.removeChild(script);
    };

    document.head.appendChild(script);
  }

  render() {
    return (
      <div className="container">
        <Navigation 
          activeUrl={this.state.activeNavigationUrl}
          subs={this.state.navigationSubs}
        />
      </div>
    );
  }
}

export default App;