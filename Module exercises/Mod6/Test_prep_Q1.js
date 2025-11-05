//let nmber,idv,idv2,count=0;
function numberGame(limit,divsor1,divisor2) {
    let count=0;
    if (limit<=0) {
        alert("Limit must be a positive interger that is greater than 0");
        limit=Number(prompt("Enter limit:"));
        
    };
    if (divsor1<=1 ) {
         alert("Divisor 1 must be a interger that is greater than 1");
        divsor1=Number(prompt("Enter value 1:"));
        
        
    };
    if (divisor2<=1) {
        alert("Divisor 2 must be a interger that is greater than 1");
        divisor2=Number(prompt("Enter value 2:"));
        
    };
    if (Number.isNaN(limit)|| Number.isNaN(divsor1)|| Number.isNaN(divisor2)) {
        alert("Invalid value");
       
    };
    for (let i = 1; i < limit; i++) {
        if (i%divsor1==0) {
            console.log("Alpha");
            
        };
        if (i%divisor2==0) {
            console.log("Beta");
            
        };
        if (i%divsor1==0 && i%divisor2==0) {
            count++;
            console.log("AlphaBeta");
            
        }
        if (i%divsor1!=0 && i%divisor2!=0) {
            console.log(i);
            
        };
        
        
    };
    console.log("The amount of numbers that were alphabeta was:",count);
    return count;

    
};

numberGame(Number(prompt("Enter a limit:")),Number(prompt("Enter divisor 1:")),Number(prompt("Enter divisor 2:")));





