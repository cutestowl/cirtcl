function remove_note(id,state)
{
    const note=document.querySelector(`#n${id}`);
    if(note==null)return;
    if(state!=0)
    {
        note.style.transition="all 0.3s ease-out";
        note.style.width="4vh";
        note.style.height="4vh";
        note.style.opacity="0";
    }
    else
    {
        note.style.borderColor='red';
    }
    setTimeout(()=>
        {
            note.remove();
        },300);
}