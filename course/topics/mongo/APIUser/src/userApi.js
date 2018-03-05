require ('dotenv').config()

const express = require ('express')
const router = express.Router()
const bodyParser = require ('body-parser')

const app = express()

const users = []

const jsonBodyParser = bodyParser()

app.use('/api', router)

router.get('/list', (req,res)=>{

    res.json(ok ('todo bien', users.map(({id,name})=> ({id,name})))) 
})

router.post('/create', jsonBodyParser,(req,res)=>{
    const {name,password} = req.body
    const id = new Date().getTime().toString()
    if (!name || !password){
        res.json(ko('Faltan datos'))
    } else{
        users.push ({id:id , name, password})
        res.json(ok ('todo bien', 'el usuario ha sido añadido'))

    }

    
})

router.put('/update/:id', jsonBodyParser,(req,res) => {
    const {id} =req.params
    const {name, password, newPassword} = req.body
    const user = users.find(user => user.id == id)

    if (!user) 
        return res.json (ko('Error al actualizar', 'El usuario no existe'))

    if (user.password != password)
        return res.json (ko('Error al actualizar', 'El usuario o password no coinciden'))

    user.name = name
    user.password = newPassword

    res.json(ok ('todo bien'))
})

router.delete ('/delete/:id',jsonBodyParser, (req,res)=>{
    const {id} = req.params
    const {name, password}= req.body
    const index = users.findIndex(user => user.id == id)

    if (index < 0)
        return res.json (ko('Error al eliminar el usuario', 'El usario no existe'))

    if (users[index].password != password|| users[index].name !=name)
         return res.json (ko('Error al eliminar el usuario', 'El usuario no existe'))

    users.splice (index,1)

    res.json(ok ('El usuario a sido eliminado'))
})

const port = process.env.PORT;


app.listen( port, () => console.log(`listen on port ${port}`))

function ok(message, item){
    const res = {status:'ok', message}

    if (item) res.item =item
    return res
}

function ko(message, err){
    const res = {status:'ko', message}

    if (err) res.err =err

    return res
}

