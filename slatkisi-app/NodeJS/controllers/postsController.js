const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Post } = require('../models/posts');


// -------------------------------------------------------GET BY ID
router.get('/', (req, res) => {
  // find all from collection
  Post.find((err, docs) => {
    if(!err){
      res.send(docs);
    } else {
      console.log("Error in Retriving Posts: " + JSON.stringify(err, undefined, 2));
    }
  });
});

// -------------------------------------------------------GET ALL
router.get('/:id', (req, res) => {
  // find all from collection
  if(!ObjectId.isValid(req.params.id)){
    return res.status(400).send('No record with given id: ${re.params.id}');
  }

  Post.findById(req.params.id, (err, doc)=>{
    if(!err){res.send(doc);}
    else{console.log('Error in Retriving Posts: ' + JSON.stringify(err, undefined, 2));}
  });
});

// -------------------------------------------------------POST NEW
router.post('/', (req, res) =>{
  var emp = new Post({

    // Šta Mongo baza dobija iz tela zahteva
    title: req.body.title,
    content: req.body.content

  });
  emp.save((err, doc) => {
    if(!err){
      res.send(doc);
    } else {
      console.log("Error in Posts save: " + JSON.stringify(err, undefined, 2));
    }
  });
});

// -------------------------------------------------------EDIT OLD
router.put('/:id', (req, res) => {
  // find all from collection
  if(!ObjectId.isValid(req.params.id)){
    return res.status(400).send('No record with given id: ${re.params.id}');
  }

  var emp = {

    title: req.body.title,
    content: req.body.content

  };

  Post.findByIdAndUpdate(req.params.id, { $set: emp}, { new: true}, (err, doc) => {
    if(!err){
      res.send(doc);
    } else {
      console.log('Error in Post Update: ' + JSON.stringify(err, undefined, 2));
    }
  });
});

// ---------------------------------------------------------DELETE
router.delete('/:id', (req,res) =>{
  if(!ObjectId.isValid(req.params.id)){
    return res.status(400).send('No record with given id: ${re.params.id}');
  }

  Post.findByIdAndRemove(req.params.id, (err, doc) =>{
    if(!err){
      res.send(doc);
    } else {
      console.log('Error in Post Deletion: ' + JSON.stringify(err, undefined, 2));
    }
  });
});

module.exports = router;


