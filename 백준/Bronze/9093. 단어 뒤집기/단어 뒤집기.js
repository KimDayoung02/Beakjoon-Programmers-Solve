const readline=require("readline");
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

let input;
let arr=[];
let count=0;
rl.on("line", (line)=>{
    if(count==0){
        input=line;
        count++;
    }
    else if(count<input){
        arr.push(line);
        count++;
    }
    else {arr.push(line); 
    rl.close();}
});

rl.on("close", ()=>{
    let array=[];
    let answer=[];
    array=arr.map((item)=>{
        return item.split(" ");
    });

    for(let i=0;i<input;i++){
        for(let k=0;k<array[i].length;k++){
            answer.push((array[i][k]).split("").reverse().join("")+" ");
        }
        answer.push("\n");
    }
    console.log(answer.join(""));

});