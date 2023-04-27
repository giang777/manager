const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/bh_306')
    .catch((err) => {
        console.log('Loi CSDL: ', err);
    })
module.exports = { mongoose }