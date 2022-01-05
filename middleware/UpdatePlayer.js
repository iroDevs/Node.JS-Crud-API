const update = require('../models/mongodb/UpdatePerson');

async function UpdatePlayers(req , res , _) { 
  const id = req.params.id;
  const idade = req.body.idade;
 const classe = req.body.classe;
 const raca = req.body.raca;
 const magia = req.body.magia;

 const updateDocument = {
   idade,
   classe,
   raca,
   magia,
 }
  const result = await  update.UpdateNewPerson(id,updateDocument);
  res.status(200).json(result);
}
module.exports = {
  UpdatePlayers,
}