const client = require('./connection.js')
const app = require('./app.js');



const port = process.env.PORT || 3000;
app.listen(3000, () => console.log(`Listening on port ${port} . . .`));

//client.connect();