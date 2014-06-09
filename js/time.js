
function convertTimeToDay(epochTime) {              
    var d = new Date(epochTime * 1000);     
    var dateString = d.getFullYear() + "-" + ('0' + (d.getMonth()+parseInt(1))).slice(-2) + "-" + ('0' + d.getDate()).slice(-2) +
                     " " + ('0' + d.getHours()).slice(-2) + ":" + ('0' + d.getMinutes()).slice(-2) + ":" + ('0' + d.getSeconds()).slice(-2) ;
    return dateString;
}

console.log(convertTimeToDay(1391230800));

function secondsToTime(s) {
    var days=Math.floor(s / 86400);
    var hours = Math.floor((s - (days * 86400 ))/3600)
    var minutes = Math.floor((s - (days * 86400 ) - (hours *3600 ))/60)
    var secs = Math.floor((s - (days * 86400 ) - (hours *3600 ) - (minutes*60)))

    return { "d":days, "h":hours, "m":minutes, "s":secs };
}

console.log( secondsToTime(3600) ); //{ d: 0, h: 1, m: 0, s: 0 }    
console.log( secondsToTime(703232) );  // { d: 8, h: 3, m: 20, s: 32 } 

function secondsToTime2(s){
    var h  = Math.floor( s / ( 60 * 60 ) );
        s -= h * ( 60 * 60 );
    var m  = Math.floor( s / 60 );
        s -= m * 60;
   
    return {
        "h": h,
    "m": m,
    "s": s
};
}
console.log( secondsToTime2( 3600 ));

function timeToSeconds(t) { 

    var seconds = 0; 

    seconds += t.d * 86400;
    seconds += t.h * 3600;
    seconds += t.m * 60;
    seconds += t.s;
    
    return seconds;
}

console.log( timeToSeconds( { d: 0, h: 1, m: 0, s: 0 } ) );
console.log( timeToSeconds( { d: 8, h: 3, m: 20, s: 32 } ) );

function setQuarter(startMonth) {
    var obj = {};
    
    if(startMonth=='january'){

        obj.quarter1 = {start:moment().month(0).startOf('month'),end:moment().month(2).endOf('month')};
        obj.quarter2 = {start:moment().month(3).startOf('month'),end:moment().month(5).endOf('month')};
        obj.quarter3 = {start:moment().month(6).startOf('month'),end:moment().month(8).endOf('month')};
        obj.quarter4 = {start:moment().month(9).startOf('month'),end:moment().month(11).endOf('month')};
        console.log(obj);
        return obj;
    }
    else if(startMonth=='april'){

        obj.quarter1 = {start:moment().month(3).startOf('month'),end:moment().month(5).endOf('month')};
        obj.quarter2 = {start:moment().month(6).startOf('month'),end:moment().month(8).endOf('month')};
        obj.quarter3 = {start:moment().month(9).startOf('month'),end:moment().month(11).endOf('month')};
        obj.quarter4 = {start:moment().month(0).startOf('month').add('years',1),end:moment().month(2).endOf('month').add('years',1)};
        console.log(obj);
        return obj;
    }
}

setQuarter('april');
