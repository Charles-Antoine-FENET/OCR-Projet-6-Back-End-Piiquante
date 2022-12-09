const mongoose = require('mongoose');

const thingSchema = mongoose.Schema({
  name: { type: String, required: true },
  manufacturer: { type: String, required: true },
  description: { type: String, required: true },
  mainPepper: { type: String, required: true },
  imageUrl: { type: String, required: true },
//   heat entre 1 et 10
  heat: { type: Number, required: true }, 
  likes: { type: String, required: true },
  dislikes: {  },
  usersLiked: { },
  usersDisliked: {  },

});

module.exports = mongoose.model('Thing', thingSchema);