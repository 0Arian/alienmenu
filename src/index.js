import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import App from './components/App';
import StoryList from './components/StoryList';
import registerServiceWorker from './registerServiceWorker';

const Root = () => {
  return(
    <Router>
      <div>
        <Route exact={true} path="/" component={App}/>
        <Route path="/r/:subId" component={StoryList}/>
      </div>
    </Router>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
