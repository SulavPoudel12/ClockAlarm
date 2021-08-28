setInterval(() => {
    d = new Date()
    hr = d.getHours()
    mi = d.getMinutes()
    se = d.getSeconds()
    mils = d.getMilliseconds()

    hrot = hr*30 + mi/2 
    mrot = mi*6 + se/10
    srot = se*6 + mils/(500/3)
    

    hour.style.transform = `rotate(${hrot}deg)`
    min.style.transform = `rotate(${mrot}deg)`
    sec.style.transform = `rotate(${srot}deg)`
   

    // console.log(d)
    // console.log(hr)
    // console.log(mi)
    // console.log(se)
    // console.log(hrot)
    // console.log(mrot)
    // console.log(srot)

    
}, 1);

// a = new Date()
// mon = a.getMinutes()


// console.log(mon)


function alrm(){
   
setInterval(() => {
    // ta = thr.value

    thr = document.getElementById('hrs')
    //    console.log(thr.value)
        tmin = document.getElementById('mins')
    
        // tv = thr.value
    arot = thr.value*30 + tmin.value/2
    al.style.transform = `rotate(${arot}deg)`
    document.getElementById('sumbit').innerHTML = 'set done'
    
        if (thr.value == hr && tmin.value == mi ) {
           
            console.log(thr.value)
    
            let audio = new Audio('alarm1.mp3')
    
            audio.play()
            
            document.getElementById('sumbit').innerHTML = 'Set Alarm'
            thr.value = ''
            tmin.value = ''
        }

        
    
        else{
            document.getElementById('sumbit').innerHTML = 'Waiting'
        }
    
    
    
    
    
    }
    
, 1);
}


    // arot = thr.value*30 + tmi.value/2


