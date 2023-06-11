class Calculator{
    public firstNumber!:number;
    public secondNumber!:number;

    constructor (num1:number ,num2:number){
    this.firstNumber=num1;
    this.secondNumber=num2;
    }
    add():number{
      let sum =this.firstNumber+this.secondNumber;
      return sum;
    }
    subtraction(){
        let sub =this.firstNumber-this.secondNumber;
        if(sub>0)
        {
            return sub; 
        }
        else {
             console.log("error 404");
             
        }
       
    }
    multiplication(){
        let multiplication =this.firstNumber*this.secondNumber;
        return multiplication;  
    }
    divid(){
        let divid =this.firstNumber/this.secondNumber;
        return divid;    
    }

}

let calculate =new Calculator(4,5);

console.log(` Sum Of Two Number  ${calculate.add()}`);
console.log(` Subtraction of two number ${calculate.subtraction()}`);
console.log(`Multiplication of two number ${calculate.multiplication()}`);
console.log(` Division of two number ${calculate.divid()}`);


