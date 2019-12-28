const fs= require('fs');

//Blocking synchronous  way 
//const textin = fs.readFileSync( './txt/input.txt','utf8');
//console.log(textin);

 //const textout= `This is what we know about the avocado:${textin}`;
 //fs.writeFileSync('./txt/output.txt',textout);
 //console.log("file Written!");
  
 // Non-Blocking Asynchronous way.

fs.readFile('.txt/start.txt','utf-8', (err,data)=>{
     console.log(data);

}); 
console.log('will read data');

