const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET all feedback
router.get('/', (req, res) => {
    pool.query('SELECT * FROM "feedback" ORDER BY "id" DESC;').then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /api/feedback', error);
        res.sendStatus(500);  
    });
})

// POST new feedback
router.post('/', async (req, res) => {
    const client = await pool.connect();
    
    try {
        const {
            feeling,
            understanding,
            support,
            comment
        } = req.body;
        await client.query('BEGIN')
        const feedbackInsertResults = await client.query(`INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
        VALUES ($1, $2, $3, $4)
        RETURNING id;`, [feeling, understanding, support, comment]);

        await client.query('COMMIT')
        res.sendStatus(201);
    } catch (error) {
        await client.query('ROLLBACK')
        console.log('Error POST /api/feedback', error);
        res.sendStatus(500);
    } finally {
        client.release()
    }
});

// DELETE feedback by id
router.delete('/:id', (req, res) => {
    pool.query('DELETE FROM "feedback" WHERE id=$1;', [req.params.id]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error DELETE /api/feedback', error);
        res.sendStatus(500);
    })
});

// PUT to flag feedback
router.put('/:id', (req, res) => {
    pool.query(`
    UPDATE "feedback"
    SET "flagged" = NOT "flagged"
    WHERE id=$1;
    `, [req.params.id]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error PUT /api/feedback', error);
        res.sendStatus(500);
    })
});

module.exports = router;