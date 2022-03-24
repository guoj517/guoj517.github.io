

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  
    return i;
}

const newInterwal = setInterval(function(){
    startTime()
}, 1000)