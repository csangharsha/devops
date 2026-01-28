module.exports = {
    PORT: process.env.PORT || 3000,
    MONGO_IP: process.env.MONGO_IP || 'mongo',
    MONGO_PORT: process.env.MONGO_PORT || 27017,
    MONGO_USER: process.env.MONGO_USER || 'sangharsha',
    MONGO_PASSWORD: process.env.MONGO_PASSWORD || 'password123',
    MONGO_DB: process.env.MONGO_DB || 'admin',
    REDIS_URL: process.env.REDIS_URL || 'redis',
    REDIS_PORT: process.env.REDIS_PORT || 6379,
    SESSION_SECRET: process.env.SESSION_SECRET,
}