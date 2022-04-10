

let output= document.querySelector("#pee")

let buttons=document.querySelectorAll(".btn")



buttons.forEach(loopBtns)

function loopBtns(item,index){
	item.addEventListener('click',function () {clickBtn(item.innerHTML);})
}

function clickBtn(item){

	if (output.value=="0"){
		output.value=""
	}

	if (item==undefined){
		output.value=""
	}

	if (item=="="){
		output.value=eval(output.value)
	}

	else if (item=="DEL"){
		output.value=output.value.slice(0,-1);
	}

	else if (item=="CLR"){
		output.value=""
	}

	else if (item=="%"){
	
	}

	else{
		output.value+=item ;

	}
	
}










