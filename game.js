let chart,time,start_time,ptr_now=0,ptr_end=0,ptr_pre=0,data,gaming=false,score=0,results=[0,0,0,0,0,0,0,0],size=60,combo=0,loading=false;
const gold_perfect=0.03,perfect=0.075,good=0.15,unit=Math.min(window.innerHeight,window.innerWidth)/100;

const urlparams=new URLSearchParams(window.location.search);
const offset=parseFloat(urlparams.get('offset'));

general_main(unit,size);
general_pin(unit,size);
general_judgement(unit);
general_score_display(unit);
general_combos(unit);
general_ready(unit);
await audio.loadAudio('./music/Canon_in_D_Major.mp3');

chart=await get_chart('./chart/Canon_in_D_Major.ct');
chart=chart.replaceAll("{","");
chart=chart.replaceAll(" ","");
chart=chart.replaceAll("\n","");
chart=chart.replaceAll("\r","");
console.log(chart);
chart=chart.split("}");
data=chart[0].split(',');
const bpm=data[0];
const beat=data[1];
const note_number=data[2];
const speed=data[3];
chart=chart[1].split(',');
console.log(bpm);
console.log(chart);
console.log(beat);

const screen=document.querySelector('#screen');
const score_display=document.querySelector('#score_display');
const combos=document.querySelector('#combos');
const ready=document.querySelector('#ready');

screen.style.height="97vh";
screen.style.width="97vw";
window.addEventListener('keydown',()=>
{
    const add_score=gaming&&click(ptr_now,ptr_end,bpm,beat,time,gold_perfect,perfect,good,gaming,note_number,results);
    if(add_score!=-1)
    {
        ptr_now+=1;
        score+=add_score;
        score_display.innerText=Math.floor(score).toString().padStart(7,'0');
        combos.innerText=`COMBO\n${results[6]}`;
    }
});
window.addEventListener('pointerdown',()=>
{
    if(gaming)
    {
        const add_score=gaming&&click(ptr_now,ptr_end,bpm,beat,time,gold_perfect,perfect,good,gaming,note_number,results);
        if(add_score!=-1)
        {
            ptr_now+=1;
            score+=add_score;
            score_display.innerText=Math.floor(score).toString().padStart(7,'0');
            combos.innerText=`COMBO\n${results[6]}`;
        }
    }
});

ready.addEventListener('click',()=>
{
    if(!loading)
    {
        loading=true;
        ready.style.opacity='1';
        ready.style.opacity='0';
        console.log("loading");
        // 確保解鎖瀏覽器的自動播放限制
        audio.ctx.resume().then(()=>
        {
            audio.playBGM(); // 播放音樂
            gaming=true;
            requestAnimationFrame(game);
        })
    }
})

while(Math.abs(ptr_pre*speed*240/bpm/beat)<=315)
    {
        general_note(unit,chart[ptr_pre],ptr_pre,(ptr_pre*speed*240/bpm/beat),size);
        ++ptr_pre;
    }

function game()
{
    console.log(audio);
    // time=(Date.now()-start_time)/1000;
    time = audio.getCurrentTime()-offset;
    run_pin(bpm,time,speed);
    if(Math.abs(ptr_pre*speed*240/bpm/beat)<=Math.abs(time*speed)+315)
    {
        general_note(unit,chart[ptr_pre],ptr_pre,(ptr_pre*speed*240/bpm/beat),size);
        ++ptr_pre;
    }
    while(chart[ptr_now]==0)++ptr_now;
    if(gaming&&ptr_now<(time-0.3)*bpm*beat/240)
    {
        remove_note(ptr_now,0);
        results[3]+=1;
        results[6]=0;
        combos.innerText="COMBO\n0";
        ptr_now+=1;
    }
    if(gaming&&chart[ptr_end]==-1)
    {
        gaming=false;
        remove_game();
        console.log(results);
        general_result(score,results);
    }
    if(ptr_end<=(time+0.3)*bpm*beat/240)ptr_end+=1;
    requestAnimationFrame(game);
}
