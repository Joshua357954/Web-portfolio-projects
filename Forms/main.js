// let query=window.location.search.split("&");
// let name=query[0].split("=")[1]
// let password=query[1].split("=")[1]
// console.log(name,password)


let name= document.getElementById('name');
let password= document.getElementById('password')
let form= document.getElementById('form')
let errOne=document.querySelector(".name-error-text")
let errTwo=document.querySelector(".password-error-text")
console.log(errOne)

form.addEventListener("submit",(e)=>{
	
	checkName()
	checkPassword()

	if (!checkName() && !checkPassword()){
		e.preventDefault();
	}

	else{
		console.log("Form is correct")
	}
})



name.addEventListener("keyup",(e)=>{
	checkName()
})

password.addEventListener("keyup",(e)=>{
 checkPassword()
})




function checkName(){
	if(name.value.length<4){
		errOne.textContent="* Your name should be more than 4"
		errOne.classList.remove("no-display");
	}else{
		errOne.classList.add("no-display");
		return true
	}
}



function checkPassword(){
	let passNums=Array.from(password.value.replace(/\D/g,''),Number)
	let passStr=password.value.replace(/[^a-z][^A-Z]/g,'').split('')

	if(password.value=="password" || password.value.length<7){
		errTwo.textContent="* Your password should be more the 7"
		errTwo.classList.remove("no-display");
	}
	else if(passNums.length<2){
		errTwo.textContent="* Your password should contain 2 Numbers or more"
		errTwo.classList.remove("no-display");		
	}

	else if(passStr.length<5){
		errTwo.textContent="* Your password should contain 6 or more Letters"
		errTwo.classList.remove("no-display");		
	}
	else{
		console.log(passNums.length,passStr)
		errTwo.classList.add("no-display");
		return true
	}
}
