const { Schema, model } = require("mongoose");

const articleSchema = Schema({
  title: String,
  content: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  //Ajout de l'énumération
  status: {
    type: String,
    enum: ["draft", "published"],
  }
});


module.exports  = model("Article", articleSchema);

