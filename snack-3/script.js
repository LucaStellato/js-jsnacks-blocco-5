const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]
const numberArray=[]
/*for(let  i=0 ; i<numbers.length; i++){
   number.push(numbers[i]+1)
   
}
console.log(number)*/


numbers.forEach(number => {
    numberArray.push(number+1)
    
});
console.log(numberArray)