var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var memberValidator = [
    function (value) {
        return (value.length>0 && value.toLowerCase() != 'none')
    },

    //custom error message
    'Select a valid member name.'
];

var requiredStringValidator = [
    function (val) {
        var testVal = val.trim();
        return (testVal.length > 0)
    },
    '{PATH} cannot be empty'
];

var standupSchema = new Schema({
    memberName: {
        type:String,
        required: true,
        validate: memberValidator},
    project: {
        type:String,
        required: true,
        validate: requiredStringValidator},
    workYesterday: {
        type:String,
        required: true,
        validate: requiredStringValidator},
    workToday: {
        type:String,
        required: true,
        validate: requiredStringValidator},
    impediment: {
        type:String,
        required: true,
        default: 'none'},
    createdOn: {
        type: Date,
        default: Date.now()}
});

//exports the model

module.exports = mongoose.model('Standup', standupSchema);