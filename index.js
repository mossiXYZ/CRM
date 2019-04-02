//Create a very simple server
import express from 'express';
import routes from './src/routes/crmRoutes'

const app = express();
const PORT = 3000;

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