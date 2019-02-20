var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  // Set up default mongoose connection
  var mongoDB = 'mongodb://127.0.0.1/my_database';
  mongoose.connect(mongoDB);
  // Get Mongoose to use the global promise library 
  mongoose.Promise = global.Promise;
  // Get the default connection
  var db = mongoose.connection;
  // Bind connection to error event (to get notification of connection errors)
  db.on('error', console.error.bind(console, 'MongoDB connection error'));

  var StudentSchema = new Schema(
    {
      id: Number,
      name: {type: String, required: true },
      bday: { type: Number, required: true },
      bmonth: { type: Number, required: true },
      byear: { type: Number, required: true },
      gender: {type: String, required: true },
      color: String,
      highest_education: {type: String, required: false },
      previous_institute: {type: String, required: false },
      grades: {type: String, required: false },
      created_time: { type: Date, default: Date.now() }
    }
  );

  const student = mongoose.model("Student", StudentSchema);
  
  mongoose.connect('mongodb://localhost:27017/Students', {useNewUrlParser: true});

  module.exports = {
    Student : student,
};