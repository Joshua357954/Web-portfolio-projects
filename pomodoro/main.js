let pauseBtn=document.querySelector(".pause");
let playBtn=document.querySelector(".play")
let timer= document.querySelector('.timer');
let pausePlay=document.querySelector('.pp');
let circle=document.querySelector(".circle");
let setting=document.querySelector(".setting");

let allPomo=document.querySelectorAll(".pomodoro-item")
let count=0
let pomTitles=['work','breaK',"longBreak",'longWork']

let pomTime={"work":[10,10] , 
		"breaK":[5,5] , 
		"longBreak":[7,7], 
		"longWork":[5,5],
	}

let idx=0;
let circleIdx2=264 , circleIdx=264;


function getTIme(time){
	let mins=time[0] , second=time[1]
	let newMin=null , newSec=null;

	mins<10 ? newMin=`0${mins}`:newMin=timer.innerHTML=mins;
	second<10 ? newSec=`0${second}`:newSec=second;

	timer.innerHTML=`${newMin}:${newSec}`;
}


function calcTime(secs){
	let mins=Math.floor(secs/60);
	let second=Math.floor(secs%60);
	if (secs <=0){
		count+=1
	};
	return [mins,second]
}

function calcStroke(secs){

	const nTime=pomTime[ pomTitles[count]][1]

	const time=264/nTime;

	circleIdx-=time;

	circle.style.strokeDashoffset=circleIdx;	
}

function start(){

	removeActive()

	if (count===0){
		pomTime['work'][0]-=1
		calcStroke(pomTime['work'])
		getTIme(calcTime(pomTime['work'][0]))
		addActive(0)
	}

	else if (count===1){
		pomTime['breaK'][0]-=1

		calcStroke(pomTime['breaK'])
		getTIme(calcTime(pomTime['breaK'][0]))
		addActive(1)
	}

	else if (count>3){
		console.log("kkop")
		count=0
	}

	else if (count===2){
	
		pomTime['longBreak'][0]-=1

		calcStroke(pomTime['longBreak'])
		getTIme(calcTime(pomTime['longBreak'][0]))
		addActive(2)
	}

	else if (count===3){
		pomTime['longWork'][0]-=1
		calcStroke(pomTime['longWork'])
		getTIme(calcTime(pomTime['longWork'][0]))
		addActive(3)
	}

}

// let hello=null , hasStarted=false , paused=false
let hasStarted
function beginPomodoro(){
	
	if (!hasStarted){

		hello=setInterval(()=>{
			// console.log(pomTime["work"])

			if (count>3){
				console.log("kkop")
				count=0
			}

			let pop=pomTime[pomTitles[count]][0];

			if (! pop <= 0 && count<5) {

				start() 
			}

			else {
				clearInterval();
			}	
	},1000)
}

};

pauseBtn.addEventListener('click',()=>{
	pausePlay.innerHTML="Paused"
	pausePlay.style.color="#f4a442"
	// hasStarted=false
	console.log("You clicked the pause button.")
	clearInterval(hello)
})

playBtn.addEventListener('click',()=>{
	// hasStarted=true
	pausePlay.innerHTML="Running"
	pausePlay.style.color="#219f94";
	// "#9d9d9d"
	console.log("You clicked the play button.")
	beginPomodoro()
})


function addActive(i){
	let poms=allPomo[i]
	poms.classList.add("active")
	console.log(poms)
}
function removeActive(){
	allPomo.forEach((item)=>{
		item.classList.remove("active")
	})
}









































// let time=document.querySelector('.count')

// let tes=2;

// let timeInSec=tes*60

// let poo=0
// function trackProgress(mainP){
// 	let number=document.querySelector('.num')
	
// 	mainP=mainP*2
// 	let precent1=0
// 	let pet= mainP>100 ? precent1=100: precent1=mainP

// 	let rot=1.8*precent1
// 	let c1=document.querySelector('.circle .left .progress')

// 	c1.style.transform=`rotate(${rot}deg)`;


// 	p2=mainP-100;

// 	if (mainP>100){
// 		let c2=document.querySelector('.circle .right .progress');
// 		let rot2=1.8*p2;
// 		c2.style.transform=`rotate(${rot2}deg)`;
// 	}

// 	// Percent count 
// 	let fullPercent=0

// 	p2<=0 ? fullPercent=Math.floor(precent1/2) : fullPercent=Math.floor((precent1/2)+(p2/2));

// 	number.innerText=fullPercent+"%"
// }



// function startP(got,prog){
// 	let count=0
	
// 	let mins=Math.floor(got/60)
// 	let secs=Math.round(got%60)
	
// 	tpPro=5
// 	tpPro+=5
	

	
// 	if (got<=0){
// 		 time.innerText=`00 : 00`
// 	}
	
// 	if (got>0){
// 		secs<10 ? time.innerText=`${mins} : 0${secs}`:time.innerText=`${mins} : ${secs}`;
// 		mins<10 ? time.innerText=`0${mins} : ${secs}`:time.innerText=`${mins} : ${secs}`;
// 		console.log(Math.floor(mins),Math.round(secs))
// 		trackProgress(prog)
// 	}


// }




// function engine(){

// 	setInterval(()=>{
// 		let nki= (100-(timeInSec/(timeInSec/60)))*100
// 		poo=nki
// 		console.log(nki)
// 		// reduce the 
// 		timeInSec-=1
// 		// run the startP function and check for invalid value.

// 		console.log(poo)
// 		timeInSec>=-1 ? startP(timeInSec,nki):clearInterval();

// 	},1000)

// }


// function stopP(){

// }


