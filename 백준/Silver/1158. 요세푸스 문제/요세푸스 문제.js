const readline=require("readline");
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

let input="";
let arr=[];
rl.on("line", (line)=>{
    input=line;
    arr=input.split(" ");
    rl.close();
}).on("close", ()=>{
    let n=Number(arr[0]);
    let k=Number(arr[1]);
    let answer=[];
    let person=Array(n).fill().map((item,i)=>i+1);
 
    let i=k-1;
    while(person!=false){
   
        if(i>=person.length){
            i=i-person.length;
            continue;
        }
       
        answer.push(person.splice(i,1));
        i=i+k-1; 
        
    }

    console.log(`<${answer.join(", ")}>`);

})
