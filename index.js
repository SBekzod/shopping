// CORE MODULE
const fs = require("fs");

fs.readFile("sample.txt", "utf8", function (err, data) {
  if (err) throw err;
  console.log("fayl malumoti:", data);
});

// EXTERNAL MODULE

// FILE MODULE

