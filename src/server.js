const express = require('express');
const dotEnv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const apiLimiter = require('./middleware/rateLimitMiddleware');

dotEnv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.use('/auth/api', authRoutes);
app.use("/api", apiLimiter)

app.get('/', (req, res) => {
    res.json({
        message: "Application is running"
    })
});

connectDB()

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
    console.log(`Server is running in port ${PORT}`)
})
