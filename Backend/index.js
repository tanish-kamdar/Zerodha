const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");
const url = process.env.MONGO_URL;
const OrderModel = require("./models/OrderModel");
const PositionModel = require("./models/PositionModel");
const HoldingModel = require("./models/HoldingModel");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoute = require("./routes/user");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const requireAuth = require("./middleware/requireAuth");


const holdingsRoute=require('./routes/holdings.js');

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


app.get("/positions", requireAuth, async (req, res) => {
  console.log(req.user);
  let positions = await PositionModel.find();
  console.log(
    `Response Header before positions sends a response :`,
    res.getHeaders()
  );
  res.json({
    success: true,
    positions,
  });
});
app.post("/order", requireAuth, async (req, res) => {

  if(!req.body) {
    return res.status(400).json({message: "No order data provided"});
  }
  let order = new OrderModel(req.body);
  await order.save();
  console.log(`Order received : `, order);

  let holding = await HoldingModel.findOne({ name: order.name });
  console.log(`Order mode : ${order.mode}`);

  if (order.mode === "BUY") {
    if (!holding) {
      console.log(`No stocks found. Creating new holding for ${order.name}`);
      await HoldingModel.insertOne({
        name: order.name,
        qty: order.qty,
        avg: order.price,
        net: "+0.00%",
        day: "+0.00%",
      });
      console.log(`New holding created for ${order.name}`);
    } else {
      console.log(`Existing holding found for ${order.name}`);
      let newQty = holding.qty + order.qty;

      await HoldingModel.updateOne(
        { name: holding.name },
        {
          qty: newQty,
          avg: parseFloat(
            (
              (holding.qty * holding.avg + order.qty * order.price) /
              (holding.qty + order.qty)
            ).toFixed(2)
          ),
        }
      );
      console.log(`Holding updated for ${order.name}`);
    }
  } else if (order.mode === "SELL") {
    if (!holding) {
      console.log(`No holdings found for ${order.name}. Cannot sell.`);

      return res
        .status(400)
        .json({ message: `No holdings found for ${order.name}. Cannot sell.` });
    }

    let newQty = holding.qty - order.qty;

    if (newQty === 0) {
      await HoldingModel.deleteOne({ name: holding.name });
      console.log(`All stocks sold. Holding removed for ${order.name}`);
      return;
    } else {
      await HoldingModel.updateOne(
        { name: holding.name },
        {
          qty: newQty,
        }
      );
      console.log(`Holding updated for ${order.name}`);
    }
  }
  res.status(201).json({ message: "Order placed successfully" });
});



//User Routes
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
  mongoose.connect(url);
  console.log(`Database Connection Established.`);
});
