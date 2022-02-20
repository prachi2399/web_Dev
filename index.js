let cmdLine = process.argv;
let j = cmdLine[2];
let h = cmdLine[3];
console.log(j);
console.log("j is "+j);
j = j+30;
console.log(j);

let k = parseInt(cmdLine[4]);
k = k+30;
console.log(k);

if(n%2==0){
    console.log(n+"is even");
}
else{
    console.log(n+"is odd");
}

for(let g = 1;g<=k;g++){
    console.log(g);
}
