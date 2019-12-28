const fs= require('fs');
const textin = fs.readFileSync( './txt/input.txt','utf8');
console.log(textin);

 const textout= `This is what we know about the avocado:${textin}`;
 fs.writeFileSync('./txt/output.txt',textout);
 console.log("file Written!");
  
