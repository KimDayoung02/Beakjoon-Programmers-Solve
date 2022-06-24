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
    let deque=[];
    let answer=[];
    let result=arr.map((item)=>{
        return item.split(" ");
    })

    for(let i=0;i<input;i++){
        if(result[i][0]=="push_back"){
            deque.push(result[i][1]);
        }

        else if(result[i][0]=="push_front"){
            deque.unshift(result[i][1]);
        }

        else if(result[i][0]=="front"){
            if(deque==false){
                answer.push("-1")
            }
            else{
                answer.push(deque[0]);
  
            }
        }
        else if(result[i][0]=="back"){
            if(deque==false){
                answer.push("-1")
            }
            else{
                answer.push(deque[deque.length-1]);
            }
        }
        else if(result[i][0]=="pop_front"){
            if(deque==false){
                answer.push("-1");
            }
            else{
            let pop="";
            pop=deque.shift();

            answer.push(pop);
            }
        }
        else if(result[i][0]=="pop_back"){
            if(deque==false){
                answer.push("-1");
            }
            else{
            let pop="";
            pop=deque.pop();

            answer.push(pop);
            }
        }
        else if(result[i][0]=="size"){
            answer.push(String(deque.length));
        }
        else if(result[i][0]=="empty"){
            if(deque==false){
                answer.push("1")
            }else{
                answer.push("0");
            }
        }
    }
    console.log(answer.join("\n"));

});