const client = require('./connection.js')
const app = require('./app.js');

const reviewsRouter = require('./routes/reviews.js');
const commentsRouter = require('./routes/comments.js');

app.use('/', reviewsRouter);
app.use('/', commentsRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port} . . .`));

client.connect();