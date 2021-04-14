import mongodb from "mongodb";

const mongoClient = mongodb.MongoClient;
const connectionUrl = "mongodb://127.0.0.1:27017";
const dbName = "MernEcommerce";

mongoClient.connect(
  connectionUrl,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) {
      return console.log("Db Error");
    }
    const db = client.db(dbName);
    console.log("Db up and Running");
  }
);
