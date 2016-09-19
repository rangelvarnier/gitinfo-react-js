import React, {Component} from'react';

class UserRepos extends Component{
    constructor(props) {
        super(props);
        this.state = {
            reposCount: 0
        };
    }

    componentWillReceiveProps(props) {
        this.setState({reposCount: props.repos.length});
    }

    render() {
        const {repos} = this.props;
        const repositoryStyle = {'margin-right': '5px'};
        const reposList = repos.map(function(repo, key) {
            return (
                <div key={key} className="thumbnail">
                    <div className="caption">
                        <h3>{repo.name} <span className="badge">{repo.stargazers_count} Stars</span></h3>
                        <p>{repo.description}</p>
                        <p>
                            <a href={repo.html_url} className="btn btn-primary" style={repositoryStyle}
                                role="button">Repository</a>
                            <a href={repo.html_url + '/issues'} className="btn btn-default" role="button">Issues</a>
                        </p>
                    </div>
                </div>
            );
        });

        return (
            <div>
                <h2>{this.state.reposCount} repositories</h2>
                {reposList}
            </div>
        );
    }
}

export default UserRepos;
