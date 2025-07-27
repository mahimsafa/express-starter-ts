import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

// Set middlewares
app.use(
    cors()
    // cors({
    //     origin: 'http://localhost:3000',
    //     credentials: true
    // })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(cookieParser());
app.use((req, res, next) => {
    console.log(req.method, '\t - ', req.path);
    next();
});

// Import routes
import hello from './routes/hello.route';

// Setup routes
app.get('/status', (req, res) => {
    res.send(`
    Server is up and running!
    Environment: ${process.env.TEST_ENV}
    Working 101
    `);
});
app.use('/', hello);

export default app;
