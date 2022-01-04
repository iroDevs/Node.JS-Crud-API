const connection = require('./connection');

async function getAllPlayers() {
try {
  const connect = await connection();
  const query = await connect.collection('jogo').find().toArray();
  return query;

}catch(e) {
  console.log(e);
}
}

module.exports = {
  getAllPlayers
}