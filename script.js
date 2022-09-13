const myStopWatch = () => {
    myMillisec.value++
    setTime = setTimeout("myStopWatch()", '10')
    if(myMillisec.value == 100){
        myMillisec.value = 0;
        mySeconds.value++;
    }
    else if(mySeconds.value == 60){
        mySeconds.value = 0;
        myMinutes.value++;
    }
    else if(myMinutes.value == 60){
        myMinutes.value = 0;
        myHours.value++;
    }
}

const pauseButton = () => {
    clearTimeout(setTime)
}

const stopButton = () => {
    // location.reload()
    clearInterval(setTime);
    myMillisec.value = 00;
    mySeconds.value = 00;
    myMinutes.value = 00;
    myHours.value = 00
}