const { off } = require("process");
const readline=require("readline");
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

let input;
let count=0;
let arr=[];
rl.on("line", (line)=>{
    if(count==0){
        input=line;
        count++;
    }
    else if(count<input){
        arr.push(line);
        count++;
    }
    else{
        arr.push(line);
        rl.close();
    }
});
rl.on("close", ()=>{
    let array=[];
    let answer=[];

    array=arr.map((item)=>{
        return item.split("");
    });

    for(let i=0;i<input;i++){
        let stack=[];
        let fal=0;
        for(let k=0;k<array[i].length;k++){
            if(array[i][k]==='('){
                stack.push("(");
            }
            else if(array[i][k]==')'){
                if(stack==false){
                    fal=1;
                    break;
                }
                stack.pop();
            }
        }
        if((stack!=false)||(fal==1)){
            answer.push("NO");
        }
        else{
            answer.push("YES");
        }
    }
    console.log(answer.join("\n"));
});