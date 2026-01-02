const express = require('express');
const app = express();
app.use(express.json());
const PORT = 3000;

app.get('/config', (req, res) => {
    const config = {
        appName: req.header('x-app-name'),
        appVersion: req.header('x-app-version'),
        environment: req.header('x-environment'),
        
    };

    res.json(config);  
});

// http://localhost:3000/home
app.post('/home', (req, res) => {
    res.status(200).json({ message: "Hello, my self Rohit Sharma" });    
});

app.listen(PORT, () => {
    console.log(`Server is running on port `, PORT);
});
