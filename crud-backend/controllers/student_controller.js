const {v4: uuid} = require('uuid');
const studentModel = require('../models/student_model');
/**
 * @author Imtiaz Adar
 * @email imtiazadarofficial@gmail.com
 */
module.exports.getAllStudents = async(req, res)=>{
    try{
        const students = await studentModel.find();
        res.status(200).json(students);
    }
    catch(err){
        res.status(404).json({message: `Error, ${err.message}`});
    }
}

module.exports.getOneStudent = async(req, res)=>{
    try{
        const studentId = req.params.ID;
        const student = await studentModel.findOne({ID: studentId});
        res.status(200).json(student);
    }
    catch(err){
        res.status(404).json({message: `Error, ${err.message}`});
    }
}

module.exports.addStudent = async(req, res)=>{
    try{
        const {firstName, lastName, email, age, gender, designation} = req.body;
        const StudentCreate = new studentModel({"ID": uuid(), ...req.body});
        await StudentCreate.save();
        res.status(201).json({message: "User has been added succesfully!!!"});
    }
    catch(err){
        res.status(404).json({message: `Error, ${err.message}`});
    }
}

module.exports.updateStudent = async(req, res)=>{
    try{
        const student = await studentModel.findOneAndUpdate({ID: req.params.ID}, req.body, { new: true, runValidators: true });
        if(!student){
            return res.status(404).json({message: "Student Not Found!"});
        }
        res.status(200).json({message: "Updated Successfully!", student});
    }
    catch(err){
        res.status(500).json({message: `Error, ${err.message}`});
    }
}

module.exports.deleteStudent = async(req, res)=>{
    try{
        const student = await studentModel.findOneAndDelete({ID: req.params.ID});
        res.status(200).json({message: "Deleted Successfully!", student});
    }
    catch(err){
        res.status(404).json({message: `Error, ${err.message}`});
    }
}
