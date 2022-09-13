const myStopWatch = () => {
    myMillisec.value++
    let setTime = setTimeout("myStopWatch()", '10')
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

const stopButton = () => {
    location.reload()
}