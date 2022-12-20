const mongoose = require("mongoose");

/**
 * This is "Sauce" Class Object build with the mongoose.Shema method.
 * To know more about how to set a shema please read : https://mongoosejs.com/docs/guide.html#definition
 * To set a default value to the "likes" please read :https://mongoosejs.com/docs/api/schematype.html#schematype_SchemaType-default
 * 
 */
const sauceSchema = mongoose.Schema({
  name: { type: String, required: true },
  manufacturer: { type: String, required: true },
  description: { type: String, required: true },
  mainPepper: { type: String, required: true },
  imageUrl: { type: String, required: true },
  heat: { type: Number, required: true },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  usersLiked: { type: [String] },
  usersDisliked: { type: [String] },
});

module.exports = mongoose.model("Sauce", sauceSchema);
