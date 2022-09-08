const express = require('express');
const mongoose = require('mongoose');

const sender = require('../LAb 7/models/sender');
const parcel = require('../LAb 7/models/parcel');


const app = express();

app.listen(8080);


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect('mongodb://localhost:27017/parcel', function (err) {
    if (err) {
        return console.log('Mongoose - connection error:', err);
    }
    console.log('Connect Successfully');

});

// app.get('/parcel/:address', parcel.getAll);
// app.post('/parcel', parcel.createOne);
// app.get('/parcel/:id', parcel.getOne);
// app.put('/parcel/:id', parcel.updateOne);

// app.post('/parcel/:id/sender', parcel.addParcel);



app.get('/sender/:name', sender.getOne);
app.post('/sender', sender.createOne);
// app.get('/sender/:name', sender.getAll);

// app.put('/sender/:id', sender.updateOne);
// app.delete('/sender/:id', sender.deleteOne);

