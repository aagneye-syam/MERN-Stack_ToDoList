const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();
app.use(cors())
app.use(express.json())

PORT = 3001

app.listen(PORT, () => {
        console.log('Server running in',PORT)
})