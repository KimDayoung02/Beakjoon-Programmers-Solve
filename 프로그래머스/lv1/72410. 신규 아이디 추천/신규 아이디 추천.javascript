function solution(new_id) {

    //1단계
    var answer = '';
    new_id=new_id.toLowerCase();

    //2단계
    let id_arr=[];
    id_arr=new_id.split("");
    new_id="";
    for(let i=0;i<id_arr.length;i++){
        if((id_arr[i].charCodeAt(0)>96&&id_arr[i].charCodeAt(0)<123)||
        (id_arr[i].charCodeAt(0)>47&&id_arr[i].charCodeAt(0)<58)||
        (id_arr[i].charCodeAt(0)==95)||
        (id_arr[i].charCodeAt(0)==45)||
        (id_arr[i].charCodeAt(0)==46)){
            new_id=new_id+id_arr[i];
        }

    }

    //3단계
    id_arr=new_id.split("");
    for(let i=0;i<id_arr.length;i++){
        if(id_arr[i]=="."&&id_arr[i+1]=="."){
            id_arr.splice(i,1);
            i--;
        }
    }
    new_id="";
    new_id=id_arr.join("");   
    
    //4단계
    id_arr=new_id.split("");
    if(id_arr[0]=="."){
        id_arr.splice(0,1);
    }

    if(id_arr[id_arr.length-1]=="."){

        id_arr.splice(id_arr.length-1, 1);
    }
    new_id=id_arr.join("");


    //5단계

    if(new_id==""){
        new_id="a";
    }

    //6단계

    id_arr=new_id.split("");
    if(new_id.length>=16){
        id_arr.splice(15);
    }
    if(id_arr[id_arr.length-1]=="."){
        id_arr.splice(id_arr.length-1,1);
    }
    new_id=id_arr.join("");



    //7단계
    id_arr=new_id.split("");
    if(new_id.length<=2){
        for(let i=new_id.length;i<3;i++){
            new_id+=id_arr[id_arr.length-1];
        }
    }

    return new_id;
}