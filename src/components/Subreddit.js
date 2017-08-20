import React from 'react';

class Subreddit extends React.Component {
  onClick = () => {
    this.props.subSelected(this.props.sub);
  };

  render() {
    return (
      <li onClick={this.onClick} className={this.props.selected ? "selected" : ""}>
        {this.props.sub.data.display_name}
      </li>
    );
  }
}

export default Subreddit;