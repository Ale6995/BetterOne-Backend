const router = require('express').Router();
let userPost = require('../models/userPost.model');

router.route('/').get((req, res) => {
   var limit=10;
   var page=1;
   if (req.query.limit!=""||req.query.limit!=undefined){
    if(Number(req.query.limit)!=NaN){
        limit=Number(req.query.limit)
    }
   }
   if (req.query.page!=""||req.query.page!=undefined){
    if(Number(req.query.page)!=NaN){
        limit=Number(req.query.limit)
    }
   }
    userPost.find({userId: {$ne: req.query.userId}}).limit(limit).skip(limit * page)
      .then(posts => res.json(posts))
      .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/myPosts').get((req, res) => {
    var limit=10;
    var page=1;
    if (req.query.limit!=""||req.query.limit!=undefined){
     if(Number(req.query.limit)!=NaN){
         limit=Number(req.query.limit)
     }
    }
    if (req.query.page!=""||req.query.page!=undefined){
     if(Number(req.query.page)!=NaN){
         limit=Number(req.query.limit)
     }
    }
     userPost.find({userId: req.query.userId}).limit(limit).skip(limit * page)
       .then(posts => res.json(posts))
       .catch(err => res.status(400).json('Error: ' + err));
 });
 router.route('/like').get((req, res) => {
    const index=Number(req.query.index);
    const userId = req.query.userId;
    if(index==1){
        userPost.updateOne({_id:postId}, {$addToSet:{likes1:userId},$pull: {likes2:userId}})
        .then(() => res.json('img1 liked'))
        .catch(err => res.status(400).json('Error: ' + err));
    }else{
        userPost.updateOne({_id:postId}, {$addToSet:{likes2:userId},$pull: {likes1:userId}})
        .then(() => res.json('img2 liked'))
        .catch(err => res.status(400).json('Error: ' + err));
    }
     
 });
 // router.route('/assign').get((req, res) => {
//   const userId = req.query.user;
//   const taskId = req.query.task;

//    Task.updateOne({_id:taskId}, {$set:{assignee:userId}})
//    .then(() => res.json('user is assigned to the task!'))
//    .catch(err => res.status(400).json('Error: ' + err));

// });


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