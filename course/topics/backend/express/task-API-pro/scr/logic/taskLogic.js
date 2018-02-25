require("dotenv").config();

const _ = require("lodash");
const bodyParser = require("body-parser");
const dataPath = process.env.DATA_PATH;

const express = require("express");

const app = express();


// create task

const jsonBodyParser = bodyParser.json();


app.post("/api/tasks", jsonBodyParser, (req, res) => {
  const { text, username } = req.body;
  taskData.create(text,username)
    ? res.json(OKConcatResult("Task Add!", task))
    : NOKConcatResult(
        "Somenthing wrong happens!",
        "We can not include this task"
      );
});

//list done
app.get("/api/tasks/done", (req, res) => {

  res.json(
    OKConcatResult(
      "List of done tasks.", list('done')
      )
    )
  
});



// list todo
app.get("/api/tasks/todo", (req, res) => {
 
  res.json(
    OKConcatResult(
      "List of to do tasks.",
      list('todo')
    )
  );
});

// Mark done

app.put("/api/tasks/:id", (req, res) => {


  const idInt = parseInt( req.params.id)

  
  const result = taskData (id, "", true)

  if (result === undefined) {
  res.json(
      NOKConcatResult(
        "Error",
        "The Id not exist"
      ))
 }
 else {
  res.json(
      OKConcatResult(
        "The task is done!.",
        result
      ))
 } 
});

//remove all

app.delete("/api/tasks", (req, res) => {
  res.json(
    OKConcatResult(
      "Delete all tasks.", delete ('all')
      )
    )
});

// remove by id

app.delete("/api/tasks/:id", (req, res) => {

  const idInt = parseInt( req.params.id)

  const result = taskData.delete (idInt)
  if (result === undefined) {
  res.json(
      NOKConcatResult(
        "Error",
        "The Id not exist"
      ))
 }
 else {
  res.json(
      OKConcatResult(
        "Delete task.",
        result
      ))
 }  
});

// update task

app.patch("/api/tasks/:id", jsonBodyParser, (req, res) => {
  const idInt = parseInt( req.params.id)

  const { text } = req.body;

  const result = taskData.update(idInt,text)
  if (result === undefined) {
  res.json(
      NOKConcatResult(
        "Error",
        "The Id not exist"
      ))
 }
 else {
  res.json(
      OKConcatResult(
        "The task is done!.",
        result
      ))
 }
});


const port = process.env.PORT;
app.listen(port, () => console.log(`We are listen in the port ${port}`));
