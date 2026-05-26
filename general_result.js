function general_result(score,results)
{
    const screen=document.querySelector('#body');

    screen.style.display="flex";
    screen.style.position="relative";
    screen.style.justifyContent="center";
    screen.style.backgroundColor="rgb(168,168,168)";

    const title=document.createElement('div');
    title.style.border='gray solid 0.5vh';
    title.style.borderRadius="4vh"
    title.style.position="absolute";
    title.style.top="2vh";
    title.style.padding="2vh 2vh 2vh 2vh";
    title.style.backgroundColor="rgb(180,180,180)";
    title.style.fontSize="4vh";
    title.innerText="RESULT";
    title.id="title";

    screen.appendChild(title);

    const content=document.createElement('pre');
    let rating;
    if(score==1050000)rating="SSS";
    else if(score>=1030000)rating="SS";
    else if(score>=1000000)rating="S";
    else if(score>=950000)rating="A";
    else if(score>=880000)rating="B";
    else if(score>=700000)rating="C";
    else rating="F";
    content.innerText=
`     s c o r e     : ${Math.round(score)}

  r  a  t  i  n  g : ${rating}

  m a x  c o m b o : ${results[7]}

  h i t   r a t e  : ${Math.round((results[0]+results[1]+results[2])*10000/(results[0]+results[1]+results[2]+results[3]))/100}%

   perfect  rate   : ${Math.round((results[0]+results[1])*10000/(results[0]+results[1]+results[2]+results[3]))/100}%

 gold perfect rate : ${Math.round((results[0])*10000/(results[0]+results[1]+results[2]+results[3]))/100}%
 
   gold  perfect   : ${results[0]}

   p e r f e c t   : ${results[1]}

      g o o d      : ${results[2]}

      m i s s      : ${results[3]}

     e a r l y     : ${results[4]}

      l a t e      : ${results[5]}`

    content.style.position="absolute";
    content.style.top="12vh";
    content.style.fontSize="2.5vh";
    content.style.border="0.3vh solid black";
    content.style.padding="5vh 3vh 3vh 3vh";
    content.style.borderRadius="10vh";
    content.id="content";

    screen.appendChild(content);

    const conti=document.createElement('button');
    conti.style.position="absolute";
    conti.style.height="5vh";
    conti.style.width="15vh";
    conti.style.top="92vh";
    conti.innerText="continue";
    conti.style.backgroundColor="rgb(180,180,180)"
    conti.id="conti";

    screen.appendChild(conti);

    conti.addEventListener('click',()=>{
      window.location="index.html";
    })
}
