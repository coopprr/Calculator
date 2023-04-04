let prevVal = "";
let newVal = "";
let resultVal = prevVal + newVal;
let mathOperator = "";

function numButPress (num) {
    if (resultVal){
        newVal = num;
        resultVal = "";
    } else {
        newVal += num;
    }
    document.getElementById("entry").value = newVal;
}

function mathButPress (operator) {
    if (!resultVal){
        prevVal = newVal;
    } else {
        prevVal = resultVal;
    }

    newVal = "";
    mathOperator = operator;
    resultVal = "";
    document.getElementById("entry").value = "";
}

function equalButPress (num) {
    prevVal = parseFloat(prevVal);
    newVal = parseFloat(newVal);

    switch (mathOperator) {
        case "/": resultVal = prevVal / newVal;
            break;
        case "*": resultVal = prevVal * newVal;
            break;
        case "-": resultVal = prevVal - newVal;
            break;
        case "+": resultVal = prevVal + newVal;
            break;
        default: resultVal = newVal;
    }
    prevVal = resultVal;
    document.getElementById("entry").value = resultVal;
}

function clearButPress () {
    prevVal = "";
    newVal = "";
    resultVal = "";
    mathOperator = "";
    document.getElementById("entry").value="0";
}