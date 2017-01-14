// Modules extending node
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as path from 'path';
import * as compression from 'compression';
import * as http from 'http';

// Custom modules imported.  Some are routers behaving as miniapps routed to the main app.
import { indexRouter } from './routes/indexController';
import { userRouter } from './api/user/userController';

/**
 * Node Express Server Controller
 */

let app = express();
let server = http.createServer(app);

// view engine setup only for development
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Configure express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((err, req, res, next) =>
    res.status(500).send(JSON.stringify({ err: 'Bad API Request!' }))
);
app.use(express.static(path.join(__dirname, 'public')));

app.use(compression({ level: 9 }));

// Developer Site Frontend Routes
app.use('/', indexRouter);

//API Routes

// API Information
app.use('/api/v1', userRouter);

//Users
app.use('/api/v1/users', userRouter);
app.use('/api/v1/users/:userId', userRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.message = '404';
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});


//server start
server.listen(3000, () => {
    console.log('FIU SCIS Digital Asset Manager Running @ port 3000');
});

//Expose server module
export { app };