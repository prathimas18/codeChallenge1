"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getOddNumbersOfArray = /** @class */ (function () {
    function getOddNumbersOfArray(resultArr, counter) {
        this.resultArr = resultArr;
        this.counter = counter;
    }
    getOddNumbersOfArray.prototype.execute = function (inputArr) {
        if ((inputArr.length === 0) || (this.counter >= inputArr.length)) {
            return this.resultArr;
        }
        else {
            if (inputArr[this.counter] % 2 !== 0) {
                this.resultArr.push(inputArr[this.counter]);
            }
            this.counter = this.counter + 1;
            return (this.execute(inputArr));
        }
    };
    return getOddNumbersOfArray;
}());
var inputA = new getOddNumbersOfArray([], 0);
var result = inputA.execute([4, 6, 7, 9, 12, 3, 999]);
console.log(result);
//# sourceMappingURL=main.js.map