const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");
const url = process.env.MONGO_URL;
const bodyParser = require("body-parser");
const cors = require("cors");

const cookieParser = require("cookie-parser");
const morgan = require("morgan");


const holdingsRoute=require('./routes/holdings.js');
const positionsRoute=require('./routes/positions.js');
const userRoute = require("./routes/user");
const orderRoute = require("./routes/order");

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(cookieParser(process.env.SECRET));
app.use(morgan("dev"));

//Holdings Routes
app.use("/holdings", holdingsRoute);

//Positions Routes
app.use('/positions',positionsRoute);


app.use("/order", orderRoute);



//User Routes
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
  mongoose.connect(url);
  console.log(`Database Connection Established.`);
});
