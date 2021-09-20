const mongoose = require('mongoose');

const url = 'mongodb+srv://adityasharan:Fin0909@mycluster.an5fo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

var db = mongoose.connect(url,{ useNewUrlParser: true},(err) => {
    if(!err){
        console.log('Connect ho gaiyluu Re !!');
    }
    else {
        console.log('connect nhi hua' + " " +err);
    }
})

//Run it Through Node filename.js
