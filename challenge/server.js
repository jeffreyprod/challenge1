const { urlencoded } = require('express');
const express = require('express')
const mongoose = require('mongoose')
const userController = require('./Controller/user');

const app = express();
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))

mongoose.connect('mongodb+srv://jeffo:12345@cluster0.juqtkp0.mongodb.net/?retryWrites=true&w=majority')
    .then( () => {
        console.log('DB connected')
    })
    . catch( err => {
        console.log(err)
    })

app.all('/', userController.homePage)
app.get('/feed/:id', userController.showOne)
app.post('/delete/:id', userController.deleteFeed)

app.listen(4000, () => console.log('Running on 4000'))