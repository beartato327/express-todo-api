const express = require('express');

const router = express.Router()
const Model = require('../models/model.ts');


//Post Method
router.post('/post', async (req: { body: { name: string; email: string; }; }, res: any) => {
    const data = new Model({
        name: req.body.name,
        email: req.body.email
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error: any) {
        res.status(400).json({message: error.message})
    }
})

module.exports = router;