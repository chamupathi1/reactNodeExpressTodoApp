const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const winston = require('winston');


// config
let config = require('./config');

// routes imports
let tasksRoutes = require('./routes/tasksRoutes');

const logger = winston.createLogger({
    levels: winston.config.syslog.levels,
    transports: [
        new winston.transports.Console({ level: 'error' }),
        new winston.transports.File({
            filename: 'combined.log',
            level: 'info'
        })
    ]
});

app.use(bodyParser.json());

app.use((req, res, next) => {
    setTimeout(
        next, 300); // add network latency
})


mongoose.connect(`mongodb://${config.db.host}:${config.db.port}${config.db.notesDbPath}`, { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function () {
    console.log("MongoDB database connection established successfully");
})

app.use('/api/v1/tasks', tasksRoutes);

// error handler
app.use((error, req, res, next) => {
    if (error.isServer) {
        // log server errors 5xx status codes
        logger.error(error);
        return res.status(500).json('internal server error');

    }
    if (error.output && error.output.statusCode) {
        return res.status(error.output.statusCode).json(error.output.payload);
    }

});

/**
 * Setup cilent servev in production
 */
app.use(express.static("client/build"));
const path = require("path");
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});


app.listen(config.serverPort, function () {
    console.log("Server is running on Port: " + config.serverPort);
});