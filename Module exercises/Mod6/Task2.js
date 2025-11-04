let numbers = [10, 40, 0, 20, 50];
let answer;

function div() {
 for (let i = 0; i < numbers.length; i++) {
    try {
         answer= 1000/numbers[i];
        if (numbers[i]==0) {
            throw new RangeError("Can't devide by zero"); 
        };
     console.log(answer);
    
    } catch (error) {
        console.log(error)
    }
 
};
};
div();