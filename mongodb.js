const { MongoClient, ObjectID } = require("mongodb");

const connectionUrl = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionUrl,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database");
    }
    const db = client.db(databaseName);

    db.collection("tasks").findOne(
      { _id: ObjectID("602036a28991a52488a96260") },
      (error, tasks) => {
        if (error) {
          return console.log(error);
        }
        console.log(tasks);
      }
    );

    db.collection("tasks")
      .deleteOne({
          description: "Learn React"
      })
      .then((res) => console.log(res))
      .catch((err) => console.log("Error", error));
  }
);
