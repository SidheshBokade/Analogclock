//formula=> 
//hour = 30 *h+m/2
//minute = 60 *m
//seconds = 60 *s

setInterval(() => {//set interval is used because to print time at particular inetval of time

    d = new Date(); //new date () to get new date for every interval of time
    htime = d.getHours(); //newdate*hours
    mtime = d.getMinutes(); //newdate*minutes
    stime = d.getSeconds(); //mewdate*seconds

    hrotation = 30*htime + mtime/2; //for hour hand
    mrotation = 6*mtime; //for minute hand
    srotation = 6*stime; //for second hand

    hour.style.transform = `rotate(${hrotation}deg)`; //change the hour hand for every 60min
    minute.style.transform = `rotate(${mrotation}deg)`; //change the minute hand for every 60 sec 
    second.style.transform = `rotate(${srotation}deg)`; //change the second ahnd at every 1 sec interval

},1000); //1sec interval