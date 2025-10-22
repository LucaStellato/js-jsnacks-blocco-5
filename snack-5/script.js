const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]
const evenNum=[]
for(let i=0; i<nums.length; i++){
    const num=nums[i]
    if(num%2==0){
        evenNum.push(num)
    }
}
console.log(evenNum)