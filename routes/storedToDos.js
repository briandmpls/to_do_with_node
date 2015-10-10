/**
 * Created by briandaves on 10/10/15.
 */
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var to_dos = require('../models/to_dos');

router.get('/getToDos', function(req, res, next){
    to_dos.find(function(err, todo){
        res.json(todo);
    })
});

router.post('/addToDos', function(req, res, next){
    console.log(req.body);
    to_dos.create(req.body, function(err, post){
        res.send('all good');
    })
});

module.exports = router;