// Import các thư viện cần thiết
const express = require('express');
const cookieParser = require("cookie-parser");

// Khởi tạo ứng dụng Express
const app = express();

const bodyParser = require("body-parser");
const morgan = require("morgan");
const { db } = require("./utils/database");

app.listen(3001, () => {
    console.log("Server running 3001 ......");
  });