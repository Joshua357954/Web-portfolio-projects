
let day=document.querySelector(".days")
let hour=document.querySelector(".hours")
let minute=document.querySelector(".minutes")
let second=document.querySelector(".seconds")



let days=4

let computed=5100

function makeCount(time){
	// day.innerHTML=time 
	let min = Math.floor(time/60), sec=Math.floor(time%60)
 
	sec=Math.floor(time%60)
	hrs=Math.floor(min/60)
	da=Math.floor(hrs/24)

	day.innerHTML=da
	hour.innerHTML=hrs
	minute.innerHTML=min
	second.innerHTML=sec

}


setInterval(()=>{
	computed-=1;
	console.log(computed)
	makeCount(computed)
},1000)










