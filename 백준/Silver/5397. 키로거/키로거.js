const readline=require("readline")
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

let casenum;
let count=0;
let password=[];
rl.on("line", (line)=>{
    if(count==0){
        casenum=line;
        count++;
    }
    else if(count<casenum){
        password.push(line);
        count++;
    }
    else{
        password.push(line);
        rl.close();
    }
});

rl.on("close", ()=>{
    let passwordCase
    let lCase
    let rCase
    let repeat;
    for(let i=0;i<password.length;i++){
        passwordCase=password[i].split("");
        lCase=[];
        rCase=[];
        repeat=passwordCase.length;
        for(let j=0;j<repeat;j++){
            if(passwordCase[j]=="<"){
                if(lCase.length==0) continue;
                else{
                    rCase.push(lCase.pop());
                }
            }
            else if(passwordCase[j]==">"){
                if(rCase.length==0) continue;
                else{
                    lCase.push(rCase.pop())
                }
            }
            else if(passwordCase[j]=="-"){
                if(lCase.length==0) continue;
                else{
                    lCase.pop();
                }
            }
            else{
                lCase.push(passwordCase[j]);
            }
        }
        console.log(lCase.join("")+rCase.reverse().join(""))
    }
    
});