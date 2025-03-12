//sorting numbers in array
const myArray = [1,9,5,7,2,0,8,3,4,6]
//to sort the numbers in ascending order
myArray.sort((a, b) => a - b);
//to sort the numbers in descending ordder
myArray.sort((a,b) => b-a);


//loop staircase
function staircase(num){
    for(let i = 1; ;){
        while(i <= num){
            let step = "#".repeat(i)
            console.log(step);
            i++;
        }
        return num;
    }
}
staircase(3)