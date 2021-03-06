const express = require("express");
const cors = require("cors");
const cohorts = require("./cohorts");
const PORT = process.env.PORT || 3000;
const app = express();

app.get("/", (req, res) => {
  res.json(cohorts);
});

app.get("/:id", (req, res) => {
  let record = findById(cohorts.data, req.params.id);
  if (!record) {
    res.status(404).json({
      error: {
        message: "Record not found"
      }
    });
  } else {
    res.json(record);
  }
});
app.listen(PORT);

function findById(data, id) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].id == id) {
      return data[i];
    }
  }
  return null;
}
