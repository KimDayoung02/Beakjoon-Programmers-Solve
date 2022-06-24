const readline=require("readline");
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});
let input;
let arr=[];
let count=0;

rl.on("line", (line)=>{
    if(count===0){
        input=line;
        count++;
    }
    else if(count<=input){
        arr.push(line);
        count++;
    }
    if(count>input){
        rl.close();
    }

});

rl.on("close", ()=>{
    let stack=[];
    let answer=[];
    let result=arr.map((item)=>{
        return item.split(" ");
    })
    for(let i=0;i<input;i++){
        if(result[i][0]=="push"){
            stack.push(result[i][1]);
        }
        else if(result[i][0]=="top"){
            if(stack==false){
                answer.push("-1")
            }
            else{
                answer.push(stack[stack.length-1]);
            }
        }
        else if(result[i][0]=="pop"){
            if(stack==false){
                answer.push("-1");
            }
            else{
            let pop="";
            pop=stack.pop();

            answer.push(pop);
            }
        }
        else if(result[i][0]=="size"){
            answer.push(String(stack.length));
        }
        else if(result[i][0]=="empty"){
            if(stack==false){
                answer.push("1")
            }else{
                answer.push("0");
            }
        }
    }
    console.log(answer.join("\n"));

});