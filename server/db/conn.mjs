import { MongoClient } from "mongodb";

const connectionString = "mongodb+srv://st10084599:Password123@cluster0.lcvcvkx.mongodb.net/";

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
  console.log("Successfully connected to Db")
} catch(e) {
  console.error(e);
}



  let db = conn.db("apds");



  export default db;