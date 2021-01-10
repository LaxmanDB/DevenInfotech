const express = require("express");
const router = express.Router();
const { Employee } = require("../model/employee");

router.get("/view", (req, res) => {
  Employee.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});
router.post("/save", (req, res) => {
  const { firstName, lastName, mobile, email, states, city } = req.body;
  const employee = new Employee({
    firstName,
    lastName,
    mobile,
    email,
    states,
    city,
  });
  employee
    .save()
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});
router.delete("/delete", (req, res) => {
  Employee.findByIdAndDelete(req.body.id) //"id":"5fc3799537420131781fe47d"
    .then((data) => {
      console.log(data);
      res.send("deleted");
    })
    .catch((err) => {
      console.log(err);
    });
});
router.put("/update", (req, res) => {
  const { firstName, lastName, mobile, email, states, city } = req.body;
  Employee.findByIdAndUpdate(req.body.id, {
    firstName,
    lastName,
    mobile,
    email,
    states,
    city,
  })
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
