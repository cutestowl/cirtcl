function click(ptr_now,ptr_end,bpm,beat,time,gold_perfect,perfect,good,gaming,note_number,results)
{
    const judgement=document.querySelector('#judgement');
    const click_time=ptr_now*240/beat/bpm-time;
    let add_score=1000000/note_number;
    if(ptr_now>ptr_end||!gaming)return -1;
    if(Math.abs(click_time)<=gold_perfect)
    {
        judgement.innerText="PERFECT";
        judgement.style.color="gold";
        add_score*=1.05;
        ++results[0];
        ++results[6];
    }
    else if(click_time>0&&Math.abs(click_time)<=perfect)
    {
        judgement.innerText="PERFECT\nearly";
        judgement.style.color="blue";
        ++results[1];
        ++results[4];
        ++results[6];
    }
    else if(click_time<0&&Math.abs(click_time)<=perfect)
    {
        judgement.innerText="PERFECT\nlate";
        judgement.style.color="red";
        ++results[1];
        ++results[5];
        ++results[6];
    }
    else if(click_time>0&&Math.abs(click_time)<=good)
    {
        judgement.innerText="GOOD\nearly";
        judgement.style.color="blue";
        add_score*=0.7;
        ++results[2];
        ++results[4];
        ++results[6];
    }
    else if(click_time<0&&Math.abs(click_time)<=good)
    {
        judgement.innerText="GOOD\nlate";
        judgement.style.color="red";
        add_score*=0.7;
        ++results[2];
        ++results[5];
        ++results[6];
    }
    else 
    {
        remove_note(ptr_now,0);
        ++results[3];
        results[6]=0;
        return 0;
    }
    results[7]=Math.max(results[6],results[7]);
    remove_note(ptr_now,1);
    judgement_animation();
    return add_score;
}