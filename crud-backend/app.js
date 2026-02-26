const express = require('express');
const cors = require('cors');
const router = require('./routes/student_route');
/**
 * @author Imtiaz Adar
 * @email imtiazadarofficial@gmail.com
 */
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/students', router);

app.get('/', (req, res)=>{
    res.send('EXPRESS JS HAS BEEN RUNNING SUCCESSFULLY!');
})

module.exports = app;