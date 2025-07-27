import dotenv from 'dotenv';
dotenv.config({
    path: './.env'
});

const constants = {
    ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 5000
};

export default constants;
