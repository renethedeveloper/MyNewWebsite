
const mongoose = require('mongoose');

let connectionString = process.env.MONGO_URL
console.log(connectionString);

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to DATABASE');
})
.catch((error) => {
    console.error('Connection to DATABASE failed:', error);
});
