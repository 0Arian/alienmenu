import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import App from './components/App';
import SubThreads from './components/SubThreads';
import ViewPost from './components/ViewPost';
import ViewPage from './components/ViewPage';
import registerServiceWorker from './registerServiceWorker';

const Root = () => {
  return(
    <Router>
      <div>
        <Route exact={true} path="/" component={App}/>
        <Route exact={true} path="/r/:subId" component={SubThreads}/>
        <Route path="/r/:subId/comments/:threadId/:shortTitle" 
          component={ViewPost}/>
        <Route path="/frame/:link(.*)" component={ViewPage}/>
      </div>
    </Router>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
