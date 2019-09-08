const express = require('express');
const connectDB = require('./config/db');

const app = express();

//COnnect Database
connectDB();

//init middleware
app.use(express.json({ extended: true }));

app.get('/', (req, res) => res.send('Api Running'));

// Define Routes
app.use('/api/users', require('./config/routes/api/users'));
app.use('/api/auth', require('./config/routes/api/auth'));
app.use('/api/profile', require('./config/routes/api/profile'));
app.use('/api/posts', require('./config/routes/api/posts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server |Started on port ${PORT}`));
