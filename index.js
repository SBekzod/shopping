// CORE MODULE
const fs = require("fs");

fs.readFile("sample.txt", "utf8", function (err, data) {
  if (err) throw err;
  console.log("fayl malumoti:", data);
});

// EXTERNAL MODULE
const moment = require("moment");
const time = moment().format("YYYY-MM-DD HH:mm");
console.log(`Time is now: ${time}`);

// FILE MODULE
