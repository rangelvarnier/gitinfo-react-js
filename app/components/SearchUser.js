var React = require('react');
var GitHubUser = require('../services/GitHubUser.js');

var SearchUser = React.createClass({
    handleSubmit: function(event) {
        event.preventDefault();

        GitHubUser.getByUserName(this.refs.username.value).then(function(response) {
            this.props.updateUser(response.data);
        }.bind(this));

        GitHubUser.getRepoByUserName(this.refs.username.value).then(function(response) {
            this.props.updateRepos(response.data);
        }.bind(this));
    },
    render: function() {
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

module.exports = SearchUser;
