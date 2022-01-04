const connection = require('./connection');

async function CreateNewPerson(nome , idade ,classe, raca , magia) {
try {
  const connect = await connection();
  if(magia === [] ){
  const query = await connect.collection('jogo').insertOne({
  nome,
    idade,
    classe,
    raca,
    
  });
  return query;

  }
  else {
  const query = await connect.collection('jogo').insertOne({
    nome,
    idade,
    classe,
    raca,
    magia,
  });
  return query;
  }


}catch(e) {
  console.log(e);
}
}

module.exports = {
  CreateNewPerson
}