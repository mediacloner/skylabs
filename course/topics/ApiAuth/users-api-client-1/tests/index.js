require('dotenv').config()

const api = require('../src')
const assert = require('assert')

const { API_PROTOCOL, API_HOST, API_PORT } = process.env

api.protocol = API_PROTOCOL
api.host = API_HOST
api.port = API_PORT

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1lc2JlIiwiaWF0IjoxNTIwNTE1MzAxLCJleHAiOjE1MjA1MTg5MDF9.RzQNcC2oBEDL5g9OadlPtBYF9r56nfcmk1sh9P9oKl0'

describe('api', () => {
    !true && it('should register', done => {
        api.register('n', 's', 'e', 'u', 'p', token )
            .then(res => {
                assert.equal(res.status, 'OK', 'results should be OK')

                assert(res.data && res.data.id, 'should return data id')

                // TODO delete

                done()
            })
            .catch(done)
    })

    !true && it('should list', done => {
        api.register('n', 's', 'e', 'u', 'p', token)
            .then(() => api.register('n', 's', 'e', 'u1', 'p', token))
            .then(() => api.list(token))
            .then(res => {
                assert.equal(res.status, 'OK', 'results should be OK')

                assert(res.data && res.data.length > 0, 'should return data array')

                // TODO delete all

                done()
            })
            .catch(done)
    })

    !true && it('should delete', done => {
        api.register('n', 's', 'e', 'u', 'p',token)
            .then(res => api.remove(res.data.id, 'u', 'p',token))
            .then(res => {
                assert.equal(res.status, 'OK', `results should be OK, but got error ${res.error}`)

                done()
            })
            .catch(done)
    })

    !true && it('should retrieve', done => {
        api.register('n', 's', 'e', 'u', 'p',token)
            .then(res => api.retrieve(res.data.id))
            .then(res => {
                assert.equal(res.status, 'OK', `results should be OK, but got error ${res.error}`)

                const user = res.data
                
                assert(user, 'should return data user')

                assert.equal(user.name, 'n')
                assert.equal(user.surname, 's')
                assert.equal(user.email, 'e')
                assert.equal(user.username, 'u')

                done()
            })
            .catch(done)
    })

    !true && it('should update', done => {
        api.register('n', 's', 'e', 'u', 'p', token)
        api.register('n', 's', 'e', 'u', 'p', token)
        .then(res => api.update(res.data.id, 'n', 's', 'e', 'u2', 'p', 'u', 'p',token))
            .then(res => {
                assert.equal(res.status, 'OK', `results should be OK, but got error ${res.error}`)

                done()
            })
            .catch(done)
    })
})