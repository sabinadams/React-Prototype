import axios from 'axios'

class HttpClient {
    constructor() {
        let baseURL = 'http://ct.wwsires.com/api'
        if( window.location.hostname && ( window.location.hostname === 'localhost' || window.location.hostname === 'wws.test' ) ) {
            baseURL = 'http://wws.test/api'
        } else if( window.location.hostname && ( window.location.hostname === 'ctdev.wwsires.com' ) ) {
            baseURL = 'http://ctdev.wwsires.com/api'
        } else if( window.location.hostname && ( window.location.hostname === 'ct.wwsires.intranet' ) ) {
            baseURL = 'http://ct.wwsires.intranet/api'
        }
        
        this.axios = axios.create({ baseURL }) // Not setting headers here because they need to be checked per-request  
    }

    getHeaders() {
        return {
            Authorization: `Bearer ${localStorage.getItem('token') || ''}`,
            appVersion: `${localStorage.getItem('appVersion') || [[1,0,'00108']]}`
        }
    }

    post(url, data) {
        let config = { data, headers: this.getHeaders() }
        return this.axios.post(url, config).then( res => {
            // this.handleResponse()
            return res.data
        })
    }

    get(url, data = {}) {
        let config = { data, headers: this.getHeaders() }
        return this.axios.get(url, config).then( res => {
            // this.handleResponse()
            return res.data
        })
    }

    /* A function for this model would be nice to replace $q.all()
        function getUserAccount() {
            return axios.get('/user/12345')
        }

        function getUserPermissions() {
            return axios.get('/user/12345/permissions')
        }

        axios.all([getUserAccount(), getUserPermissions()])
        .then(axios.spread(function (acct, perms) {
            // Both requests are now complete
        }))
    */
}

export default new HttpClient()
