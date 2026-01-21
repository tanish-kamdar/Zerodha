const PositionModel = require('../models/PositionModel.js');

module.exports.getPositions = async (req, res) => {
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
}
