let api_client;

(function () {

    const axios = require('axios')
    //const cors = require('cors')
    const baseUrl = 'http://localhost:5000'

    api_client = {
        
        getList(){
            return axios.get(`${baseUrl}/api/users`).then(res => res.data.data)
        }

    }
})()

export default api_client