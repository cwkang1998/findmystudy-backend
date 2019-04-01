const ObjectId = require("mongoose").Types.ObjectId;
const models = require("./models");
const Booking = models.Booking;

/**
 * List all bookings made by students
 * @param {Function} req
 * @param {Function} res
 * @param {Function} next
 */
async function ListBookingController(req, res, next) {
    let query = Booking.find(
        {},
        "_id student phone_number email booking_time status"
    ).sort("-created_time");
    try {
        let data = await query.exec();
        res.status(200).json(data);
    } catch (err) {
        res.status(400).json({ err: err.message });
        return;
    }
}

async function CreateBookingController(req, res, next) {
    const body = req.body;
    let bookingData = {
        student: ObjectId(body.student),
        booking_time: body.booking_time,
        phone_number: ""
    };
    if (body.phone_number) {
        if (body.phone_number.slice(0, 2) != "+6") {
            bookingData.phone_number = `+6${body.phone_number}`;
        }else{
          bookingData.phone_number = body.phone_number;
        }
    }
    if (body.email) {
        bookingData.email = body.email;
    }
    try {
        let data = await Booking.create(bookingData);
        res.status(201).json({
            _id: data._id,
            student: data.student,
            phone_number: data.phone_number,
            email: data.email,
            booking_time: data.booking_time
        });
    } catch (err) {
        message = err.message;
        if (
            err.message ==
            "Argument passed in must be a single String of 12 bytes or a string of 24 hex characters"
        ) {
            message = `ObjectID Validation Error: ${err.message}`;
        }
        res.status(400).json({ err: message });
        return;
    }
}

module.exports = {
    ListBookingController,
    CreateBookingController
};
