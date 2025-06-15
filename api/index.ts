require('dotenv').config();

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const path = require('path');

// Create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static('public'));

// Middleware
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
	res.json({
		status: 'ok',
		timestamp: new Date().toISOString(),
		environment: process.env.NODE_ENV || 'development'
	});
});

// Test endpoint
app.get('/api/test', (req, res) => {
	res.json({
		message: 'API is working!',
		data: {
			test: true,
			timestamp: new Date().toISOString()
		}
	});
});

// Users endpoint
app.get('/api/users', async (req, res) => {
	try {
		// For now, return mock data since we don't have database connection
		const mockUsers = [
			{ id: 1, name: 'John Doe', email: 'john@example.com' },
			{ id: 2, name: 'Jane Smith', email: 'jane@example.com' }
		];
		
		res.json({
			success: true,
			data: mockUsers
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({
			success: false,
			error: 'Internal server error'
		});
	}
});

// Vercel requires this export
module.exports = app;

// Only start the server if we're not in a serverless environment
if (process.env.NODE_ENV !== 'production') {
	const port = process.env.PORT || 3000;
	app.listen(port, () => console.log(`Server ready on port ${port}.`));
}
