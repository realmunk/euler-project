const fs = require("fs");
const path = require("path");

function readFile(input, callback) {
  return fs.readFile(
    path.resolve(process.cwd(), input),
    "utf8",
    (err, data) => {
      if (err) {
        throw new Error(err);
      }

      return callback(data);
    }
  );
}

module.exports = {
  readFile
};
