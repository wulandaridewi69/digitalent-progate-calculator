class Calculator {
    constructor(result, logic, point) {
        this.result = result; //awalnya ""
        this.logic = logic;
        this.point = point;
        this.last = this.result.length-1
    }

    // mark
    clear = () => {
        this.result = "0";
        this.viewResult();
        this.result = "";
    }
    del = () => {
        this.result = this.result.slice(0, -1);
        if (this.result === "") {
            this.result = "0";
            this.viewResult();
            this.result = "";
        } else {
            this.viewResult();
        }
    }
    percent = () => {
        this.result += "%";
        this.viewResult();
    }
    dot = () => {
        this.result += ".";
        this.viewResult();
    }
    divide = () => {
        this.result += "/";
        this.viewResult();
    }
    multi = () => {
        this.result += "*";
        this.viewResult();
    }
    min = () => {
        this.result += "-";
        this.viewResult();
    }
    plus = () => {
        this.result += "+";
        this.viewResult();
    }
    equal = () => {
        this.result = eval(this.result);
        this.viewResult();
    }
    
    //number
    zero = () => {
        this.result += "0";
        this.viewResult();    
    }
    one = () => {
        this.result += "1";
        this.viewResult();
    }
    two = () => {
        this.result += "2";
        this.viewResult();
    }
    three = () => {
        this.result += "3";
        this.viewResult();
    }
    four = () => {
        this.result += "4";
        this.viewResult();
    }
    five = () => {
        this.result += "5";
        this.viewResult();
    }
    six = () => {
        this.result += "6";
        this.viewResult();
    }
    seven = () => {
        this.result += "7";
        this.viewResult();
    }
    eight = () => {
        this.result += "8";
        this.viewResult();
    }
    nine = () => {
        this.result += "9";
        this.viewResult();
    }

    viewResult = () => {
        document.getElementById("result").innerHTML = this.result;
    }
}

const mark_logic = ["+","/","*"];
const mark_point = ["%","."];
const calculator = new Calculator ( "", mark_logic, mark_point );
