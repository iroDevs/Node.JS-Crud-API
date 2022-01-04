const read = require('../models/mongodb/getAllpersons');

async function readAllPlayers(req , res , _) { 
  const result = await read.getAllPlayers();
  res.status(200).json(result);
}
module.exports = {
  readAllPlayers,
}