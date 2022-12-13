const express = require('express');
const mongoose = require('mongoose');
const app = express();
const http = require('http');
const chalk = require('chalk');
const fs = require('fs');
const errorMsg = chalk.bgKeyword('white').redBright;
const successMsg = chalk.bgKeyword('green').white;
const taskRoutes = require('./routes/task-routes');
const taskApiRoutes = require('./routes/api-task-routes');
const createPath = require('./helpers/create-path');
var cookieParser = require('cookie-parser')

// .env file with configuration (db, port)
require('dotenv').config();

// connect to mongodb
mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true})
  .then((res) => console.log(successMsg('Connected to DB')))
  .catch((error) => console.log(errorMsg(error)));

// ejs - for dynamic and partials
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

app.use(taskApiRoutes);
app.use(taskRoutes);

// redirect to tasks page
// app.use((req, res) => {
//   res
//     .status(200) 
//     .redirect('/tasks');
// });

// error page
app.use((req, res) => {
  const title = 'Error';
  res
    .status(404) 
    .render(createPath('error'), { title });
});

// start server
app.listen(process.env.PORT, (error)=> {
  error ? console.log(errorMsg(error)) : console.log(successMsg(`Listening port ${process.env.PORT}`));
});