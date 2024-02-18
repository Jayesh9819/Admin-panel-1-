
const mongoose = require('mongoose');

const firstDbUserSchema = new mongoose.Schema({

    userId: { type: String, required: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    passwordConfirm: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    rateAdjustment: { type: Number },
    defaultServiceType: { type: String },
    defaultBillingGroup: { type: String },
    inetOption: { type: String, enum: ['Option1', 'Option2', 'Option3'] },
    miscInetOption: { type: String, enum: ['OptionA', 'OptionB', 'OptionC'] },
    addressBook: [{ name: String, address: String }] // Assuming address book is an array of objects 
});

const UserModel = mongoose.model('User', firstDbUserSchema);

module.exports =  UserModel; 
