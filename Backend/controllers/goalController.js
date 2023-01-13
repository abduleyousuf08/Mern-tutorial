const asyncHandler = require('express-async-handler')



const getgoal = asyncHandler(async(req, res) => {
    res.status(200).json({ message: "get goal" })
})

const setgoal = asyncHandler(async(req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error("please Enter something the text field")
    }
    res.status(200).json({ message: "setted goal" })
})


const updategoal = asyncHandler(async(req, res) => {
    res.status(200).json({ message: `update goal ${req.params.id}` })
})

const deletegoal = asyncHandler(async(req, res) => {
    res.status(200).json({ message: `delete goal ${req.params.id}` })
})


module.exports = { getgoal, setgoal, updategoal, deletegoal }