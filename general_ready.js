function general_ready(unit)
{
    const screen=document.querySelector('#screen');

    const ready=document.createElement('div');
    ready.style.color="rgb(100,100,100)";
    ready.style.position="absolute";
    ready.style.top="50%";
    ready.style.left="50%";
    ready.id="ready";
    ready.style.fontSize=`${7*unit}px`;
    ready.style.transform="translate(-50%,-50%)";
    ready.innerText="READY\nCLICK TO START";
    ready.style.textAlign="center";
    ready.style.transition="opacity 0.5s ease-out";
    ready.style.opacity='1';
    screen.appendChild(ready);
}