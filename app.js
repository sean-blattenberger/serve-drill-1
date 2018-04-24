const express = require("express");
const cors = require("cors");
const cohorts = require("./cohorts");

const app = express();

app.get("/", (req, res) => {
  res.json(cohorts);
});

app.get("/:id", (req, res) => {
  let record = findById(cohorts, req.params.id);
  if (!record) {
    res.status = 404;
    res.json({
      error: {
        message: "Record not found"
      }
    });
  }
  res.json(record);
});
app.listen(3000);

function findById(data, id) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].ID == id) {
      return data[i];
    }
  }
  return null;
}
