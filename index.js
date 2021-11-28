const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

const app = express();

//rate limiting
const limiter = rateLimit({
  windowsMs: 10 * 60 * 1000, //10 mins
  max: 20
});
app.use(limiter);
app.set('trust proxy', 1);

//setting static folder
app.use(express.static('public'));

//including routes
app.use('/api', require('./routes'));

//enabling cors
app.use(cors());

app.listen(PORT, () => console.log(`Server is on lclhst${PORT}`));