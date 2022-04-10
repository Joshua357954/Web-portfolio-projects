let settingsBtn=document.querySelector(".settings")
let tooolBox=document.querySelector(".tools-box")

let toggleBtn=document.querySelector('.btn')
let nav=document.querySelector(".side-panel")  


const canvas=document.querySelector('#canvas');

let eraze=document.querySelector(".eraser")
let eraser=false


function getColor(){
	let newColor=document.querySelector(".color")
	return newColor.value
}

function getSize(){
	let newSize=document.getElementById("slider")
	return newSize.value
}

//  Canvas variables ...
const ctx=canvas.getContext('2d');

let painting=false


window.addEventListener("load",() => {

	canvas.height=window.innerHeight-10;
	canvas.width=window.innerWidth-25;

	// ctx.fillRect(50,50,100,100)
	// ctx.strokeRect(100,100,150,50)
	// ctx.beginPath();
	// ctx.moveTo(300,300);
	// ctx.lineTo(200,380);
	// ctx.stroke();
	// ctx.closePath();

	function startPaint(e){
		
		painting=true
		if (!eraser) {	
			draw(e);
		}

		closeNav()
	}


	const draw=(e) => {
		if(!painting ) 
			return;
		else{
			if (!eraser){
				makeDrawing(e,getColor());
			}
			else{
				onEraser(e)
			}
		}
	}


	function endPaint(){
		painting=false
		ctx.beginPath();

	}

	// Add eventlistener to canvas ...
	canvas.addEventListener("mousedown",startPaint)
	canvas.addEventListener("mouseup",endPaint)
	canvas.addEventListener("mousemove",draw)

})

// Start pen functionality ie (for  paint and for eraser)
function makeDrawing(e,color){
	ctx.lineWidth=getSize();
	ctx.lineCap="round"
	ctx.strokeStyle=color

	ctx.lineTo(e.clientX,e.clientY)

	ctx.stroke()

	ctx.beginPath()
	
	ctx.moveTo(e.clientX,e.clientY)
}




// Window resize functionality
window.addEventListener("resize",() =>{
	canvas.height=window.innerHeight-21;
	canvas.width=window.innerWidth-10;
})




// Change from console.log() to print()

function print(what){
	console.log(what)
}




//  Toggle side nav bar
let check=false

toggleBtn.addEventListener("click",()=>{

	if (!check){
		openNav()
		check=true
	}
	else{
		closeNav()		
		check=false
	}

})


const openNav=()=>{		
	toggleBtn.innerHTML="<"
	nav.classList.add("active");
	toggleBtn.classList.add("active")
}

const closeNav=()=>{
	toggleBtn.innerHTML=">"
	paintBox.classList.add("no-display")
	nav.classList.remove("active")
	toggleBtn.classList.remove("active")
}



// Add Keybord Event to open and close the tools bar
window.addEventListener("keypress",(e)=>{
	if (e.code=="Keyo" || e.code=="KeyO")
		openNav()
	else if (e.code=="Keyc" || e.code=="KeyC")
		closeNav()
})



//  Paint size funtionality ...
let paintB=document.querySelector(".paint-brush")
let paintBox=document.querySelector(".maka")




// Paint Brush size ..
paintB.addEventListener("click",()=>{
	paintBox.classList.toggle("no-display")
	slider()
})



// Slider of size
function slider() {

	let dev=document.querySelector(".maka")
	let bem=dev.getBoundingClientRect()
	print(dev)
	print(bem)
	
	dev.style.left=`${bem.width*.78}px`
	dev.style.top=`${bem.height+60}px`
}




// Ereaser funtionality
eraseCount=true

eraze.addEventListener("click",(e)=>{
	
	switch(eraseCount){

		case true:
			eraser=true
			eraze.style.backgroundColor="red"
			eraseCount=false
			paintBox.classList.toggle("no-display")
			slider()
			break

		default:
			eraser=false
			offEraser()
			eraze.style.backgroundColor="white"
			eraseCount=true
	}
})



//  Start the erasing ...
function onEraser(e){
	print(e)
	makeDrawing(e,"white");
}



function offEraser(){
	ctx.lineWidth=5;
	ctx.strokeStyle="black"

}



// Download funtionality
let dload= document.querySelector(".dbtn")

dload.addEventListener("mouseup",()=>{
	const url = canvas.toDataURL();
    dload.href = url;
    dload.download = 'My Art.png';
})



