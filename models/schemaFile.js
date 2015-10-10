/**
 * Created by briandaves on 10/10/15.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var toDoSchema = new Schema({
    list_item : String,
    taskComplete: Boolean
});

var toDoListItem = mongoose.model('to_dos', toDoSchema);

module.exports = toDoListItem;