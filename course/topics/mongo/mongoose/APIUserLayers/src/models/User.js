const User = mongoose.model(collection, 
    {id: String, name: String, surname: String, email: String, username: String, password: String })

module.exports = User