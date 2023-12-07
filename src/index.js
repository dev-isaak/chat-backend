const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const chatRoutes = require('./routes/chat');
const roomRoutes = require('./routes/room');

const app = express();
const port = process.env.PORT;

// middlewares
app.use(express.json()); //se usa para transformar las req a json
app.use('/api', chatRoutes);
app.use('/api', roomRoutes);

// routes
app.get('/', (req, res) => {
	res.send('Welcome to home');
});

app.get('/chat', (req, res) => {
	res.send('Welcome to chat');
});

// mongodb connection
mongoose
	.connect(process.env.URI_MONGO)
	.then(() => console.log('contected to db'))
	.catch((e) => console.log('error: ', e));

app.listen(port, () => console.log('server listening on port ', port));
