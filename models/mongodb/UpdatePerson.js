const connection = require('./connection');

async function UpdateNewPerson(id,update) {
try {
  const connect = await connection();
  const query = await connect.collection('jogo').update({_id: id},{$set:{ update }});
  return query;

}catch(e) {
  console.log(e);
}
}

module.exports = {
  UpdateNewPerson
}