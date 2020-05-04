require('babel-polyfill')
const express = require('express')
const bodyParser = require('body-parser')

const mailer = require('./mailer')

const app = express()

// NEED TO LOOK AT REDIRECT AFTER SUBMISSIONS

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('*', (req, res) => {
  res.send('Server is working. Please post at "/contact" to submit a message.')
})

app.post('/contact', (req, res) => {
  const { email = '', name = '', message = '' } = req.body

  mailer({ email, name, text: message }).then(() => {
    console.log(`Sent the message "${message}" from <${name}> ${email}.`);
    res.redirect('/#success');
  }).catch((error) => {
    console.log(`Failed to send the message "${message}" from <${name}> ${email} with the error ${error && error.message}`);
    res.redirect('/#error');
  })
})

app.listen(process.env.PORT || 8000, () => {
  console.log(`App listening`);
})