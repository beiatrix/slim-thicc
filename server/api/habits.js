const router = require('express').Router()
const {Habit} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const habits = await Habit.findAll({
      order: [['createdAt', 'ASC']] // sorts in chronological order :)
    })
    res.json(habits)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const habitData = req.body.habit
    console.log('REQ', req.body.habit)
    const habits = await Habit.create(habitData)
    console.log('RES?', habits)
    res.json(habits)
  } catch (err) {
    next(err)
  }
})
