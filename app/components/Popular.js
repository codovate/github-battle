var React = require('react');
var PropTypes = require('prop-types');
var api = require('../utils/api');

function SelectLanguage(props) {

    var languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];

    return (
        <ul className='languages' >

            {/* //.map second parameter allow us to pass a context were we can run it in . in this case we run it in current this. */}
            { languages.map(function (lang) {
                return (
                    // this.updateLanguage.bind(null, lang) --> the null is not needed because is already bind at the top to the Component.
                    <li
                        style={lang === props.selectedLanguage ? { color: '#d0021b' } : null}
                        key={lang}
                        onClick={props.onSelect.bind(null, lang)}  > {lang}
                    </li>
                )
            }) }

        </ul>
    )
}


SelectLanguage.propTypes = {
    selectedLanguage: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
}

function RepoGrid(props) {
    return (
        <ul className="popular-list" >
            {   props.repos.map(function(repo, index) {
                    return (
                        <li key="{repo.name}" className="popular-item" >
                            <div className='popular-rank' >#{index + 1}</div>
                            <ul classname='space-list-item'>
                                <li>
                                    <img className='avatar'
                                        src={ repo.owner.avatar_url }
                                        alt={'Avatar for ' +  repo.owner.login}
                                    />
                                </li>
                                <li><a href={ repo.html_url} > { repo.name }</a></li>
                                <li>@{ repo.owner.login }</li>
                                <li> {repo.stargazers_count } stars</li>
                            </ul>
                        </li>
                    )
                })
            }
        </ul>
    )
}

RepoGrid.propTypes = {
    repos: PropTypes.array.isRequired,
}

class Popular extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            selectedLanguage: 'All',
            repos: null
        };
        //this.updateLanguage  function's this keyword is bind to the this keyword in bind(this) ;
        //this KEYWORD is the Component it self which has a state property with setState function.
        this.updateLanguage = this.updateLanguage.bind(this);
    }

    componentDidMount() {
        //Ajax request to get repo
        this.updateLanguage(this.state.selectedLanguage);
    }


    updateLanguage(lang) {
        this.setState(function(){
            return {
                selectedLanguage: lang,
                repos: null
            }
        });

        api.fetchPopularRepos(lang)
            .then(function (repos) {
                this.setState(function(){
                    return {
                        repos: repos
                    }
                })
            }.bind(this));
    }

    render(){
        return (
            <div>
                <SelectLanguage
                    selectedLanguage={ this.state.selectedLanguage}
                    onSelect={ this.updateLanguage }
                />

                { !this.state.repos
                    ? <p>LOADING</p>
                    : <RepoGrid repos={this.state.repos} />
                }

            </div>
        )
    }

}

//so we can use Popular in App.js
module.exports = Popular;
