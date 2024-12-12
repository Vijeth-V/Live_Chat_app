const express = require('express');
const app = express();
const port = 5002;

try {
    console.log('Express module loaded successfully');
} catch (error) {
    console.error('Error loading Express:', error);
    process.exit(1); // Exit the process if Express fails to load
}

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});