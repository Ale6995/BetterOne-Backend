const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pictureSchema = new Schema({
  imgUrl: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  description: {
    type: String,
    required: false,
    default:"",
  },
  postId: { type: Schema.Types.ObjectId, ref: 'userPost',required:true },
}, {
  timestamps: true,
});

const Picture = mongoose.model('Picture', pictureSchema);

module.exports = Picture;