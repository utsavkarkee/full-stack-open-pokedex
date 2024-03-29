const express = require('express');
const app = express();

// Heroku dynamically sets a port
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5003;

app.use(express.static('dist'));


app.listen(PORT, () => {
  // eslint-disable-next-line
  console.log("server started on port 5003");
});

