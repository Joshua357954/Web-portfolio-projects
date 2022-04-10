// let logoutBtn=document.querySelector(".logout-btn")


// logoutBtn.addEventListener("click",()=>{

// 	let check=confirm("Are you sure you want to logout ...")
// 	if (check){
// 		fetch("/logout")
// 		console.log("Logged out")
// 	}

// 	else
// 		console.log("No action")
// })


let searchBox=document.querySelector(".search-box")
let userInput=document.getElementById('input')

let dataList=[]



async function runam(){



	await fetch("/all_users")
	.then(res=>res.json())
	.then(data=> dataList=data.message)
	// dataList=[]
}

runam()

function doit(){
	console.log(dataList)
}

async function runs(event){

	searchBox.innerHTML="";

	try{
		await runam()
	}catch{
		console.log("Internal server error")
	}

	if (event=="")
		searchBox.innerHTML="";

	else{
		let new_List=dataList.filter(item => {
			return item.name.toLowerCase().includes(event.toLowerCase())
		})

		if (new_List){
			new_List.map(
				res => addSearch(res.name)
				);
		}
	}
}  



function addSearch(item){
	searchBox.innerHTML+=`<li class="search-item">
		<a  href="/u/${item}" >${item}</a>
	</li>`
}




// Alert close

let alert=document.querySelector(".alt-box")

console.log(alert)


