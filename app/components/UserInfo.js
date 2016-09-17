import React from 'react';
import UserRepos from './UserRepos.js';

//destructuring
const UserInfo = ({user, repos}) => {
    const info = user
        ? (
            <div className="row">
                <div className="col-lg-4">
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
                <div className="col-lg-8">
                    <UserRepos repos={repos}/>
                </div>
            </div>
        )
        : null;

    return info;
}

UserInfo.propTypes = {
    user: React.PropTypes.object,
    repos: React.PropTypes.array
}

export default UserInfo;
