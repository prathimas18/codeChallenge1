"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getOddNumbers = /** @class */ (function () {
    function getOddNumbers(resultArr, counter) {
        this.resultArr = resultArr;
        this.counter = counter;
    }
    getOddNumbers.prototype.execute = function (inputArr) {
        // return resultArr if input array has no numbers or input array length is reached
        if ((inputArr.length === 0) || (this.counter >= inputArr.length)) {
            return this.resultArr;
        }
        else {
            if (inputArr[this.counter] % 2 !== 0) {
                this.resultArr.push(inputArr[this.counter]); //push only odd values
            }
            this.counter = this.counter + 1; //increment counter 
            return (this.execute(inputArr));
        }
    };
    return getOddNumbers;
}());
var inputA = new getOddNumbers([], 0);
var result = inputA.execute([1, 4, 6, 7, 9, 12, 3]);
console.log(result);
