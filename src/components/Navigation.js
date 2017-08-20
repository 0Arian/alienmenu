import React from 'react';
import Subreddit from './Subreddit';

class Navigation extends React.Component {
    setSelectedSub = (sub) => {
        this.props.subSelected(sub);
    }

    render() {
        var subreddits = this.props.subs
            .sort((a, b) => 
                b.data.subscribers - a.data.subscribers
            )
            .map(sub => 
                <Subreddit
                    sub={sub}
                    subSelected={this.setSelectedSub}
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