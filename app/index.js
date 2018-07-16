var React       = require('react');
var ReactDom    = require('react-dom');
var PropTypes   = require('prop-types');
require('./index.css');

//App: is whatever is exported from ./components/App.
var App         = require('./components/App');


//what component to render , where to render it
ReactDom.render(
    <App name="Sam Johnson" />,
    document.getElementById('app')
);