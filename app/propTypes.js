var React       = require('react');
var ReactDom    = require('react-dom');
var PropTypes   = require('prop-types');

require('./index.css');


//state --
//lifecycle event -- hooks you can tire in to so you know were your component is
// UI of the component
class App extends React.Component {
    render () {
        return (
            <div>
                Hello React Training , My Name is {this.props.name} !
            </div>
        )
    }
}

//what component to render , where to render it
ReactDom.render(
    <App name="Sam Johnson" />,
    document.getElementById('app')
);


class Badge extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.img} />
                <h1>Name: {this.props.name} </h1>
                <h3>username: {this.props.username} </h3>
            </div>
        )
    }
}

Badge.propTypes = {
    img: PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
}

ReactDom.render(
    <Badge
        name='Tyler McGinnis'
        username='tylermcginnis'
        img={ 'https://avatars0.githubusercontent.com/u/2933430?v=3&s=460' } />,
    document.getElementById('app2')
);


class Users extends React.Component {
    render() {
        var friends = this.props.list.filter(function (item) {
            return item.friend === true
        });
        var nonfriends = this.props.list.filter(function (item) {
            return item.friend === false
        })

        return (
            <div>
                <h1>Friends</h1>
                <ul>
                    {
                        /*Create an <> for every name in the list array who is also your friend*/
                        friends.map(function (user) {
                            return <li key={user.name} > {user.name}</li>
                        })
                    }
                </ul>

                <hr />

                <h1> Non Friends  </h1>
                <ul>
                    {/*Create an <li> for every name in the list array who is NOT your friend*/
                        nonfriends.map(function (user) {
                            return <li key={user.name} >{user.name}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

Users.propTypes = {
    //list: PropTypes.array.isRequired,
    //list: PropTypes.arrayOf(PropTypes.object).isRequired, //--> specific
    list: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        friend: PropTypes.bool.isRequired,
    })).isRequired, //--> more specific
}

ReactDom.render(
    <Users list={[
        { name: 'Tyler', friend: true },
        { name: 'Ryan', friend: true },
        { name: 'Michael', friend: false },
        { name: 'Mikenzi', friend: false },
        { name: 'Jessica', friend: true },
        { name: 'Dan', friend: false }]}
    />,
    document.getElementById('app3')
);