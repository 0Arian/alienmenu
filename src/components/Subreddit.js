import React from 'react';
import { Link } from 'react-router-dom';

class Subreddit extends React.Component {
  render() {
    return (
      <li>
        <Link to={`/r/${this.props.sub.data.display_name}`} style={{ color: 'white', textDecoration: 'none'}}>
          {this.props.sub.data.display_name}
        </Link>
      </li>
    );
  }
}

export default Subreddit;