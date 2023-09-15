import { MongoClient } from "mongodb";
import dotnev from "dotenv"


//const connectionString = "mongodb+srv://st10084599:Password123@cluster0.lcvcvkx.mongodb.net/";
//const client = new MongoClient(connectionString);

const variable = process.env.MONGO_CONN_STRING
console.log(variable);

const client = new MongoClient(variable);

let conn;
try {
  conn = await client.connect();
  console.log("Successfully connected to Db")
} catch(e) {
  console.error(e);
}



  let db = conn.db("apds");



  export default db;