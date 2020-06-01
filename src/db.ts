//here we are going to setup our db connection.

//here we are importing our modules.
import mongoose from "mongoose";

//here we are starting our connection.
async function dbConnection() {
    try {
        mongoose.connect('mongodb://localhost/TS-Project', {
            useFindAndModify: false,
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to the db');
    } catch(err) {
        console.log(err);
    };
};

//here we are exporting the configuration of our connection.
export default dbConnection;