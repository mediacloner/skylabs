require("dotenv").config();

const express = require("express");

const bodyParser = require("body-parser");

const app = express();

const users = [];

app.get("/api/users", (req, res) =>
  res.json(
    ok(
      "Users listing succeeded.",
      users.map(({ username, password }) => ({ username, password }))
    )
  )
);

const jsonBodyParser = bodyParser.json();

app.post("/api/users", jsonBodyParser, (req, res) => {
  const { username, password } = req.body;

  if (!username || !password)
    return res.json(
      ko("User registration failed.", "Invalid username and/or password.")
    );

  const alreadyExists = users.some(user => user.username === username);

  if (alreadyExists)
    return res.json(
      ko("User registration failed.", "Username already exists.")
    );

  users.push({ username, password });

  res.json(ok("User registration succeeded."));
});

app.put("/api/users", jsonBodyParser, (req, res) => {
  const { username, password } = req.body;

  function changePass(obj, user, pass) {
    for (var i in obj) {
      if (obj[i].username == user) {
        /// user
        obj[i].password = pass;
        break; //Stop this loop, we found it!
      }
    }
  }

  if (!username || !password)
    return res.json(
      ko("User update action failed.", "Invalid username and/or password.")
    );

  const alreadyExists = users.some(user => user.username === username);

  changePass(users, username, password);

  res.json(ok("User password update succeeded."));
});

app.delete("/api/users", jsonBodyParser, (req, res) => {
  const { username, password } = req.body;

  if (!username || !password)
    return res.json(
      ko("User delete action failed.", "Invalid username and/or password.")
    );

  const alreadyExists = users.some(user => user.username === username);

  //user.forEach ((_user, i )) users.splice(i, 1)
  users.pop({ username, password });

  res.json(ok("User deleted succeeded."));
});

function ok(message, data) {
  const res = { status: "OK", message };

  if (data) res.data = data;

  return res;
}

function ko(message, error) {
  const res = { status: "KO", message };

  if (error) res.error = error;

  return res;
}

const port = process.env.PORT;

app.listen(port, () => console.log(`Users API running on port ${port}`));
