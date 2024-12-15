const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const port = 3001;
const routes = require("./routes");

// Load environment variables
const mongoUsername = process.env.MONGO_USERNAME;
const mongoPassword = process.env.MONGO_PASSWORD;
const mongoHost = "mongo"; // Assuming your MongoDB service is named 'mongo'
const mongoPort = 27017;
const mongoDbName = "todos"; // Your database name
 
const mongoConnectionString = `mongodb://${mongoUsername}:${mongoPassword}@${mongoHost}:${mongoPort}/${mongoDbName}`;

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://momgoUser:mongoPassword@mongo:27017/mydatabase", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use("/api", routes);

  app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
  });
}
