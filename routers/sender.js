const mongoose = require('mongoose');

const sender = require('../LAb 7/models/sender');
const parcel = require('../LAb 7/models/parcel');

const sender = require('../models/sender');

module.exports = {

getAll: function(req,res){
    sender.findOne({name: req.params.name})
    .populate('parcel').exec(function(err,sender){
        if (err) return res.status(400).json(err);
        if (!sender) return res.status(404).json();

        res.json(sender);
    });
},

createOne: function(req,res){
    let newSenderDetails = req.body;
    newSenderDetails._id = new mongoose.Types.ObjectId();

    let sender = new sender(newSenderDetails);
    sender.save(function(err){
        console.log('Successful');
        res.json(sender);
    })
},

deleteOne: function(req,res){
    sender.findOneAndRemove({ _id: req.params.id }, function (err) {
        if (err) return res.status(400).json(err);

        res.json();
    });


},

updateOne: function (req, res) {
    sender.findOneAndUpdate({ _id: req.params.id }, req.body, function (err, sender) {
        if (err) return res.status(400).json(err);
        if (!sender) return res.status(404).json();

        res.json(sender);
    });
},

addParcel: function (req, res) {
    sender.findOne({ _id: req.params.id }, function (err, sender) {
        if (err) return res.status(400).json(err);
        if (!sender) return res.status(404).json();

        parcel.findOne({ _id: req.body.id }, function (err, parcel) {
            if (err) return res.status(400).json(err);
            if (!parcel) return res.status(404).json();

            sender.parcel.push(parcel._id);
            sender.save(function (err) {
                if (err) return res.status(500).json(err);

                res.json(sender);
            });
        })
    });
}

};