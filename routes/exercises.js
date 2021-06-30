const router = require('express').Router(),
    Exercise = require('../models/exercise.model');

//index route
router.route('/').get((req, res) => {
    Exercise.find().then(ex => res.json(ex))
        .catch(err => res.status(400).json('Error : ' + err))
})

//ADD Route
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({
        username,
        description,
        duration,
        date
    });

    newExercise.save()
        .then(() => res.json('New Exercise added'))
        .catch(err => res.status(400).json('Error : ' + err))
})

//Find by id
router.route('/:id').get((req, res) => {
    Exercise.findById(req.params.id)
        .then(ex => res.json(ex))
        .catch(err => res.status(400).json('Error : ' + err))
})

//Delete a exercise
router.route('/:id').delete((req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
        .then(() => res.json('Exercise Deleted'))
        .catch(err => res.status(400).json('Error : ' + err))
})

//Update exercise
router.route('/update/:id').post((req, res) => {
    Exercise.findByIdAndUpdate(req.params.id)
        .then(ex => {

            ex.username = req.body.username;
            ex.description = req.body.description;
            ex.duration = Number(req.body.duration);
            ex.date = Date.parse(req.body.date);

            ex.save()
                .then(() => res.json('Exercise Updated'))
                .catch(err => res.status(400).json('Error : ' + err))
        })
})

module.exports = router