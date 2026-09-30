const mongoose = require('mongoose');

const connectDB = async () => {
    try {

        await mongoose.connect(process.env.MONGO_URL);
        console.log('Mongodb is connected')
    } catch (error) {
        console.log('Mongodb is not connected');
        process.exit(1)
    }
}

module.exports = connectDB