const HoldingModel = require('../models/HoldingModel.js');

module.exports.getHoldings = async (req, res) => {
  let holdings = await HoldingModel.find();
  console.log(
    `Response Header before holdings sends a response :`,
    res.getHeaders(),
  );

  res.json({
    success: true,
    holdings,
  });
};

module.exports.getIndividualHoldingQty = async (req, res) => {
  let uid = req.params.uid;
  let qty = await HoldingModel.find({ name: uid });
  res.send(qty);
};
