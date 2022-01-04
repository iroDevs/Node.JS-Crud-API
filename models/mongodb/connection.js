const mongodb = require('mongodb').MongoClient;
const OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

const MONGO_DB_URL = 'mongodb://localhost:27017/pessoasData';
let DB_NAME = 'pessoasData';

module.exports = () => {
  return (
    mongodb.connect(MONGO_DB_URL,OPTIONS)
    .then((connection) => connection.db(DB_NAME))
    .catch((error) => console.error(error))
  );
}