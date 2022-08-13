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
  picture1: {type: String,
    required: true,
        unique: false,
        trim: true,
        minlength: 3
  },
  picture2:{type: String,
    required: true,
        unique: false,
        trim: true,
        minlength: 3
  },
  likes1:[{
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      default: [],
      unique: false,
      required:false, 
  }
  ],
  likes2:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    default: [],
    unique: false,
    required:false, 
}
],
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

const UserPost = mongoose.model('userPost', userPostSchema);

module.exports = UserPost;