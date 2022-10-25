function solution(numbers) {
    let stringarr=[];

    for(let i=0;i<numbers.length;i++){
        stringarr.push(String(numbers[i]));   
    }
    stringarr.sort((a,b) => {return (b+a)-(a+b)})
    if(stringarr[0]==="0"){
        return '0'
    }
    return stringarr.join('');
}