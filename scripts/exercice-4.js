let i = 1;
function isMultiple(number) {
    let resultMultiple = "";
    if (number % 3 === 0 && number % 5 === 0) {
        resultMultiple = "fizzbuzz";
    }
    else if (number % 3 === 0) {
        resultMultiple = "fizz";
    }
    else if (number % 5 === 0) {
        resultMultiple = "buzz";
    }
    return resultMultiple;
}

function checkForNumbers(i) {
    let div = document.querySelector("div");
    let finalResult = "" + i + ":" + isMultiple(i);
    div.innerHTML = finalResult;
}


function plusOne() {
    i++;
    checkForNumbers(i);
}

function minusOne(){
    i--;
    checkForNumbers(i);
}

document.getElementsByTagName("button")[0].addEventListener("click", minusOne);
document.getElementsByTagName("button")[1].addEventListener("click", plusOne);