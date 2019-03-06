const mongoose = require("mongoose");
require("mongoose-type-email");
const mongooseIntlPhoneNumber = require("mongoose-intl-phone-number");
const Schema = mongoose.Schema;

BookingSchema = new Schema({
    student: {
        type:Schema.Types.ObjectId,
        required:true
    },
    phone_number:{
        type:String
    },
    email:{
        type:mongoose.SchemaTypes.Email
    },
    booking_time:{
        type: Date,
        required:true
    },
    status:{
        type: String,
        enum:["new", "reviewed"],
        default: "new"
    },
    created_time: {
        type: Date,
        default: Date.now()
    }
})

BookingSchema.plugin(mongooseIntlPhoneNumber, {
    hook: 'validate',
    phoneNumberField: 'phone_number',
})

const booking = mongoose.model("Booking", BookingSchema);

module.exports = {
    Booking:booking
}