
// const mongoose = require('mongoose')
// const { Schema } = mongoose;


// const adminSchema = new Schema({
//     username: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     password: {
//         type: String,
//         required: true
//     },
//     resetToken: {
//         type: String, // This will store the reset token
//     },
//     resetTokenExpires: {
//         type: Date, // This will store the expiration date of the reset token
//     },
//     isBar: {
//         type: Boolean,
//         default: false
//     },
//     isCoupon: {
//         type: Boolean,
//         default: false
//     },
//     isDirect: {
//         type: Boolean,
//         default: false
//     },
// });


// const Admin = mongoose.model('Admin', adminSchema)
// module.exports = Admin


const mongoose = require('mongoose')
const { Schema } = mongoose;


const adminSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    resetToken: {
        type: String, // This will store the reset token
    },
    resetTokenExpires: {
        type: Date, // This will store the expiration date of the reset token
    },
    isBar: {
        type: Boolean,
        default: false
    },
    isCoupon: {
        type: Boolean,
        default: false
    },
    isDirect: {
        type: Boolean,
        default: false
    },
    isLan: {
        type: Boolean,
        default: false
    },
    islanBill: {
        type: Boolean,
        default: false
    },
});


const Admin = mongoose.model('Admin', adminSchema)
module.exports = Admin

