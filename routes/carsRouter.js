const express = require('express');
const { as } = require('../data/db-config.js');
const db = require('../data/db-config.js');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const cars = await db('cars')
        res.status(200).json({
            success: true,
            data: cars
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to retrieve cars.',
            error: err
        });
    };
});

router.post('/', async (req, res) => {
    const carData = req.body
    db('cars').insert(carData)
        .then(ids => {
            db('cars').where({ id: ids[0] })
                .then(newCarEntry => {
                    res.status(201).json({
                        success: true,
                        message: 'Car add successfully',
                        data: newCarEntry
                    });
                });
        })
        .catch(err => {
            console.log('POST error', err)
            res.status(500).json({
                success: false,
                message: 'Failed to store data',
                error: err
        })
    })
});

module.exports = router;