require('./mongo');
const express = require('express');
const app = express();
const providers = require('./src/models/provider');
const bodyParser = require('body-parser');
//const apiRouter = require('./src/routes')
const cors = require('cors');
const port = process.env.EXPRESS_PORT || 4000;
const host = process.env.EXPRESS_HOST || '0.0.0.0';

app.use(bodyParser.urlencoded({extended:false}));

//app.use('/api', apiRouter);

app.use(cors());

app.get('/:index', (req, res) => {
    res.send(providers[req.params.index]);
});

app.listen(port, host, () => {
    console.log(`App listening on host ${host} and ${port} - - local URL: http://localhost:${port}`);
})
