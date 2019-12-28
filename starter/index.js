const fs= require('fs');
const textin = fs.readFileSync( './txt/input.txt','utf-8');
console.log(textin);

 const textout= `This is what we know about the avocado:${textIn}.\nCreated on ${Date.now()}`;
 fs.writeFileSync('./txt/output.txt','utf-8',textout);
 console.log("file Written!");
  
