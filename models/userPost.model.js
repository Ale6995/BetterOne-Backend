const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userPostSchema = new Schema({
  caption: {
    type: String,
    required: false,
    unique: false,
    trim: true,
    minlength: 3
  },
  userId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    default: [],
    unique: false
  },
  pictures: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "picture",
    default: [],
    unique: true
  }],
  comments:[
    {type: String,
        required: false,
        unique: false,
        trim: true,
        minlength: 3}
  ]//not sure about this part of the model 
}, {
  timestamps: true,
});

// projectSchema.pre('save', function (next) {
//   this.users = _.uniq(this.users);
//   next();
// });

const userPost = mongoose.model('userPost', userPostSchema);

module.exports = userPost;