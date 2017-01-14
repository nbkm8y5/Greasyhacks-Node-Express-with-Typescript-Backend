/**
 * Greasyhacks Node + Express with Typescript Backend Router/Controller
 */

import * as express from 'express';
let indexRouter = express.Router()

indexRouter.get('/', (req, res, next) => {
    res.render('index', {
        title: 'Greasyhacks Node + Express with Typescript Backend'
    });
});

export { indexRouter };