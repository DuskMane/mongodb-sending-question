var express = require('express');
var router = express.Router();
var Question = require('../models/Question');
/* Listing. */
router.get('/', function(req, res, next) {
  
    Question.find().then((Questions) => {
      res.json(Questions);
    }).catch((err) => {
      res.json(err);
    });
  
});
/* Adding. */
router.post("/", function(req, res, next){
 
    new Question({
      name: req.body.name,
      email: req.body.email,
      question: req.body.question,
    }).save().then(() => {
        res.json("Successfully added.");
    }).catch((err) => {
        res.json("There was an error while adding.");
    });
  
});
/* Updating. */
router.put("/:id", function(req, res, next){
  
    var id = req.params.id;

    Question.findByIdAndUpdate({"_id": id}, req.body).then((newQuestion) => {
        res.json("Successfully updated.");
    }).catch((err) => {
        res.json("There was an error while updating.");
    });
  
});
/* Deleting. */
router.delete("/:id", function(req, res, next){
  
    var id = req.params.id;
    Question.findByIdAndRemove(id).then(() => {
        res.json("Successfully deleted.");
    }).catch((err) => {
        res.json("There was an error while deleting.");
    });
  
});
module.exports = router;