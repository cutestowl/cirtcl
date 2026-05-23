function general_judgement(unit)
{
    const main=document.querySelector('#main');

    const judgement=document.createElement('div');
    judgement.style.position="absolute";
    judgement.style.top="50%";
    judgement.style.left="50%";
    judgement.id="judgement";
    judgement.style.fontSize=`${12*unit}px`;
    judgement.style.transform="translate(-50%,-50%)";
    judgement.style.textAlign="center";
    main.appendChild(judgement);
}



