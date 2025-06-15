import express from 'express';
import { config } from 'dotenv';
import { ExpressLoader, MongooseLoader } from '../loaders';
import { AppConfig } from '../config';

config();

const app = express();
const expressLoader = new ExpressLoader(app);
const mongooseLoader = MongooseLoader.getInstance();

// Initialize the application
async function init() {
    try {
        await mongooseLoader.connect();
        await expressLoader.load();
        console.log('Application initialized successfully');
    } catch (error) {
        console.error('Failed to initialize application:', error);
        process.exit(1);
    }
}

// Initialize the application
init();

// Only start the server if we're not in a serverless environment
if (process.env.NODE_ENV !== 'production') {
    const port = process.env.PORT || AppConfig.PORT;
    app.listen(port, () => console.log(`Server ready on port ${port}.`));
}

export default app;
