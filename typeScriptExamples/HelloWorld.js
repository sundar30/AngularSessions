var Multiple = /** @class */ (function () {
    function Multiple() {
    }
    Multiple.prototype.add = function (firstNumber, secondNumber) {
        return firstNumber + secondNumber;
    };
    Multiple.prototype.subtract = function (firstNumber, secondNumber) {
        return firstNumber - secondNumber;
    };
    Multiple.prototype.multiple = function (firstNumber, secondNumber) {
        return firstNumber * secondNumber;
    };
    Multiple.prototype.divide = function (firstNumber, secondNumber) {
        return firstNumber / secondNumber;
    };
    Multiple.prototype.calculation = function (firstNumber, secondNumber, operator) {
        if (operator == "+") {
            this.result = this.add(firstNumber, secondNumber);
            console.log("Your Addition result is (" + firstNumber + operator + secondNumber + ") : " + this.result);
        }
        else if (operator == "-") {
            this.result = this.subtract(firstNumber, secondNumber);
            console.log("Your subtraction result is (" + firstNumber + operator + secondNumber + ") : " + this.result);
        }
        else if (operator == "*") {
            this.result = this.multiple(firstNumber, secondNumber);
            console.log("Your multiplication result is (" + firstNumber + operator + secondNumber + ") : " + this.result);
        }
        else if (operator == "/") {
            this.result = this.divide(firstNumber, secondNumber);
            console.log("Your divition result is (" + firstNumber + operator + secondNumber + ") : " + this.result);
        }
        else {
            console.log("Invalid operation. Please try again.....");
        }
    };
    return Multiple;
}());
var addop = new Multiple();
addop.calculation(10, 20, '+');
addop.calculation(10, 20, '-');
addop.calculation(50, 20, '*');
addop.calculation(10, 20, '/');
addop.calculation(10, 20, '&');
