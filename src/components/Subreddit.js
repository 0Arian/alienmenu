import React from 'react';
import { Link } from 'react-router-dom';

class Subreddit extends React.Component {
  render() {
    return (
      <li>
        <Link to={`/r/${this.props.sub.data.display_name}`}>
          {this.props.sub.data.display_name}
        </Link>
      </li>
    );
  }
}

export default Subreddit;