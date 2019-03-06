const ObjectId = require("mongoose").Types.ObjectId;
const models = require("./models");
const Booking = models.Booking;

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
  try {
    let data = await Booking.create({
      student: ObjectId(body.student),
      phone_number: body.phone_number ? body.phone_number : "",
      email: body.email,
      booking_time: body.booking_time
    });
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
