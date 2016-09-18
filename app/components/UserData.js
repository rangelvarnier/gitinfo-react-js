import React, {Component} from 'react';

class UserData extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const {user} = this.props;
        return (
            <div className="userData">
                <img className="img-circle" src={user.avatar_url} alt="avatar" width="140" height="140"/>
                <h2>{user.login}</h2>
                <h2>{user.name}</h2>
                <p>
                    Followers: {user.followers}
                    / Following: {user.following}
                </p>
                <p>
                    <a className="btn btn-default" href={user.html_url} role="button">
                        View details</a>
                </p>
            </div>
        );
    }
}

export default UserData;
