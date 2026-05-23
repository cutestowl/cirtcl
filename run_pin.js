function run_pin(bpm,time,speed)
{
    pin=document.querySelector('#pin');
    if(pin==null)return;
    pin.style.transform=`rotate(${270+time*speed}deg) translate(0,-50%)`;
}