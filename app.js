const express = require('express');
const app = express();

// Heroku dynamically sets a port
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5003;

app.use(express.static('dist'));

app.get('/version', (req, res) => {
  res.send('1') // change this string to ensure a new version deployed
});

app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/testing', (req, res) => {
  res.send('pass')
})

app.get('/hello', (req, res) => {
  res.send('hello')
})

app.listen(PORT, () => {
  // eslint-disable-next-line
  console.log("server started on port 5003");
});

