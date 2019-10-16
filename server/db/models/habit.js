const Sequelize = require('sequelize')
const db = require('../db')

const Habit = db.define('habit', {
  protein: {
    type: Sequelize.BOOLEAN
  },
  oats: {
    type: Sequelize.BOOLEAN
  },
  kale: {
    type: Sequelize.BOOLEAN
  },
  run: {
    type: Sequelize.BOOLEAN
  },
  yoga: {
    type: Sequelize.BOOLEAN
  },
  meditate: {
    type: Sequelize.BOOLEAN
  }
})

module.exports = Habit
