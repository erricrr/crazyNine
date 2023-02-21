
let numInput = document.getElementById("userNum")
let usernumTimesNine = document.getElementById("numResult")

let sumDigits = document.getElementById("sumResult")

//let treeBranch1 = document.getElementById("tree1")
//let treeBranch2 = document.getElementById("tree2")
let treeBranch3 = document.getElementById("tree3")
let treeBranch31 = document.getElementById("tree3-1")
let treeBranch4 = document.getElementById("tree4")
//let treeBranch5 = document.getElementById("tree5")


const firstButton = document.getElementById("firstButton")
const sumButton = document.getElementById("sumButton")
const magicButton = document.querySelector(".magicButton")

const limitOneClick = document.getElementById("magicButton")


let treeOutput = document.querySelector(".treeOutput")





	
//Trigger Button Click on Enter
numInput.addEventListener("keypress", function(event) {
	if (event.key === "Enter") {
	  event.preventDefault();
	  firstButton.click();
	}
  });


 //Activate button after Input 
 	function actButton() {
		if(typeof numInput=="undefined") { 
			sumButton.disabled = true; 
			magicButton.disabled = true; 
		} else { 
			sumButton.disabled = false;
			magicButton.disabled = false;
		}
	}



//Equal button user input number times nine
//let nineNumber

function timesNine() { 
	let userNumber = parseInt(numInput.value)
	nineNumber = userNumber * 9


	//sumDigits.textContent = "?"
	//treeBranch3.textContent = " "
	//treeBranch31.textContent = " "
	//treeBranch4.textContent = "?"
	


	
	//console.log("nineNumber Inside the function timesNine" + " = " + nineNumber);
	//console.log("nineNumber Inside the function timesNine" + " = " + typeof nineNumber);
	return usernumTimesNine.textContent = nineNumber

}

//Summing digits variable: sumOneDigit
function sumOfDigits() {
	let sumOneDigit = timesNine() % 9 || 9; // Casting out nines

	return sumDigits.textContent = sumOneDigit
}


//To string for resuse variable: numArr
function numString() {
	let numArr = timesNine().toString().split("").map(Number)
	return numArr
} 

//Joinging array variable: treeFun
function treeResult1() {
	 let joinArray = numString().join(" + ") // .split vs .join ???
	 return treeBranch3.textContent = joinArray
}

let slicePart = []

function treeResult3(n) {

		let sum = n[0] + n[1]
		slicePart = n.slice(2, 100)
		let result = slicePart.unshift(sum)
		treeBranch31.innerHTML += slicePart.join(" + ") + "<br>"

while(slicePart.length > 1) {
	return treeResult3(slicePart)
}

		//Account for 2 digits that add up to 9
		if (slicePart[0] === 18) {
			return treeBranch4.textContent = "1 + 8 = 9"
		} if (slicePart[0] === 18) {
			return treeBranch4.textContent = "1 + 8 = 9"
		}  else if (slicePart[0] === 81) {
			return treeBranch4.textContent = "8 + 1 = 9"
		} else if (slicePart[0] === 45) {
			return treeBranch4.textContent = "4 + 5 = 9"
		} else if (slicePart[0] === 54) {
			return treeBranch4.textContent = "5 + 4 = 9"
		} else if (slicePart[0] === 36) {
			return treeBranch4.textContent = "3 + 6 = 9"
		} else if (slicePart[0] === 63) {
			return treeBranch4.textContent = "6 + 3 = 9"
		} else if (slicePart[0] === 27) {
			return treeBranch4.textContent = "2 + 7 = 9"
		} else if (slicePart[0] === 72) {
			return treeBranch4.textContent = "7 + 2 = 9"
		} else {
			return slicePart
		}

}
	

function treeResult4() {

	numArr = numString()
	treeResult1()
	treeResult3(numArr)

limitOneClick.disabled = true
}

function reset() {
	numInput.value = " "
	usernumTimesNine.textContent = "?"
	sumDigits.textContent = "?"
	//treeOutput.textContent = " "
	treeBranch3.textContent = " "
	treeBranch31.textContent = " "
	treeBranch4.textContent = "?"
	limitOneClick.disabled = false
}