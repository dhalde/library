const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost:27017/libsys`, {
    useNewUrlParser: true
}).then(res => {
    console.log('connect to the Database Successfully');
}).catch((e) => {
    console.log(`Not connected ${e}`);
});