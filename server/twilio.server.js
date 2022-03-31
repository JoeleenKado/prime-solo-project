
const express = require('express');
require('dotenv').config();

const app = express();
const router = express.Router()
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const smsRouter = require('./routes/sms.router')
// const userRouter = require('./routes/user.router');
// const usersRouter = require('./routes/users.router')
// const artRouter = require('./routes/art.router');
// const articRouter = require('./routes/artic.router');
// const workshopRouter = require('./routes/workshop.router')
// const settingsRouter = require('./routes/settings.router')
// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());


app.use('/api/sms', smsRouter);
// app.use('/api/user', userRouter);
// app.use('/api/users', usersRouter);
// app.use('api/settings', settingsRouter)
// app.use('/api/art', artRouter); //this route will be used when we Get art
// app.use('/api/artic', articRouter); //this route will be used when we Get art
// app.use('/api/workshop', workshopRouter); //this route will be used when we Get art


// Serve static files
app.use(express.static('build'));



// App Set //
// const PORT = process.env.PORT || 5000;
const PORT = 8080
/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
