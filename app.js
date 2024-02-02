const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const customerModel = require("./model/customerModel");
const mailer = require("./mailer");
const app = express();
app.use(express.static('public'))
app.use(express.json());
app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
})

app.post('/savedata', async (req, res) => {
  console.log(req.body);
  try {
    await customerModel.create(req.body)
    mailer(req.body.email_address, req.body.message, req.body.subject)
    res.status(201).json({
      status: 'success',
      message: 'Data saved'
    })
  }
  catch (err) {
    res.status(404).send('failed to save')
  }
})

module.exports = app;
