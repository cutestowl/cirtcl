function general_score_display(unit)
{
    const screen=document.querySelector('#screen');

    const score_display=document.createElement('div');
    score_display.style.backgroundColor="gray";
    score_display.style.top="0";
    score_display.style.left="0";
    score_display.style.padding=`${1*unit}px`;
    score_display.style.fontSize=`${5*unit}px`;
    score_display.innerText="0000000";
    score_display.style.position="absolute";
    score_display.id="score_display";

    screen.appendChild(score_display);
}