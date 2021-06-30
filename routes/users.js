const router = require('express').Router(),
      User   = require('../models/user.model');

//INDEX ROUTE
router.route('/').get((req,res) => {
    User.find().then(users => res.json(users))
        .catch(err => res.status(400).json('Error : ' + err))
})

//ADD Route
router.route('/add').post((req,res) => {
    const username = req.body.username;
    const newUser = new User({username});

    newUser.save()
        .then(() => res.json('New user added'))
        .catch(err => res.status(400).json('Error : ' + err))
})

module.exports = router;