function general_note(unit,type,id,deg,size)
{
    if(type==1)
    {
        const main=document.querySelector('#main');

        const note=document.createElement('div');
        note.style.border=`black solid ${unit*size/50}px`;
        note.style.width=`${unit*size/25}px`;
        note.style.height=`${unit*size/25}px`;
        note.style.borderRadius="50%"
        note.style.position="absolute";
        note.style.transformOrigin=`left ${size*unit/2}px`;
        note.style.transform=`rotate(${deg}deg) translate(-50%,-50%)`;
        note.style.left="50%";
        note.id=`n${id}`;
        note.style.zIndex=`${id}`;

        main.appendChild(note);
    }
}