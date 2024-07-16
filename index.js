
 function change_level()
 {
     level+=1;
     document.querySelector('#level-title').textContent='Level '+level.toString();
 }

 function create_challenge(level)
 {
     let temp=[]
     let st=0;
     let delta=500;
     for(let i=0;i<level;i++)
     {
         let rng_no=Math.floor(Math.random()*4);
         temp.push(x[rng_no]);
         console.log("Inside create_challenge");
         let temp_sound=new Audio('./sounds/'+x[rng_no]+'.mp3');
         setTimeout(()=>{ document.querySelector('#'+x[rng_no]).classList.toggle('pressed');},st);
         setTimeout(()=>{temp_sound.play();},st+400);
         setTimeout(()=>{ document.querySelector('#'+x[rng_no]).classList.toggle('pressed');},st+1000);
         st+=delta+1000;
     }
     setTimeout(()=>{accept_user_input=1;},st+100);
     console.log(`Current challenge ${temp}`);
     return temp;
 }


 function check(eve)
 {
     if(accept_user_input ===0 )return;
     const clicked_button=eve.target;
     const button_Id=clicked_button.id;
     console.log(button_Id);
     if(button_Id === challenge[0])
     {
        let temp_sound=new Audio('./sounds/'+button_Id+'.mp3');
        temp_sound.play();
         challenge.shift();
         console.log(challenge);
         if(challenge.length === 0)
         {
             accept_user_input=0;
             console.log('Inside check')
             change_level();
             console.log('Increased level');
             setTimeout(()=>{challenge=create_challenge(level);},1000);
         }
         else
         {
             console.log(`Remaining Challenge ${challenge}`);
         }
     }
     else
     {
         level=0;
         accept_user_input=0;
         change_level();
         setTimeout(()=>{challenge=create_challenge(level);},500);
     }
 }



let x=['red','green','yellow','blue'];
let level=1;
let accept_user_input=0;
let button_list=document.querySelectorAll('.btn');
for (let i=0;i<button_list.length;i++)
{
    button_list[i].addEventListener('click',check);
}

let challenge=create_challenge(level);


