const express = require('express');
const chatSchema = require('../models/chat');

const router = express.Router();

// get chats
router.get('/chats', (req, res) => {
	chatSchema
		.find()
		.then((data) => res.json(data))
		.catch((e) => res.status(500).json({ message: e }));
});

//get chats from one room
router.get('/chats/:id', (req, res) => {
	chatSchema
		.find({ room: req.params.id })
		.then((data) => res.json(data))
		.catch((e) => res.status(500).json({ message: e }));
});

// create chat
router.post('/chats', (req, res) => {
	const chat = chatSchema(req.body);
	chat
		.save()
		.then((data) => res.json(data))
		.catch((e) => res.status(500).json({ message: e }));
});

module.exports = router;
