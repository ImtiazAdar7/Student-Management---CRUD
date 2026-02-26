const app = require('./app');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000;
const connectDB = require('./config/database');
/**
 * @author Imtiaz Adar
 * @email imtiazadarofficial@gmail.com
 */
(async ()=>{
    await connectDB();
    app.listen(PORT, ()=>{
        console.log(`Server has been running on: http://127.0.0.1/${PORT}`);
    })
})();