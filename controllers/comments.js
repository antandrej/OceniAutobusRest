const client = require('../connection')

const newComment = async (req, res, next) => {
    try {
        const params = [req.body.email, req.body.comment, req.body.date];
        const query = `INSERT INTO comments(email, comment, date) VALUES($1, $2, $3)`;

        const comment = await client.query(query, params);

        res.send("Comment Added! \n");

        client.end;
    }
    catch (err) {
        console.log(err.message);
    }
};

module.exports = { newComment };