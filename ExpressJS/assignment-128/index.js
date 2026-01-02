const express = require('express');
const Joi = require('joi');

const app = express();
app.use(express.json());

const PORT = 3000;

const userSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
});

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
});

// http://localhost:3000/add-user
app.post('/add-user', (req, res) => {
    const { error, value } = userSchema.validate(req.body);

    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    res.status(201).json({message: 'User added successfully!', user: value});
});

// http://localhost:3000/login
app.post('/login', (req, res) => {
    const { error, value } = loginSchema.validate(req.body);

    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    res.status(200).json({message: 'Login successful!', credentials: value});
});

app.listen(PORT, () => {
    console.log(`Server is running on port :`, PORT);
});
