const router = require('express').Router()
const {Habit} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const habits = await Habit.findAll()
    res.json(habits)
  } catch (err) {
    next(err)
  }
})
