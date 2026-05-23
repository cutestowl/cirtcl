function general_combos(unit)
{
    const screen=document.querySelector('#screen');

    const combos=document.createElement('div');
    combos.style.color="rgb(72, 72, 72)";
    combos.style.position="absolute";
    combos.style.top="0";
    combos.style.left="50%";
    combos.style.padding="1vh";
    combos.id="combos";
    combos.style.fontSize=`${4*unit}px`;
    combos.style.transform="translate(-50%,0%)";
    combos.innerText="COMBO\n0"
    combos.style.textAlign="center";
    screen.appendChild(combos);
}