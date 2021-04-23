const express = require('express');
const Post = require('../models/Post');
const router = express.Router();



router.get("/",  async(req,res)=>{
  try{const posts = await Post.find();
  res.json(posts);}
  catch(err){
    res.json({getMessage: err});
  }

})

router.get("/specific",(req,res)=>{
  res.send("This is a specific post!");
})

router.post("/", async(req,res)=>{
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  });

  try{
    const savedPost = await post.save();
    res.json(savedPost);
  }catch(err){
    console.log(err);
    res.send({message:err});
  }
})

//get a specific post
router.get('/:postId', async(req,res)=>{
  try{
    const post = await Post.findById(req.param.postId);
    res.json(post);
  }catch(err){
    res.json({specificMessage: err});
  }
})

//Delete Post
router.delete('/:postId', async(req, res) => {
  Post.remove({_id: req.params.postId})
})

module.exports = router;