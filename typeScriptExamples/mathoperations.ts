
class Multiple{
    public result: number;
    constructor(){

    }
    add(firstNumber: number, secondNumber: number): number{
        return firstNumber + secondNumber;
    }
    subtract(firstNumber: number, secondNumber: number): number{
        return firstNumber - secondNumber;

    }
    multiple(firstNumber: number, secondNumber: number): number{
        return firstNumber * secondNumber;
    }
    divide(firstNumber: number, secondNumber: number): number{
        return firstNumber / secondNumber;
    } 
    
    calculation(firstNumber: number, secondNumber: number, operator:any){
        if(operator == "+"){            
            this.result = this.add(firstNumber,secondNumber);
           // console.log("Your Addition result is ("+firstNumber+operator+secondNumber+") : " + this.result);
           document.write("Your Addition result is ("+firstNumber+operator+secondNumber+") : " + this.result);
           document.write("</br>");
        }else if(operator == "-"){
            this.result = this.subtract(firstNumber,secondNumber);
            document.write("Your subtraction result is ("+firstNumber+operator+secondNumber+") : " + this.result);
            document.write("</br>");
            //console.log("Your subtraction result is ("+firstNumber+operator+secondNumber+") : " + this.result);
        }else if(operator == "*"){
            this.result = this.multiple(firstNumber,secondNumber);
            document.write("Your multiplication result is ("+firstNumber+operator+secondNumber+") : " + this.result);
            document.write("</br>");
            //console.log("Your multiplication result is ("+firstNumber+operator+secondNumber+") : " + this.result);
        }else if(operator == "/"){
            this.result = this.divide(firstNumber,secondNumber);
            document.write("Your divition result is ("+firstNumber+operator+secondNumber+") : " + this.result);
            document.write("</br>");
            //console.log("Your divition result is ("+firstNumber+operator+secondNumber+") : " + this.result);
        }else{
            document.write("Invalid operation. Please try again.....");
            document.write("</br>");
            //console.log("Invalid operation. Please try again.....")
        }
    }  
}

var addop = new Multiple();
addop.calculation(10,20,'+');
addop.calculation(50,20,'-');
addop.calculation(50,20,'*');
addop.calculation(10,20,'/');
addop.calculation(10,20,'&');


