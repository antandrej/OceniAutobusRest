const client = require('../connection')

const getAllReviews = async (req, res, next) => {
    try {
        const query = 'SELECT * FROM reviews ORDER BY date DESC';

        const sessions = await client.query(query);

        res.send(sessions.rows);

        client.end;
    }
    catch (err) {
        console.log(err.message);
    }
};

const get10Reviews = async (req, res, next) => {
    try {
        const query = 'SELECT * FROM reviews ORDER BY date DESC LIMIT 10;';

        const sessions = await client.query(query);

        res.send(sessions.rows);

        client.end;
    }
    catch (err) {
        console.log(err.message);
    }
};

const getReviewsByType = async (req, res, next) => {
    try {
        const params = [req.params.by];
        const type = req.params.type;

        const query = `SELECT * FROM reviews WHERE ${type} = $1 ORDER BY date DESC`;

        const sessions = await client.query(query, params);

        res.send(sessions.rows);

        client.end;
    }
    catch (err) {
        console.log(err.message);
    }
};


const newReview = async (req, res, next) => {
    try {
        const params = [req.body.name, req.body.bus, req.body.stars, req.body.comment, req.body.date];
        const query = `INSERT INTO reviews(name, bus, stars, comment, date) VALUES($1, $2, $3, $4, $5)`;

        const review = await client.query(query, params);

        res.send("Review Added! \n");

        client.end;
    }
    catch (err) {
        console.log(err.message);
    }
};

module.exports = { getAllReviews, newReview, get10Reviews, getReviewsByType };