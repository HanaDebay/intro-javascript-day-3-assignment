/**
 * Why === Strictly Equality Check safe for KGL 
 * we said === checks both the value and data type so,
 * this prevents bug caused by accidentaly type mixing, 
 * wrong type conversion can lead the company to incorrect cost comparisions.
 * this will bring losses, errors and wrong decisions in the company.
 */
// 3. Complex Validation use && operator
let dealerName = "James";
let costUgx = 15000;
let isRecordValid = dealerName.length >= 2 && costUgx >= 10000;
console.log(isRecordValid); //output: true

// 4. Date Logging Date();
let now = new Date("2025/12/03");

let day = now.getDate();
let month = now.getMonth() + 1; //months are 0 based so we have to add +1
let year = now.getFullYear();

console.log(`Sale on: ${day}-${month}-${year}`);//Sale on: 3-12-2025