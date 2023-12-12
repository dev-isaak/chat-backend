const mongoose = require("mongoose");

const chatSchema = mongoose.Schema({
	message: {
		type: String,
		required: true,
	},
	author_name: {
		type: String,
		required: true,
	},
	author_nickName: {
		type: String,
		required: false,
	},
	author_avatar: {
		type: String,
		required: false,
	},
	timeStamp: {
		type: Date,
		default: Date.now,
	},
	room: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Room", // Nombre del modelo de Chat en mongoose.model()
		required: true,
	},
});

module.exports = mongoose.model("Chat", chatSchema);
