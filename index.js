const express = require('express');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

const app = express();

//including routes
app.use('/api', require('./routes'));

//enabling cors
app.use(cors());

app.listen(PORT, () => console.log(`Server is on lclhst${PORT}`));