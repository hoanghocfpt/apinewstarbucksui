var env = require('dotenv');
var mongoose = require('mongoose');
env.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.URI_MONGODB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.log('MongoDB connection failed' + error);
    }
}

module.exports = connectDB;