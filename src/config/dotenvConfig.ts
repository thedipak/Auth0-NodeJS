import dotenv from 'dotenv';

const dotenvConfig = () => {
    dotenv.config();
    if (!process.env.MONGO_URI) {
        throw new Error('MONGO_URI not set in .env file');
    }
};

export default dotenvConfig;
