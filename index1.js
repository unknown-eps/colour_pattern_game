
// function change_level()
// {
//     level+=1;
//     document.querySelector('#level-title').textContent='Level '+level.toString();
// }

// async function create_challenge(level)
// {
//     let temp=[]
//     let st=0;
//     let delta=500;
//     for(let i=0;i<level;i++)
//     {
//         let rng_no=Math.floor(Math.random()*4);
//         temp.push(x[rng_no]);
//         console.log("Inside create_challenge");
//         document.querySelector('#'+x[rng_no]).classList.toggle('pressed');
//         await new Promise((resolve)=>setTimeout(resolve,2000));
//         document.querySelector('#'+x[rng_no]).classList.toggle('pressed');
//         await new Promise((resolve)=>setTimeout(resolve,500));        
//     }
//     accept_user_input=1;
//     console.log(`Current challenge ${temp}`);
//     return temp;
// }


// function check(eve)
// {
//     if(accept_user_input ===0 )return;
//     const clicked_button=eve.target;
//     const button_Id=clicked_button.id;
//     console.log(button_Id);
//     if(button_Id === challenge[0])
//     {
//         challenge.shift();
//         console.log(challenge);
//         if(challenge.length === 0)
//         {
//             accept_user_input=0;
//             console.log('Inside check')
//             change_level();
//             console.log('Increased level');
//             create_challenge(level).then((data)=>{challenge=data;});
//         }
//         else
//         {
//             console.log(`Remaining Challenge ${challenge}`);
//         }
//     }
//     else
//     {
//         level=0;
//         accept_user_input=0;
//         change_level();
//         create_challenge(level).then((data)=>{challenge=data;});
//     }
// }

// let x=['red','green','yellow','blue'];
// let level=1;
// let accept_user_input=0;
// let challenge=[];
// create_challenge(level).then((data)=>{challenge=data});
// let button_list=document.querySelectorAll('.btn');
// for (let i=0;i<button_list.length;i++)
//     {
//         button_list[i].addEventListener('click',check);
//     }
console.log('begin');
async function test()
{
    let p1= new Promise((resolve, reject) => {
        setTimeout(()=>resolve(2),2000);
    })
    let p2= new Promise((resolve, reject) => {
        setTimeout(()=>resolve(2),2000);
    })
    let v1=await p1
    st=new Date()
    let v2=await p2
    console.log((new Date()-st)/1000)

}



test()