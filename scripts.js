
let numInput = document.getElementById("userNum")
let usernumTimesNine = document.getElementById("numResult")

//let sumDigits = document.getElementById("sumResult")

let treeBranch1 = document.getElementById("tree1")

let treeBranch3 = document.getElementById("tree3")
let treeBranch31 = document.getElementById("tree3-1")
let treeBranch4 = document.getElementById("tree4")

let inputBox = document.querySelector(".box")

const firstButton = document.getElementById("firstButton")
const sumButton = document.getElementById("sumButton")
const magicButton = document.querySelector(".magicButton")

const limitOneClick = document.getElementById("magicButton")
const resetBtn = document.getElementById("resetBtn")
const arrowSum = document.getElementById("arrowSum")
const revealText = document.getElementById("revealText")

const treeOnly = document.getElementsByClassName(".treeOnly")

let treeOutput = document.querySelector(".treeOutput")


//Function for when input box is active, must meet length requirement
inputBox.addEventListener("input", function() {
	if (numInput.value.length >= 1) {
		firstButton.disabled = false
	}
});


//Trigger Button Click on Enter
numInput.addEventListener("keypress", function(event) {

	if (event.key === "Enter") {
	  event.preventDefault();
	  firstButton.click();
	}

  });

  //Allow Input Numbers ONLY, no other key strokes 
  function onlyNumberKey(evt) {

	// Only ASCII character in that range allowed
	var ASCIICode = (evt.which) ? evt.which : evt.keyCode
	if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
		return false;
	return true;
}

//Disable Delete button 
window.onkeydown = function (event) {
	if (event.which == 8 || event.which == 46) { 
		firstButton.disabled = true
	   //event.preventDefault();   // turn off browser transition to the previous page 
	   //alert("Enter any number.");
	 }  
}



//Equal button user input number times nine

function timesNine() { 
	let userNumber = parseInt(numInput.value)
	nineNumber = userNumber * 9

	if(nineNumber == 9 || nineNumber == 0) {
		magicButton.disabled = true
		
		treeBranch1.textContent = "The resulting product is one digit so there's nothing to add here. But that's okay! Select 'Reset' and enter a number greater than one."

	} else if (isNaN(nineNumber)) {
		magicButton.disabled = true
		usernumTimesNine.textContent = "Whoopsie!"

		treeBranch1.textContent = "Not a number. But that's okay! Select 'Reset' and enter a number greater than one."
	}
		else{
		let joinArray = numString().join(" + ") // .split vs .join ???
		treeBranch1.textContent = joinArray

		magicButton.disabled = false; 
		usernumTimesNine.textContent = nineNumber

	}
			inputBox.disabled = true;
			firstButton.disabled = true; 
			//sumButton.disabled = false; 
			resetBtn.disabled = false; 


}

//Summing digits variable: sumOneDigit
/*function sumOfDigits() {
	let userNumber = parseInt(numInput.value)
	nineNumber = userNumber * 9
	let sumOneDigit = nineNumber % 9 || 9; // Casting out nines


	sumButton.disabled = true; 
	
	sumDigits.textContent =  sumOneDigit
}*/



//To string for resuse variable: numArr
function numString() {
	let userNumber = parseInt(numInput.value)
	nineNumber = userNumber * 9

	let numArr = nineNumber.toString().split("").map(Number)
	return numArr
} 

//Joinging array variable: treeFun
function treeResult1() {
	 let joinArray = numString().join(" + ") // .split vs .join ???
	 return treeBranch3.textContent = joinArray
}

let slicePart = []

function treeResult3(n) {
	//treeResult1()

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
	arrowSum.innerHTML = "crazy #9"
	revealText.innerHTML = "The digits will always add up to nine!"
	numArr = numString()
	treeResult1()
	treeResult3(numArr)

	/*if(numArr[0] == 9 && numArr.length == 1){
		treeBranch31.innerHTML = " " 

		treeBranch4.innerHTML = "<br>" + "Don't be shy! Enter a larger number." 
	}*/
	
	//actButton()
limitOneClick.disabled = true
}

function reset() {
	numInput.value = " "
	usernumTimesNine.textContent = " "
	treeBranch1.textContent = " "

	treeOnly.textContent = " "
	//sumDigits.textContent = " "
	//treeOutput.textContent = " "
	
	treeBranch3.textContent = " "
	treeBranch31.textContent = " "
	treeBranch4.textContent = " "
	arrowSum.innerHTML = " "
	revealText.innerHTML = " "
	firstButton.disabled = true
	//sumButton.disabled = true
	magicButton.disabled = true
	
	inputBox.disabled = false

	


	//limitOneClick.disabled = true
	//firstButton.disabled = true; 

}