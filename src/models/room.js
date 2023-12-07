const mongoose = require('mongoose');

const roomSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
	},
	author: {
		type: String,
		required: true,
	},
	chats: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Chat', // Nombre del modelo de Chat en mongoose.model()
		},
	],
});

module.exports = mongoose.model('Room', roomSchema);
