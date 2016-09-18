import React from 'react';
import UserRepos from './UserRepos.js';
import UserData from './UserData.js'

//destructuring
const UserInfo = ({user, repos}) => {
    const info = user
        ? (
            <div className="row">
                <div className="col-lg-4">
                    <UserData user={user} />
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
