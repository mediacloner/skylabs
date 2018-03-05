require ('dotenv').config()
const express = require ('express')
const bodyParser = require('body-parser')
const axios = require ('axios')
const app = express()

const router = express.Router()

const formBodyParser = bodyParser.urlencoded({extended:false})

let _id = ""

app.set ('view engine', 'pug')

app.use ('/api', router)

router.get('/list', (req, res)=>{
    
    axios.get('http://localhost:5000/api/list')
        .then(obj => res.render('form', {users:obj.data.item, _id} ))
    })


router.post('/create',formBodyParser, (req, res)=>{
    const {name, password} = req.body
    axios.post('http://localhost:5000/api/create', {name:name, password:password})
    .then(res.redirect('/api/list'))

})

router.post('/update/:id', formBodyParser,(req, res) =>{
    const{id}=req.params
    const {name, password, newPassword} = req.body

    axios.put (`http://localhost:5000/api/update/${id}`, {name:name, password:password, newPassword:newPassword})
    .then(res.redirect('/api/list'))

})

router.post('/delete/:id', formBodyParser, (req,res) => {

    const{id}=req.params
    const {name, password} = req.body

    axios.delete(`http://localhost:5000/api/delete/${id}`, {data:{name:name,password:password}})
    .then(res.redirect('/api/list'))

    
})

router.get('/show/:id',(req, res) => {
    const { id } = req.params

    if(_id == id)
        _id = ""
    else
        _id = id

    res.redirect('/api/list')

})




const port = process.env.PORT

app.listen(port, () => console.log (`listen to port ${port}`))