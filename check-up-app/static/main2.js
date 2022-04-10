

let box= document.querySelectorAll(".item")

let li=document.querySelectorAll(".item")

li.forEach(item => item.addEventListener('click',addUp))

function addUp(e){
	li.forEach(item => item.classList.remove('Cactive'))
	e.target.classList.add("Cactive")
}

