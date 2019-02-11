const express = require('express');
const path = require('path');
const cors = require('cors');
const parser = require('body-parser');
//  import router

const app = express();
const port = 9000;

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(cors());

//  add router here

app.use(express.static(path.resolve(__dirname, '../client/dist/')));

app.listen(port, () => {
  console.log(`Server active on port ${port}`);
});
