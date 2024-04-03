
function reverseNumber(num){
   let ans=0;
   while(num>0){
    let rem=num%10;
    ans=ans*10+rem;
    num=Math.floor(num/10);
    
   }
   console.log(ans);
   return ans;
}
reverseNumber(1234);