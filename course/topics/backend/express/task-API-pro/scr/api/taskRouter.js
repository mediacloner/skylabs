const _ = require("lodash")
const bodyParser = require("body-parser")

const { OKConcatResult, NOKConcatResult } = require ('./api-utils.js')

const taskLogic = require('../logic/taskLogic')

const express = require('express')

const {Router} = require ('express')

const {router} = Router ()


// create task

const jsonBodyParser = bodyParser.json();


router.post("/tasks", jsonBodyParser, (req, res) => {
  const { text, username } = req.body;
  task = taskLogic.create(text,username)
    ? res.json(OKConcatResult("Task Add!", task))
    : NOKConcatResult(
        "Somenthing wrong happens!",
        "We can not include this task"
      );
});

//list done
router.get("/tasks/done", (req, res) => {

  res.json(
    OKConcatResult(
      "List of done tasks.", list('done')
      )
    )
  
});



// list todo
router.get("/tasks/todo", (req, res) => {
 
  res.json(
    OKConcatResult(
      "List of to do tasks.",
      list('todo')
    )
  );
});

// Mark done

router.put("/tasks/:id", (req, res) => {


  const idInt = parseInt( req.params.id)

  
  const result = taskLogic (id, "", true)

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

router.delete("/tasks", (req, res) => {
  res.json(
    OKConcatResult(
      "Delete all tasks.", delete ('all')
      )
    )
});

// remove by id

router.delete("/tasks/:id", (req, res) => {

  const idInt = parseInt( req.params.id)

  const result = taskLogic.delete (idInt)
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

router.patch("/tasks/:id", jsonBodyParser, (req, res) => {
  const idInt = parseInt( req.params.id)

  const { text } = req.body;

  const result = taskLogic.update(idInt,text)
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
router.listen(port, () => console.log(`We are listen in the port ${port}`));


module.exports = router