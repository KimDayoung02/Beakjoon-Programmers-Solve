function solution(nums) {
    let answer=0;
    let sum=0;
    // console.log(nums)
    for(let i=0;i<nums.length-2;i++){
        // console.log("i"+i);
        for(let j=i+1;j<nums.length-1;j++){
            // console.log("j"+j);
            for(let k=j+1;k<nums.length;k++){
                // console.log("k"+k);
                sum=nums[i]+nums[j]+nums[k];
                // console.log("합 : "+sum);
                let fal=0;
                for(let prime=2;prime<sum;prime++){
                    if(sum%prime===0){
                        // console.log("소수 아님");
                        fal++;
                        break;
                    }
                }
                if(fal==0){
                    // console.log("소수");
                    answer++;
                }
                
            }
        }
    }
    console.log(answer);

    return answer;
}