function Time () {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if (hours < 10){
        hours = "0" + hours;
    }
    if (minutes < 10){
        minutes = "0" + minutes;
    }
    if (seconds < 10){
        seconds= "0" + seconds;
    }
    let horloge = hours + ":" + minutes + ":" + seconds;
    document.body.innerHTML = "<h1>Horloge</h1> <div id='horloge'>" + horloge +"</div>"
}
Time()
setInterval(Time, 1000);