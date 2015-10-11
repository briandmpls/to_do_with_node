/**
 * Created by briandaves on 10/10/15.
 */
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var todo = require('../models/todo');

router.get('/getToDos', function(req, res, next){
    todo.find(function(err, todo){
        res.json(todo);
    })
});

router.post('/addToDos', function(req, res, next){
    console.log(req.body);
    todo.create(req.body, function(err, post){
        res.send();
    })
});

module.exports = router;