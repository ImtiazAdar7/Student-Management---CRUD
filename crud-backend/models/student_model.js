const mongoose = require('mongoose');
/**
 * @author Imtiaz Adar
 * @email imtiazadarofficial@gmail.com
 */
const studentSchema = mongoose.Schema(
    {ID: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    age: {type: Number, required: true},
    gender: {type: String, enum: ['Male', 'Female', 'Other'], required: true},
    designation: {type: String, required: true}},
    {timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}}
)
module.exports = mongoose.model('Students_', studentSchema);