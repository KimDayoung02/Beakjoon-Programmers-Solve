const readline=require("readline");
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});
let input;
rl.on("line", (line)=>{
    input=line;
    rl.close();
});

let string="";

rl.on("close", ()=>{
    for(let i=97;i<123;i++){
        string=string+input.indexOf(String.fromCharCode(i))+" "
    }
    console.log(string);
});