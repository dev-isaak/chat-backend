const mongoose = require("mongoose");

const roomSchema = mongoose.Schema({
	room_name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
	},
	author_name: {
		type: String,
		required: true,
	},
	author_nickname: {
		type: String,
		required: false,
	},
	author_avatar: {
		type: String,
		required: false,
	},
});

module.exports = mongoose.model("Room", roomSchema);
