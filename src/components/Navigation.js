import '../css/Navigation.css';
import React from 'react';
import Subreddit from './Subreddit';
import {withRouter} from 'react-router-dom';

class Navigation extends React.Component {
    goToSub(event){
        const subName = this.subInput.value;
        this.props.history.push(`/r/${subName}`);
    }
    render() {
        var subreddits = this.props.subs
            .sort((a, b) => 
                b.data.subscribers - a.data.subscribers
            )
            .map(sub => 
                <Subreddit
                    sub={sub}
                    key={sub.data.id}
                    selected={sub.data.url === this.props.activeUrl}
                />
            );

        return (
            <div className="navigation">
                <ul>
                    <li>
                        <form className="sub-selector" onSubmit={(event) => this.goToSub(event)}>
                            <input type="text" name="subSelection" placeholder="Enter Custom SubReddit Name"
                                ref={(input) => {this.subInput = input}}>
                            </input>
                        </form>
                    </li>
                    {subreddits}
                </ul>
            </div>
        );
    }
}

export default withRouter(Navigation);