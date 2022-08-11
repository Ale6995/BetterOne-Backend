const router = require('express').Router();
let userPost = require('../models/userPost.model');

router.route('/').get((req, res) => {
    userPost.find()
      .then(posts => res.json(posts))
      .catch(err => res.status(400).json('Error: ' + err));
  
});

router.route('/add').post((req, res) => {
  const userPost = req.body;

  const newPost = new UserPost(userPost);

  userPost.save()
    .then(() => res.json('post added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;