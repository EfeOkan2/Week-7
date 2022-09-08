const mongoose = require('mongoose');

const sender = require('../LAb 7/models/sender');
const parcel = require('../LAb 7/models/parcel');


module.exports = {

getAll: function(req,res){
    
    parcel.find({address : req.params.address},function(err,parcel){
        if (err) return res.status(400).json(err);

        res.json(parcel);

    });

},

updateOne: function(req,res){
    parcel.findOneAndUpdate({_id:req.params.id},req.body,function(err,parcel){
        if (err) return res.status(400).json(err);
        if (!actor) return res.status(404).json();

        res.json(parcel);
    });


}




};