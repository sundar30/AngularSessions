var MathCalculation = /** @class */ (function () {
    function MathCalculation() {
    }
    MathCalculation.prototype.add = function (firstNumber, secondNumber) {
        return firstNumber + secondNumber;
    };
    MathCalculation.prototype.subtract = function (firstNumber, secondNumber) {
        return firstNumber - secondNumber;
    };
    MathCalculation.prototype.multiple = function (firstNumber, secondNumber) {
        return firstNumber * secondNumber;
    };
    MathCalculation.prototype.divide = function (firstNumber, secondNumber) {
        return firstNumber / secondNumber;
    };
    MathCalculation.prototype.calculation = function (firstNumber, secondNumber, operator) {
        if (operator == "+") {
            this.result = this.add(firstNumber, secondNumber);
            // console.log("Your Addition result is ("+firstNumber+operator+secondNumber+") : " + this.result);
            document.write("Your Addition result is (" + firstNumber + operator + secondNumber + ") : " + this.result);
            document.write("</br>");
        }
        else if (operator == "-") {
            this.result = this.subtract(firstNumber, secondNumber);
            document.write("Your subtraction result is (" + firstNumber + operator + secondNumber + ") : " + this.result);
            document.write("</br>");
            //console.log("Your subtraction result is ("+firstNumber+operator+secondNumber+") : " + this.result);
        }
        else if (operator == "*") {
            this.result = this.multiple(firstNumber, secondNumber);
            document.write("Your multiplication result is (" + firstNumber + operator + secondNumber + ") : " + this.result);
            document.write("</br>");
            //console.log("Your multiplication result is ("+firstNumber+operator+secondNumber+") : " + this.result);
        }
        else if (operator == "/") {
            this.result = this.divide(firstNumber, secondNumber);
            document.write("Your divition result is (" + firstNumber + operator + secondNumber + ") : " + this.result);
            document.write("</br>");
            //console.log("Your divition result is ("+firstNumber+operator+secondNumber+") : " + this.result);
        }
        else {
            document.write("Invalid operation. Please try again.....");
            document.write("</br>");
            //console.log("Invalid operation. Please try again.....")
        }
    };
    return MathCalculation;
}());
var mathop = new MathCalculation();
mathop.calculation(10, 20, '+');
mathop.calculation(50, 20, '-');
mathop.calculation(50, 20, '*');
mathop.calculation(10, 20, '/');
mathop.calculation(10, 20, '&');
