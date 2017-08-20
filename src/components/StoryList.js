import React from 'react';

class StoryList extends React.Component {
  render() {
    return (
      <table>
        <tbody>
          {this.props.subs.map(sub => 
            <tr key={sub.data.id}>
              <td>
                <p className="score">{sub.data.score}</p>
              </td>
              <td>
                <p className="title">
                  <a href="{sub.data.url}">
                    {sub.data.title}
                  </a>
                </p>
                <p className="author">
                  Posted by <span>{sub.data.author}</span>
                </p>
              </td>
            </tr>
          
          )}
        </tbody>
      </table>
    );
  }
}

export default StoryList;