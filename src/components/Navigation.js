import '../css/Navigation.css';
import React from 'react';
import Subreddit from './Subreddit';

class Navigation extends React.Component {
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
                    {subreddits}
                </ul>
            </div>
        );
    }
}

export default Navigation;