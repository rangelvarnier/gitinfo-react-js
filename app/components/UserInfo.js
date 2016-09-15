var React = require('react');

function UserInfo(props) {
    var info = props && props.user
        ? (
            <div className="row">
                <div className="col-lg-4">
                    <img className="img-circle" src={props.user.avatar_url} alt="avatar" width="140" height="140"/>
                    <h2>{props.user.login}</h2>
                    <h2>{props.user.name}</h2>
                    <p>
                        Followers: {props.user.followers}
                        / Following: {props.user.following}
                    </p>
                    <p>
                        <a className="btn btn-default" href={props.user.html_url} role="button">
                            View details</a>
                    </p>
                </div>
            </div>
        )
        : null;

    return info;
}

UserInfo.propTypes = {
    user : React.PropTypes.object,
    repos : React.PropTypes.array
}

module.exports = UserInfo;
