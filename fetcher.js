const request = require('request');
const fs = require('fs');

const site = process.argv.slice(2, 3).toString();
const fileName = process.argv.slice(3, 4).toString();

request(site, (error, response, body) => {
  fs.writeFile(fileName, body, function (err) {
    if (err) {
      return console.log(err);
    }
    let stats = fs.statSync(fileName);
    let fileSizeInBytes = stats.size;
    console.log(`Downloaded and saved ${fileSizeInBytes} bytes to ${fileName}`);
  });
});
