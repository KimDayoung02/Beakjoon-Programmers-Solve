const readline=require("readline");
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

let num;
let input="";
let count=0;
rl.on("line", (line)=>{

    if(count===0) {
        num=line;
        count++;
    }
    else if(count==1){
        input=line;
        rl.close();
    }

});

let sort;
let result;
rl.on("close", ()=>{

    sort=input.split(" ");
    sort.sort((a,b)=>{
        return b-a;
    });

    result=sort[0]*sort[sort.length-1];
    console.log(result);
});


