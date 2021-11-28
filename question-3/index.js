// 3. Let's say you have a file with a following structure:
// "id,name,value
// 1,Dan,150
// 2,Peter,300
// 3,Mark,400
// 4,Victor,600"

// Write a function in node.js that reads this file
// and returns the number, which is a sum of all "value"
//  numbers from the file;

const fs = require("fs");
const readline = require("readline");

async function sumValueFromFile(path) {
  let sum = 0;
  const fileStream = fs.createReadStream(path);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  for await (const line of rl) {
    const arr = line.split(",");
    if (arr[2] && parseFloat(arr[2])) sum += parseFloat(arr[2]);
  }
  console.log(`Sum of all values: ${sum}`);
  return sum;
}


sumValueFromFile("data.txt");
