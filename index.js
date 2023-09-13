const client = require('./connection.js')
const app = require('./app.js');

const reviewsRouter = require('./routes/reviews.js');
//const commentsRouter = require('./routes/comments.js');

app.use('/', reviewsRouter);
//app.use('/', commentsRouter);
/*
(async () => {
    await client.connect();
    try {
      const results = await client.query("SELECT NOW()");
      console.log(results);
    } catch (err) {
      console.error("error executing query:", err);
    } finally {
      client.end();
    }
  })();
*/
const port = process.env.PORT || 26257;
app.listen(26257, () => console.log(`Listening on port ${port} . . .`));

client.connect();