const { render } = require('ejs');
const {Feed}= require('../Models/users');

const homePage = (req, res) => {
    if (req.method == "GET"){
        Feed.find()
            .then(result => {
                console.log(result)
                res.render('index', {result})
            })
            .catch(err => console.log(err))
    }

    if (req.method == "POST"){

        user = new Feed({
            name : req.body.name,
            message: req.body.message
        })
        user.save()
        res.redirect('/')
    }
}

const showOne = (req, res) => {
    Feed.findById({_id: req.params.id})
        .then(result => {
            // result.name = req.body.name
            // result.message = req.body.message
            // result.save()
            //     .then()
            res.render('view-one', {result})
        })
        .catch(err => console.log(err))
}

const deleteFeed = (req, res) => {
    Feed.findByIdAndDelete({_id: req.params.id})
    .then(result => res.redirect("/"))
    .catch( err => console.log(err))
}
// findByIdAndDelete


const newUser = (req, res) => {
    


    
}


module.exports = {
    homePage,
    newUser,
    showOne,
    deleteFeed
}