import express from 'express';
import cors from 'cors';
import { PORT, getApiBaseUrl } from './config.js';
import { connectToDatabase } from './db.js';
import routes from './routes.js';
const app = express();
app.use(cors());
app.use(express.json());
app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', message: 'OctoFit Tracker API is running' });
});
app.get('/api/config', (_req, res) => {
    res.json({ apiBaseUrl: getApiBaseUrl() });
});
app.use(routes);
connectToDatabase()
    .then(() => {
    console.log('Connected to MongoDB');
})
    .catch((error) => {
    console.error('MongoDB connection error:', error);
});
app.listen(PORT, () => {
    console.log(`Backend listening on port ${PORT}`);
    console.log(`API base URL: ${getApiBaseUrl()}`);
});
