const mongoose  =   require('mongoose');


const transmissionSchema = mongoose.Schema({
    author:           {type: String, required: true},

    message:          {type: String, required: true},
})