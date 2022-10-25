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
    let queue=[];
    let answer=[];
    let result=arr.map((item)=>{
        return item.split(" ");
    })

    for(let i=0;i<input;i++){
        if(result[i][0]=="push"){
            queue.push(result[i][1]);
        }

        else if(result[i][0]=="front"){
            if(queue==false){
                answer.push("-1")
            }
            else{
                answer.push(queue[0]);
  
            }
        }
        else if(result[i][0]=="back"){
            if(queue==false){
                answer.push("-1")
            }
            else{
                answer.push(queue[queue.length-1]);
            }
        }
        else if(result[i][0]=="pop"){
            if(queue==false){
                answer.push("-1");
            }
            else{
            let pop="";
            pop=queue.shift();

            answer.push(pop);
            }
        }
        else if(result[i][0]=="size"){
            answer.push(String(queue.length));
        }
        else if(result[i][0]=="empty"){
            if(queue==false){
                answer.push("1")
            }else{
                answer.push("0");
            }
        }
    }
    console.log(answer.join("\n"));

});