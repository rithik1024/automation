const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({

    name:{
        type:"String",
        required : true,
    },
    salary:{
        type:"Number",
        required : true,
    },
    email:{
        type:"String",
        required : true,
        unique:true
    },
    mobile:{
        type:"Number",
        required : true,
    },
    address:{
        type:"String",
        required : true,
    },
    pin:{
        type:"Number",
        required : true,
    },
    state:{
        type:"String",
        required : true,
    },
    country:{
        type:"String",
        required : true,
    },
    birthday:{
        type:"Date",
        required : true,
    },
    image:{
        type:"String",
    },
    desi:{
        type:'String'
    },
    bank:{
        type:'String'
    },
    ifsc:{
        type:"String"
    },
    acc:{
        type:"String"
    },
    isAdmin:{
        type: Boolean,
        required: true,
    }
    
})

module.exports = mongoose.model('Employee',employeeSchema)