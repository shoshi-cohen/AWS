const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Producer = require('./models/producer');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/eventManagement')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => {
    res.json({ message: 'Event Management API is running' });
});

app.post('/api/producers', async (req, res) => {
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

app.use('/api/producers', producerController);
app.use('/api/events', eventController);

const port = Number(process.env.PORT) || 4000;

const startServer = (currentPort) => {
    const server = app.listen(currentPort, '0.0.0.0', () => {
        console.log(`Server listening on port http://localhost:${currentPort}`);
    });

    server.on('error', (error) => {
        if (error.code === 'EADDRINUSE') {
            const nextPort = currentPort + 1;
            console.warn(`Port ${currentPort} is busy. Trying ${nextPort}...`);
            if (server.listening) {
                server.close();
            }
            startServer(nextPort);
        } else {
            console.error('Server error:', error);
            process.exit(1);
        }
    });
};

startServer(port);
