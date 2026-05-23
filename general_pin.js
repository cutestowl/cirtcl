function general_pin(unit,size)
{
    const main_=document.querySelector('#main');

    const pin=document.createElement('div');
    pin.id="pin";
    pin.style.position='relative';
    pin.style.top='50%';
    pin.style.left='50%';
    pin.style.height='0';
    pin.style.width='60%';
    pin.style.border=`black solid ${unit*size/200}px`;
    pin.style.transformOrigin="left top";
    pin.style.transform="rotate(270deg) translate(0,-50%)";

    main_.appendChild(pin);
}