const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Producer = require('./models/Producer'); 

const app = express();
app.use(cors()); 
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/eventManagement')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

    app.post('/producers', async (req, res) => {
        const { name, email, phone } = req.body;
    
        if (!name || !email || !phone) {
            return res.status(400).json({ message: 'All fields are required' });
        }
    
        const newProducer = new Producer({ name, email, phone });
        try {
            const savedProducer = await newProducer.save();
            res.status(201).json(savedProducer);
        } catch (error) {
            console.error('Error saving producer:', error);
            res.status(500).json({ message: 'Error saving producer', error });
        }
    });
    

const producerController = require('./controllers/producerController');
const eventController = require('./controllers/eventController');

app.use('/producers', producerController);
app.use('/events', eventController);

const port = 5000;
app.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`);
});
