const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/PicnicGames', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })
        console.log('connect sucessfully!!!')
    } catch (error) {
        console.log(error);
        console.log('connect failure!!!')
    }
}
module.exports = {connect}

