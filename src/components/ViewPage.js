import React from 'react';
import Iframe from 'react-iframe';

class ViewPage extends React.Component {
  constructor(props){
    super(props);
    this.goBack = this.goBack.bind(this);
  }
  goBack(){
    this.props.history.goBack();
  }
  render() {
    var _this = this;
    return(
      <div>
        <table className="container">
          <tbody className="container">
            <tr>
              <td>
              <button className="backLink" onClick={() => _this.goBack()}>
                <h1>
                  ←
                </h1>
                </button>
              </td>
              <td>
                <h2>
                </h2>
              </td>
            </tr>
          </tbody>
        </table>
        <Iframe url={this.props.match.params.link}/>
      </div>
    )
  }
}

export default ViewPage;