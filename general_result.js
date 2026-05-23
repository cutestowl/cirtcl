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
    content.innerText=
`     s c o r e     : ${Math.round(score)}

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
    content.style.top="15vh";
    content.style.fontSize="2.5vh";
    content.style.border="0.3vh solid black";
    content.style.padding="5vh 3vh 3vh 3vh";
    content.style.borderRadius="10vh";
    content.id="content";

    screen.appendChild(content);

    const conti=document.createElement('button');
    // conti.style.border='black solid 0.5vh';
    conti.style.position="absolute";
    conti.style.height="5vh";
    conti.style.width="15vh";
    conti.style.top="90vh";
    conti.innerText="continue";
    conti.style.backgroundColor="rgb(180,180,180)"
    conti.id="conti";

    screen.appendChild(conti);

    conti.addEventListener('click',()=>{
      window.location="/index.html";
    })
}