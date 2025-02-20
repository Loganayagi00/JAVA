const op=prompt("Enter operator(either +,-,*or/):");
const num1=parsefloat(prompt('Enter first Number'));
const num2=parsefloat(prompt('Enter Second Number'));
let calc;
if(op=='+'){
  calc=num1+num2;}
  else if(op=='-'){
    calc=num1-num2;
  }
  else if(op=='*'){
    calc=num1*num2;
  }
  else{calc=num1/num2);
  }
  console.log(calc)