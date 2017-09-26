// import file system - OK
const fs = require('fs');
const rl = require('readline').createInterface({
  input : fs.createReadStream('./inputFile.txt'),
  output: process.stdout, // C++!!!
  terminal: false,
});

const contents = [];

rl.on('line', (line, error) => {
  if (error) return error;
  contents.push(line);
  return contents;
});

setTimeout(() => console.log(contents), 3000);
