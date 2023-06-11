const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');



// POST a new order
router.post('/', async (req, res) => {
    const client = await pool.connect();
    console.log(req.body)
    try {
        const {
            feeling,
            understanding,
            support,
            comments
           } = req.body;
        await client.query('BEGIN')
        const surveyInputs = await client.query(`INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
        VALUES ($1, $2, $3, $4)
        RETURNING id;`, [feeling, understanding, support, comments]);
        const surveyId = surveyInputs.rows[0].id;

    //     await Promise.all(surveyList.map(surveyList => {
    //         const insertLineItemText = `INSERT INTO "line_item" ("order_id", "pizza_id", "quantity") VALUES ($1, $2, $3)`;
    //         const insertLineItemValues = [orderId, pizza.id, pizza.quantity];
    //         return client.query(insertLineItemText, insertLineItemValues);
    //     }));

        await client.query('COMMIT')
        res.sendStatus(201);
    } catch (error) {
        await client.query('ROLLBACK')
        console.log('Error POST /survey', error);
        res.sendStatus(500);
    } finally {
        client.release()
    }
});

// GET Route
router.get('/', (req, res) => {
    // Collect all surveys and return them
    pool.query(`
    SELECT * FROM "feedback" ORDER BY "date" DESC;`)
        .then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log('Error GET /survey', error);
            res.sendStatus(500);
        });
})// END GET Route

// DELETE a survey
// router.delete('/:id', (req, res) => {
//     pool.query('DELETE FROM "feedback" WHERE id=$1', [req.params.id])
//         .then((result) => {
//             res.sendStatus(200);
//         }).catch((error) => {
//             console.log('Error DELETE /survey', error);
//             res.sendStatus(500);
//         })
// }); // END DELETE route


// PUT Route
// router.put('/:id', (req, res) => {
//     console.log(req.params);
//     const surveyId = req.params.id;
//     for (const survey of surveyList) {
//         if (survey.id) {

//         }
//     }
//     res.sendStatus(200);
// }); // END PUT Route


module.exports = router;