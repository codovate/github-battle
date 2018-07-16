var React   =   require('react');
var Popular =   require('./Popular');


//state --
//lifecycle event -- hooks you can tire in to so you know were your component is
// UI of the component
class App extends React.Component {
    render() {
        return (
            <div className='container' >
                <Popular />
            </div>
        )
    }
}

//called common js to export the App component so that way we can use it in index.js as required in there.
module.exports = App;