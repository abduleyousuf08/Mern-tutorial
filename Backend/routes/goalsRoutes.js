
const express = require('express')

const router = express.Router()

const { getgoal, setgoal, updategoal, deletegoal } = require('../controllers/goalController')


router.route('/').get(getgoal).post(setgoal)
router.route('/:id').put(updategoal).delete(deletegoal)


module.exports = router