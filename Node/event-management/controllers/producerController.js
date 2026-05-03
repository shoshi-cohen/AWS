const express = require('express');
const Producer = require('../models/producer');
const router = express.Router();

router.get('/:email', async (req, res) => {
    const producer = await Producer.findOne({ email: req.params.email });
    if (!producer)
        return res.status(404).send('Producer not found');
    res.json(producer);
});


router.post('/', async (req, res) => {
    const producer = new Producer(req.body);
    await producer.save();
    res.status(201).json(producer);
});


router.put('/:email', async (req, res) => {
    const producer = await Producer.findOneAndUpdate({ email: req.params.email }, req.body, { new: true });
    if (!producer) 
        return res.status(404).send('Producer not found');
    res.json(producer);
});

module.exports = router;
