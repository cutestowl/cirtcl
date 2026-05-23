function general_preresult(unit,score,results,note_number)
{
    const screen=document.querySelector('#body');

    const preresult=document.createElement('div');
    preresult.style.opacity="0";
    preresult.style.transition="opacity 1s ease-out";
    preresult.style.position="absolute";
    preresult.style.top="50vh";
    preresult.style.left="50vw";
    preresult.style.textAlign="center";
    preresult.style.transform="translate(-50%,-50%)";
    preresult.style.fontSize=`${20*unit}px`;
    preresult.id="preresult";
    preresult.style.color="blue";

    if(results[0]==note_number)
    {
        preresult.innerText="ALL GOLD PERFECT";
        preresult.style.color="gold";
    }
    else if(results[0]+results[1]==note_number)
    {
        preresult.innerText="ALL PERFECT";
    }
    else if(results[0]+results[1]+results[2]==note_number)
    {
        preresult.innerText="ALL COMBO";
    }
    else if(score>=700000)
    {
        preresult.innerText="CLEAR";
    }
    else 
    {
        preresult.innerText="FAIL";
        preresult.style.color="red";
    }

    screen.appendChild(preresult);
    setTimeout(()=>
    {
        preresult.style.opacity="1";
    },10); 
}
