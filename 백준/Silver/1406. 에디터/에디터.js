const readline=require("readline");
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

let string;
let count=0;
let repeat;
let editer=[];
rl.on("line", (line)=>{

    if(count==0){
        string=line;
        count++;
    }
    else if(count==1){
        repeat=Number(line);
        count++;
    }
    else if(count<=repeat){
        editer.push(line);
        count++;
    }
    else{
        editer.push(line);
        rl.close();
    }

});

rl.on("close", ()=>{
    let lstring=string.split("");
    let rstring=[];
 

    for(let i=0;i<repeat;i++){
        if(editer[i]=="L"){
            if(lstring.length==0) continue;
            else{
                rstring.push(lstring.pop());
            }
        }
        else if(editer[i]=="D"){
            if(rstring.length==0) continue;
            else{
                lstring.push(rstring.pop());
            }
        }
        else if(editer[i]=="B"){
            if(lstring.length==0) continue;
            else{
                lstring.pop();
            }
        }
        else if(editer[i].includes("P")){
            pstring=editer[i].split(" ");
            lstring.push(pstring[1]);
        }

    }
    rstring=rstring.reverse()
    console.log(lstring.join("")+rstring.join(""));

});