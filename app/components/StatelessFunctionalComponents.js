var React = require('react');
var PropTypes = require('prop-types');

function SelectLanguage(props) {
    var languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];

    return (
        <ul className='languages' >
            {/* //.map second parameter allow us to pass a context were we can run it in . in this case we run it in current this. */}
            {languages.map(function (lang) {
                return (
                    // this.updateLanguage.bind(null, lang) --> the null is not needed because is already bind at the top to the Component.
                    <li
                        style={lang === props.selectedLanguage ? { color: '#d0021b' } : null}
                        key={lang}
                        onClick={props.onSelect.bind(null, lang)}  > {lang}

                    </li>
                )
            })}
        </ul>
    )

}

SelectLanguage.propTypes = {
    selectedLanguage: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
}

class Popular extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: 'All'
        };
        //this.updateLanguage  function's this keyword is bind to the this keyword in bind(this) ;
        //this KEYWORD is the Component it self which has a state property with setState function.
        this.updateLanguage = this.updateLanguage.bind(this);
    }

    updateLanguage(lang) {
        this.setState(function () {
            return {
                selectedLanguage: lang
            }
        });
    }

    render() {

        return (
            <div>
                <SelectLanguage
                    selectedLanguage={this.state.selectedLanguage}
                    onSelect={this.updateLanguage}
                />
            </div>
        )
    }

}

//so we can use Popular in App.js
module.exports = Popular;