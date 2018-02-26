require("dotenv").config();

const _ = require("lodash");
const bodyParser = require("body-parser");
const dataPath = process.env.DATA_PATH;

const express = require("express");

const app = express();

let tasks = [];
let id = 0;

// create task

const jsonBodyParser = bodyParser.json();


app.post("/api/tasks", jsonBodyParser, (req, res) => {
  const { text, username } = req.body;
  id +=1;
  const task = {
    username ,
    id,
    done: false,
    text 
  };

  tasks.push(task)
    ? res.json(OKConcatResult("Task Add!", task))
    : NOKConcatResult(
        "Somenthing wrong happens!",
        "We can not include this task"
      );
});

//list done
app.get("/api/tasks/done", (req, res) => {

  let result=[]
  tasks.forEach(
    ({ username, id, text, done }) => {
      
      if (done) result.push( { username, id, text, done } )
    })

  res.json(
    OKConcatResult(
      "List of done tasks.", result
      )
    )
  
});



// list todo
app.get("/api/tasks/todo", (req, res) => {
  let result=[]
  tasks.forEach(
    ({ username, id, text, done }) => {
      
      if (!done) result.push( { username, id, text, done } )
    })

  res.json(
    OKConcatResult(
      "List of to do tasks.",
      result
    )
  );
});

// Mark done

app.put("/api/tasks/:id", (req, res) => {


  const idInt = parseInt( req.params.id)

  const pos = _.findIndex(tasks, (o) => { return o.id == idInt; });
  const result = tasks[pos]

  if (result === undefined) {
  res.json(
      NOKConcatResult(
        "Error",
        "The Id not exist"
      ))
 }
 else {
  tasks[pos].done = true

  res.json(
      OKConcatResult(
        "The task is done!.",
        result
      ))
 }

  
  
});

//remove all

app.delete("/api/tasks", (req, res) => {
  let result=[]
  tasks.forEach(
    ({ username, id, text, done }) => {
      
     result.push( { username, id, text, done } )
    })


    tasks = []

  res.json(
    OKConcatResult(
      "Delete all tasks.", result
      )
    )
 


});

// remove by id

app.delete("/api/tasks/:id", (req, res) => {

  const idInt = parseInt( req.params.id)

  const pos = _.findIndex(tasks, (o) => { return o.id == idInt; });
  const result = tasks[pos]

  if (result === undefined) {
  res.json(
      NOKConcatResult(
        "Error",
        "The Id not exist"
      ))
 }
 else {
  tasks.splice(pos,1)

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

  const pos = _.findIndex(tasks, (o) => { return o.id == idInt; });
  const result = tasks[pos]

  if (result === undefined) {
  res.json(
      NOKConcatResult(
        "Error",
        "The Id not exist"
      ))
 }
 else {
  tasks[pos].text = text

  res.json(
      OKConcatResult(
        "The task is done!.",
        result
      ))
 }



});

function OKConcatResult(message, data) {
  const res = { status: "OK", message };

  if (data) res.data = data;

  return res;
}

function NOKConcatResult(message, error) {
  const res = { status: "KO", message };

  if (error) res.error = error;

  return res;
}
const port = process.env.PORT;
app.listen(port, () => console.log(`We are listen in the port ${port}`));
