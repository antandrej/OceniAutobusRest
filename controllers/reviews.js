const client = require('../connection')

const getReviews = async (req, res, next) => {
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

const newReview = async (req, res, next) => {
    try{
        const params = [req.body.name, req.body.bus, req.body.stars, req.body.comment, req.body.date];
        const query = `INSERT INTO reviews(name, bus, stars, comment, date) VALUES($1, $2, $3, $4, $5)`;

        const review = await client.query(query,params);

        res.send("Review Added! \n");
        
        client.end;
    }
    catch(err){
        console.log(err.message);
    }
};

module.exports = { getReviews, newReview };