                                // 1
/*function Time() {
   const Week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
   const currenTime = new Date();
   const day = Week[currenTime.getDay()];
   
   const hours = currenTime.getHours();
   const minutes = currenTime.getMinutes();
   const ampm = hours >= 12 ? '12' : 'am';

    hours = hours % 12;
    hours = hours ? hours : 12;

    minutes = minutes <10 ? '0' + minutes: minutes;

    const timeString = hours + ':' + minutes+ '' + ampm;
    const dateString = day + '' + Week;
    document.getElementById("liveTime").innerText +  'dateString'   + 'timeString' ;
}
Time();
setInterval(Time,1000);
*/



/*                         //saatis ganaxlebas ar aketebs 2
const date = new Date()
 console.log(date.getHours()+":"+date.getMinutes());
*/


setInterval(() =>{
 document.getElementById("surrent-time").
innerText = new Date(). toLocaleTimeString();
},1000);


/*               //damtanja kviris dgeebbmam 3
const weekday = 
["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
 
const d = new Date();
 weekday [d.getDay( 0, 6)];
document.getElementById("datee").innerHTML = 'day';
*/


const add = document.querySelector('.add');
const ul = document.querySelector('.ul');

let counter = 0;

const generatelistIten = val => {
    const li = document.createElement('li');
    li.classList.add(`li-${counter++}`);
    li.innerHTML = `${val} <input class="check"  type="checkbox" onclick="myFunction()"> <button class="butt" onclick="myFunction(this)" ></button>`;
    ul.appendChild(li); 
    
    
}; 
function myFunction(btn) {
    const listItem = btn.closest('li');
   if (listItem) {
    ul.removeChild(listItem);
   }
   
  }; 

 

add.addEventListener('click',() => {
    const input  = document.querySelector('input');
    generatelistIten(input.value);

})
