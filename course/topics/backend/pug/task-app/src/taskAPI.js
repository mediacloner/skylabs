const axios = require ('axios')


const taskAPI = {
    listTodo(){
        return axios.get('http://localhost:8000/api/tasks/todo')
            .then(obj => obj.data.data)
            
    },


    listDone(){
        return axios.get('http://localhost:8000/api/tasks/done')
            .then(obj => obj.data.data)
            
    },

    create(text){

        return axios.post('http://localhost:8000/api/tasks', {
            "username":"username",
            text
            })
  
    },
    markDone(id){

        return axios.put('http://localhost:8000/api/tasks/'+id)

    },

    removeDone(id){

        return axios.delete('http://localhost:8000/api/tasks/'+id)

    }    
}


module.exports = taskAPI