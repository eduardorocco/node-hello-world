console.log('Hello Boolean');

// console.log(process);

console.log(process.argv);

const params = process.argv.slice(2)

console.log(params);

console.log(`Hello ${params}`);