// Create web server
// 1. Import express
// 2. Create an instance of express
// 3. Create a route for GET /comments
// 4. Create a route for POST /comments
// 5. Start the server

const express = require('express');
const app = express();

app.use(express.json());

const comments = [
    { id: 1, author: 'John', text: 'Hello' },
    { id: 2, author: 'Jane', text: 'Hi' },
    { id: 3, author: 'John', text: 'How are you?' },
];

// GET /comments
app.get('/comments', (req, res) => {
    res.send(comments);
});

// POST /comments
app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.send(comment);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});