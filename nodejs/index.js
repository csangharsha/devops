const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const { createClient } = require('redis');
let { RedisStore } = require('connect-redis');

const {
    MONGO_USER,
    MONGO_PASSWORD,
    MONGO_IP,
    MONGO_PORT,
    PORT,
    REDIS_URL,
    REDIS_PORT,
    SESSION_SECRET
} = require('./config/config');
const postRouters = require('./routes/postRoutes');
const userRouters = require('./routes/userRoutes');

let redisClient = createClient({
    url: `redis://${REDIS_URL}:${REDIS_PORT}`
});
redisClient.on('error', (err) => console.error('Redis Client Error', err));
redisClient.connect().catch(console.error);

const app = express();
const port = PORT || 3000;

const mongoURI = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;
const connectWithRetry = () => {
    console.log('Attempting to connect to MongoDB...');
    mongoose.connect(mongoURI)
        .then(() => console.log('Connected to MongoDB'))
        .catch(err => {
            console.error('Could not connect to MongoDB', err);
            setTimeout(connectWithRetry, 5000);
        });
}
connectWithRetry();

app.use(session({
    store: new RedisStore({ client: redisClient }),
    secret: SESSION_SECRET,
    cookie: { 
      secure: false, 
      resave: false,
      saveUninitialized: false,
      httpOnly: true,
      maxAge: 60000
    }
}));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>Namastey Nepal!!!!</h1>');
});

app.use("/api/v1/posts", postRouters);
app.use("/api/v1/users", userRouters);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
}); 