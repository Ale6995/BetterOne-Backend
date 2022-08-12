const router = require('express').Router();
let userPost = require('../models/userPost.model');

router.route('/').get((req, res) => {
    userPost.find()
      .then(posts => res.json(posts))
      .catch(err => res.status(400).json('Error: ' + err));
  
});


// router.route('/').get((req, res) => {
// //if there is param user with the user id returns the projects where the user is assigned
// console.log(req.query.user)
//  if(req.query.user!=undefined && req.query.user!=''){
//   Project.find({users: req.query.user})
//   .then(projects => res.json(projects))
//   .catch(err => res.status(400).json('Error: ' + err));
//  }else{
//   console.log("print all")
//   Project.find()
//   .then(projects => res.json(projects))
//   .catch(err => res.status(400).json('Error: ' + err));
//  }
  
// });

router.route('/add').post((req, res) => {
  const userPost = req.body;

  const newPost = new UserPost(userPost);

  userPost.save()
    .then(() => res.json('post added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;