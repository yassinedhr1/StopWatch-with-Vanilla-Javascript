
var seconds=document.querySelector(".seconds");
    var tens=document.querySelector(".tens");
    var btnstart=document.querySelector(".btnstart");
    var btnstop=document.querySelector(".btnstop");
    var btnreset=document.querySelector(".btnreset");
    var tens1=0;
    var seconds1=0;
    var interval;
    //
   
    btnstart.onclick=startimer();
    btnstop.onclick=stoptimer;
    btnreset.onclick=resettimer;
    //
    function startimer(){
        interval=setInterval(function(){
            if(tens1<=9){
                tens1++;
                tens.innerHTML="0"+tens1;
            }
            if(tens1>9 &&  tens1<=99){
                tens1++;
                tens.innerHTML=tens1;
            }
            if(tens1==100){
                tens1=0;
                tens.innerHTML="00";
                seconds1++;
                if(seconds1<9){
                    seconds.innerHTML="0"+seconds1;
                }
                if(seconds1>9){
                    seconds.innerHTML=seconds1;
                }
                
            }
        },10);  
    }
    function stoptimer(){
        clearInterval(interval);
    }
    function resettimer(){
        clearInterval(interval);
        seconds.innerHTML="00";
        tens.innerHTML="00";
    }