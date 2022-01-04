const create = require('../models/mongodb/CreatNewPerson');



async function CreatePlayer(req,res,_) {
 const nome = req.body.nome;
 const idade = req.body.idade;
 const classe = req.body.classe;
 const raca = req.body.raca;
 const magia = req.body.magia;
 
  const result = await create.CreateNewPerson(nome , idade ,classe, raca , magia); 
  res.status(200).json(result);
}
module.exports = {
  CreatePlayer,
}