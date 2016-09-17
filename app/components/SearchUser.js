import React from 'react';
import GitHubUser from'../services/GitHubUser.js';

let SearchUser = React.createClass({
    handleSubmit(event) {
        event.preventDefault();

        GitHubUser.getByUserName(this.refs.username.value).then((response) => {
            this.props.updateUser(response.data);
        });

        GitHubUser.getRepoByUserName(this.refs.username.value).then((response) => {
            this.props.updateRepos(response.data);
        });
    },
    render() {
        return (
            <div className="jumbotron">
                <h1>GitHub Info</h1>
                <div className="row">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Username</label>
                            <input ref="username" type="text" className="form-control" placeholder="Ex: rangelvarnier"/>
                        </div>
                        <button type="submit" className="btn btn-primary">Buscar</button>
                    </form>
                </div>
            </div>
        );
    }
});

SearchUser.propTypes = {
    updateUser: React.PropTypes.func.isRequired,
    updateRepos: React.PropTypes.func.isRequired
}

export default SearchUser;
