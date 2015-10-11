/**
 * Created by briandaves on 10/10/15.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var toDoSchema = new Schema({
    listItem : String
});

var todo = mongoose.model('todo', toDoSchema);

module.exports = todo;