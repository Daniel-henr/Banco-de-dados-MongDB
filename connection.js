const { MongoClient } = require('mongodb');
//Aqui se você encontrar um erro usando o o nome localhost, troque pelo IP da sua máquina
//Para Encontrar o IP da sua máquina ou a porta que está rodando o Mongo use o comando: db.runCommand({whatsmyuri: 1})  
const uri = 'mongodb://127.0.0.1:27017/testemongo';

const cliente = new MongoClient(uri)

async function run(){
    try {
        await cliente.connect()
        console.log("Conectado")
    } catch (err) {
        console.log(err)
    }
}


run()

module.export= cliente