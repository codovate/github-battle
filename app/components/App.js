var React = require('react');
var Popular = require('./Popular');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Nav = require('./Nav');
var Home = require('./Home');
var Battle = require('./Battle');

//var Link = ReactRouter.Link;

//state --
//lifecycle event -- hooks you can tire in to so you know were your component is
// UI of the component
class App extends React.Component {
    render() {
        return (
            <Router>
                <div className='container' >
                    <Nav />
                    {/* Switch will only render the specific route it matches first */}
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/battle" component={Battle} />
                        <Route path="/popular" component={Popular} />
                        <Route render={function () {
                            return <p> Not Found </p>
                        }} />
                    </Switch>
                </div>
            </Router >
        )
    }
}

//called common js to export the App component so that way we can use it in index.js as required in there.
module.exports = App;

