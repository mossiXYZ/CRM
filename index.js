// Create a very simple server
import express from 'express';
import routes from './src/routes/crmRoutes'
// mongoose will allow us to set a schema for a collection and predefine 
// what each key-value pair takes as a type
import mongoose from 'mongoose';
// bodyParser allows us to send objects or data through HDT post, 
// through our DataBase(to get the right data and post it to database or API)
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;


// mangoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb',{ 
    useNewUrlParser: true 
});



// bodyparser setup
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json()); 

// after mongoose and bodyparser
routes(app);


//get sth when we are calling that specifique URL in our server
// we use back tick ` like template string  ` ... ${...}`
app.get('/', (req, res) =>
    res.send(`Node and express server is running  on port ${PORT}`)
);
//then we need to listen on specifique port 
app.listen(PORT, () =>
    console.log(`Your server is running on port ${PORT}`)
); 