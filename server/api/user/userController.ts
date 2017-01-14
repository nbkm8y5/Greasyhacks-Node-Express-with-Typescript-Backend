/**
 * User Controller Module
 */

import * as express from 'express';
//import user model and database

//Creates a mini app that only handles routes for digital assets
let userRouter = express.Router();

/**
 * APPLICATION API DATA
 */
userRouter.get('/', (req, res, next) => {
    res.json({
        "name": "Greasyhacks Node + Express with Typescript Backend",
        "version": "1.0.0",
        "description": "Greasyhacks Node + Express with Typescript Backend",
        "repository": {
            "type": "git",
            "url": ""
        },
        "author": "Rolando Moreno",
        "license": "MIT",
    });
});

/**
 * CREATE ONE
 * Create a new instance of the model and persist it into the data source.
 */
userRouter.post('/users', (req, res, next) => {
    res.json({

        comment: 'Create a new instance of the model and persist it into the data source.',
        response: 'success',
        value: req.params
    });
});

/**
 * READ ALL
 * Find all instances of the model matched by filter from the data source.
 */
userRouter.get('/users', (req, res, next) => {

    res.json({

        comment: 'Find all instances of the model matched by filter from the data source.',
        response: 'success',
        value: req.params
    });

});

/**
 * READ ONE BY ID
 * Find a model instance by {{id}} from the data source.
 */
userRouter.get('/users/:userId', (req, res, next) => {
    res.json({
        response: 'success',
        value: req.params,
        comment: 'Find a model instance by {{id}} from the data source.'
    });
});

/**
 * UPDATE ONE BY ID
 * Patch attributes for a model instance and persist it into the data source.
 */
userRouter.put('/users/:userId', (req, res, next) => {
    res.json({
        response: 'success',
        value: req.params,
        comment: 'Patch attributes for a model instance and persist it into the data source.'
    });
});

/**
 * DELETE ONE BY ID
 * Delete a model instance by {{id}} from the data source.
 */
userRouter.delete('/users/:userId', (req, res, next) => {
    res.json({
        response: 'success',
        value: req.params,
        comment: 'Delete a model instance by {{id}} from the data source.'
    });
});

// Export the router to the main app
export { userRouter };