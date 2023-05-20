const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const app = express();
app.use(cors());
app.use(express.json());

// Serve static files from the build folder
app.use(express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => {
/*    const indexPath = path.join(__dirname, '../public/index.html');
    res.sendFile(indexPath);*/
    res.sendFile(path.join(__dirname, '../build', 'index.html'));

});

app.post('/submitProposal', (req, res) => {
    console.log(req.body);
    if (!req.body) {
        return res.status(400).json({ status: 'Failed' });
    }
    return res.status(200).json({ status: 'Proposal received' });
});

app.listen(8000, () => {
    console.log('Server listening on port 8000');
});