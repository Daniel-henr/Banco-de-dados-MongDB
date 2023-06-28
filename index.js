const { MongoClient } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017/testemongo';

const cliente = new MongoClient(uri);

async function run() {
  try {
    await cliente.connect();
    console.log("Conectado");

    const database = cliente.db();
    const collection = database.collection('BancoMongo'); // Substitua 'nomedaColecao' pelo nome da sua coleção

    // Dados para criar o documento
    const documento = [ {
      nome: "Daniel",
      idade: 20,
      email: "exemplo@exemplo.com"
    },
     {
      nome: "Ítalo", 
      idade: 34,
      email: "italo@italo.com"
  },
  {
      nome:"Matheus",
      idade:17,
      email:"matheus@matheus.com"
     }
    ];

    /*const documento = {
        nome: "Ítalo", 
        idade: 34,
        email: "italo@italo.com"
    };
    const documento ={
        nome:"Matheus",
        idade:17,
        email:"matheus@matheus.com"
       };*/

       /*// Dados para criar os documentos
    const documentos = [
      {
        nome: "Exemplo",
        idade: 25,
        email: "exemplo@example.com"
      },
      {
        nome: "Ítalo", 
        idade: 34,
        email: "italo@italo.com"
      },
      {
        nome: "Matheus",
        idade: 17,
        email: "matheus@matheus.com"
      }
    ];
*/
    // Executar a operação de criação
    const resultado = await collection.insertMany(documento);
    console.log("Documento criado com sucesso:", resultado.insertedId);
  } catch (err) {
    console.log(err);
  } finally {
    cliente.close(); // Fechar a conexão após a conclusão das operações
  }
}

run();
