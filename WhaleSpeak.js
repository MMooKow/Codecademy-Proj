const input = "turpentine and turtles";
const vowels = ['a','e','i','o','u'];
let resultArray = [];
for (let i = 0; i < input.length; i++){
  for (let j = 0; j < vowels.length; j++){
       if (vowels[j] === input[i]){
           resultArray += input[i];
         if (vowels[j] === 'e' || vowels[j] === 'u'){
           resultArray += input[i];
         }
       }
}
}
console.log(resultArray.toUpperCase());