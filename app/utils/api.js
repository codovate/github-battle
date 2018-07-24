var axios = require('axios');

//exports an external object so it can be use in parts of our project by requiring this file
module.exports = {

    fetchPopularRepos: function (language) {
        var encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'
        + language + '&sort=stars&order=desc&type=Repositories');

        //.then is called when our request to the api is done
        return axios.get(encodedURI)
            .then(function(response){
                return response.data.items
            })
    }

}
