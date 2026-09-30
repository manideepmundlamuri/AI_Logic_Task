
const rateLimit = require('express-rate-limit');

const apiLimiter = rateLimit(
    {
        windowMs: 60 * 1000,
        max: 5,

        standaredHeaders: true,
        legacyHeaders: false,
        handler: (req, res) => {
            return res.status(429).json({
                success: false,
                statusCode: 429,
                message: "Too many requests Please try again afer 1 minute."
            })
        }
    }
);

module.exports = apiLimiter