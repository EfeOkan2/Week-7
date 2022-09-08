const mongoose = require("mongoose");

const parcelSchema = new mongoose.Schema({

    //properties
    _id:{type: mongoose.Schema.Types.ObjectId, auto:true},
    sender: [{type: mongoose.Schema.ObjectId, ref:"Sender"}],
    address: {type: String, required: true},
    weight: {type: Number, validate: {validator:function(aWeight){
        return(aWeight>0)
    },
    message: 'Weight cannot be negative'
}},
    fragile: {type: Boolean, required: true}

});

module.exports = mongoose.model("Parcel", parcelSchema);