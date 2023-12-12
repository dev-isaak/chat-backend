const express = require("express");
const roomSchema = require("../models/room");

const router = express.Router();

// get rooms
router.get("/rooms", (req, res) => {
	roomSchema
		.find()
		.then((data) => res.json(data))
		.catch((e) => res.status(500).json({ message: e }));
});

// create room
router.post("/rooms", (req, res) => {
	const chat = roomSchema(req.body);
	chat
		.save()
		.then((data) => res.json(data))
		.catch((e) => res.status(500).json({ message: e }));
});

module.exports = router;
