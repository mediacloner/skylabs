require("dotenv").config();
const { MongoClient, ObjectId } = require("mongodb");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

MongoClient.connect("mongodb://localhost:27017", (err, conn) => {
  if (err) throw err;
  const dbConn = conn.db("signinapp");
  app.set("view engine", "pug");
  app.get("/", (req, res) => {
    debugger;
    dbConn
      .collection("users")
      .find()
      .toArray((err, data) => {
        if (err) throw err;
        res.render("index", { data });
      });
  });
  const formBodyParser = bodyParser.urlencoded({ extended: false });

  app.get("/delete", (req, res) => {
    dbConn
      .collection("users")
      .drop()
      .then(res.redirect("/"));
  });
  
  
  app.get("/delete/:id", (req, res) => {
    const { id } = req.params;
    dbConn
      .collection("users")
      .remove({ _id: ObjectId(id) })
      .then(res.redirect("/"));
  })

  app.get ("/form/:idSelect", (req, res)=>{
    const { idSelect } = req.params;
    dbConn
    .collection("users")
    .find()
    .toArray((err, data) => {
      if (err) throw err;
      res.render("index", { data, idSelect });
    });

  })

  app.post("/submit", formBodyParser, (req, res) => {
    dbConn.collection("users").insertOne(req.body);
    res.redirect("/");
  });
  app.post("/update", formBodyParser, (req, res) => {
    debugger;
    console.log (req.body);
    dbConn.collection("users").update({ _id: ObjectId(id) },req.body);
    res.redirect("/");
  });

  const port = process.env.PORT;
  app.listen(port, () => console.log(`server runnning on port ${port}`));
  process.on("SIGINT", () => {
    console.log("stopping server");
    conn.close();
    process.exit();
  });
});
