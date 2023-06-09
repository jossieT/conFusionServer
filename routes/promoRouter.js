const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();
promoRouter.use(bodyParser.json());

promoRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send you all promotions');
    })
    .post((req, res, next) => {
        res.end('will add promotion: ' + req.body.name + ' with details ' + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /promotions');
    })
    .delete((req, res, next) => {
        res.end('deleting all promotions');
    });

promoRouter.route('/:promoId')
    .get((req, res, next) => {
        res.end('Will send all details of promotion: ' + req.params.promoId + ' to you');
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('POST opertation not supported on /promotions/' + req.params.promoId);
    })
    .put((req, res, next) => {
        res.write('Updating the promotion: ' + req.params.promoId + '\n');
        res.end('will update the promotion: ' + req.body.name + ' with details ' + req.body.description);
    })
    .delete((req, res, next) => {
        res.end('deleting promotion: ' + req.params.promoId);
    });

module.exports = promoRouter;