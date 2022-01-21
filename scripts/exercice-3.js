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

function checkForNumbers() {
    let div = document.querySelector("div");
    for (i=1; i<101; i++){
            let finalResult = "" + i + ":" + isMultiple(i);
            div.innerHTML += finalResult + "<br>";
    }
}

checkForNumbers();