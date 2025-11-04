function div(num1,num2) {
    if (num2<=0) {
    throw new RangeError("Can't devide by zero");
    
};
    return num1/num2;
};

console.log(div(50,10));

