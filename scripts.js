//Multiply a number times nine
function multiplyNumber() {
	let firstNumber = parseInt(document.getElementById("userNum").value);
	const secondNumber = 9;
	let result = firstNumber * secondNumber;
	document.getElementById("numResult").value = result;
}

//Sum digits to 9
function sumOfDigits() {
	
	let n = parseInt(document.getElementById("numResult").value);
  
	const sumtAllDigits = (n) => {
		let numArr = n.toString().split('');
		let sum = numArr.reduce((a, b) => Number(a) + Number(b));
		return sum < 10 ? sum : sumtAllDigits(sum);

	}

	document.getElementById("sumResult").value = sumtAllDigits(n);
} 

//Tree the long way...
function treeResult()
{

	let n = parseInt(document.getElementById("numResult").value); //Read input number digits
	let arr = n.toString().split("").map(Number); //Split digits to create a number array
	const arr1 = [...arr]; //Saving array in a new vaiable using spread operator


let addOneTwo = arr1[0] + arr1[1]; //Add first and second number in array
	
	let arr2 = arr1.slice(2, 100); //Remove first 2 digits in array
	
	let arr3 = arr2.unshift(addOneTwo); //Add addOneTwo as first number in array
	
	let arr4 = [...arr2]; //Newest array


let addOneTwo1 = arr4[0] + arr4[1]; //Add first and second number in array

	let arr5 = arr4.slice(2, 100); //Remove first 2 digits in array
	
	let arr6 = arr5.unshift(addOneTwo1); //Add addOneTwo as first number in array
	
	let arr7 = [...arr5]; //Newest array


let addOneTwo2 = arr7[0] + arr7[1]; //Add first and second number in array

	let arr8 = arr7.slice(2, 100); //Remove first 2 digits in array
	
	let arr9 = arr8.unshift(addOneTwo2); //Add addOneTwo as first number in array
	
	let arr10 = [...arr8]; //Newest array


let addOneTwo3 = arr10[0] + arr10[1]; //Add first and second number in array

	let arr11 = arr10.slice(2, 100); //Remove first 2 digits in array
	
	let arr12 = arr11.unshift(addOneTwo3); //Add addOneTwo as first number in array
	
	let arr13 = [...arr11]; //Newest array


let addOneTwo4 = arr13[0] + arr13[1]; //Add first and second number in array

	let arr14 = arr13.slice(2, 100); //Remove first 2 digits in array
	
	let arr15 = arr14.unshift(addOneTwo4); //Add addOneTwo as first number in array
	
	let arr16 = [...arr14]; //Newest array
	

let addOneTwo5 = arr16[0] + arr16[1]; //Add first and second number in array

	let arr17 = arr16.slice(2, 100); //Remove first 2 digits in array
	
	let arr18 = arr17.unshift(addOneTwo5); //Add addOneTwo as first number in array
	
	let arr19 = [...arr17]; //Newest array


let addOneTwo6 = arr19[0] + arr19[1]; //Add first and second number in array

	let arr20 = arr19.slice(2, 100); //Remove first 2 digits in array
	
	let arr21 = arr20.unshift(addOneTwo6); //Add addOneTwo as first number in array
	
	let arr22 = [...arr20]; //Newest array


let addOneTwo7 = arr22[0] + arr22[1]; //Add first and second number in array

	let arr23 = arr22.slice(2, 100); //Remove first 2 digits in array
	
	let arr24 = arr23.unshift(addOneTwo7); //Add addOneTwo as first number in array
	
	let arr25 = [...arr23]; //Newest array


let addOneTwo8 = arr25[0] + arr25[1]; //Add first and second number in array

	let arr26 = arr25.slice(2, 100); //Remove first 2 digits in array
	
	let arr27 = arr26.unshift(addOneTwo8); //Add addOneTwo as first number in array
	
	let arr28 = [...arr26]; //Newest array


//Account for final numbers resulting in 9 18, 81 and 27, 72, 36, 63, 27, 72

let result4;

//9

	if (arr1 == 9) {
			result4 = "Don't be shy! Enter a larger number.";
		}
	else if (arr4 == 9 || arr7 == 9 || arr10 == 9 || arr13 == 9 || arr16 == 9 || arr19 == 9 || arr22 == 9 || arr25 == 9 || arr28 == 9) {
			result4 = "Nice nine!";
		}

//18, 81
	else if (arr4 == 18 || arr7 == 18 || arr10 == 18 || arr13 == 18 || arr16 == 18 || arr19 == 18 || arr22 == 18 || arr25 == 18 || arr28 == 18) {
		result4 = "1 + 8 = 9";
		}
	else if (arr4 == 81 || arr7 == 81 || arr10 == 81 || arr13 == 81 || arr16 == 81 || arr19 == 81 || arr22 == 81 || arr25 == 81 || arr28 == 81) {
			result4 = "8 + 1 = 9";
			}
		
//27, 72

	else if (arr4 == 27 || arr7 == 27 || arr10 == 27 || arr13 == 27 || arr16 == 27 || arr19 == 27 || arr22 == 27 || arr25 == 27 || arr28 == 27) {
			result4 = "2 + 7 = 9";
		}
	
	else if (arr4 == 72 || arr7 == 72 || arr10 == 72 || arr13 == 72 || arr16 == 72 || arr19 == 72 || arr22 == 72 || arr25 == 72 || arr28 == 72) {
			result4 = "7 + 2 = 9";
		}	

//45 and 54
	else if (arr4 == 45 || arr7 == 45 || arr10 == 45 || arr13 == 45 || arr16 == 45 || arr19 == 45 || arr22 == 45 || arr25 == 45 || arr28 == 45) {
			result4 = "4 + 5 = 9";
		}	
	else if (arr4 == 54 || arr7 == 54 || arr10 == 54 || arr13 == 54 || arr16 == 54 || arr19 == 54 || arr22 == 54 || arr25 == 54 || arr28 == 54) {
		result4 = "5 + 4 = 9";
		}	

//36 ad 63
	else if (arr4 == 36 || arr7 == 36 || arr10 == 36 || arr13 == 36 || arr16 == 36 || arr19 == 36 || arr22 == 36 || arr25 == 36 || arr28 == 36) {
		result4 = "3 + 6 = 9";
	}	
	else if (arr4 == 63 || arr7 == 63 || arr10 == 63 || arr13 == 63 || arr16 == 63 || arr19 == 63 || arr22 == 63 || arr25 == 63 || arr28 == 63) {
	result4 = "6 + 3 = 9";
	}
	 else {
		result4 = "I need to learn how to loop this...";
	}
	
	document.getElementById("tree").innerHTML = (arr.join(' + ')) + "<br />" + (arr4.join(' + ')) 
	+ "<br />" + (arr7.join(' + ')) 
	+ "<br />" + (arr10.join(' + '))
	+ "<br />" + (arr13.join(' + '))
	+ "<br />" + (arr16.join(' + '))
	+ "<br />" + (arr19.join(' + ')) 
	+ "<br />" + (arr22.join(' + '))
	+ "<br />" + (arr25.join(' + '))
	+ "<br />" + (arr28.join(' + '))
	+ "<br />" + result4;		
}



  

/*Tree
function treeResult()
{
	var n, sum = 0;
	n = parseInt(document.getElementById("numResult").value);
  
do {
	sum = sum + (n % 10);
    n = Math.floor(n/10);
} while (sum > 9);

	document.getElementById("treeResult").value = n + " + " + sum + " = 9";

	//document.getElementById("tree").innerHTML = n + " + " + sum + " = 9";

  }


  Tree 2

  function treeResult()
{
	var n = parseInt(document.getElementById("numResult").value);
  
    output = [];

while (n) {
    output.push(n % 10);
    n = Math.floor(n/10);
	
}

//console.log(output.reverse().join(',')); // 1,2,3,5,4,9,8,7
//document.getElementById("treeResult").value = "try me "+ (output.reverse().join(' + '));

	document.getElementById("tree").innerHTML = (output.reverse().join(' + '));

  }
  */

/* 


function sumOfDigits() {
	let number = document.getElementById("numResult").value;

	const sumtheDigit = (number) => {
		let arr = number.toString().split("").map(Number);

		return arr.reduce((acc, cur) => {
			let sum = acc + cur;

			if (sum > 9) {
				return sumtheDigit(sum);
			} else {
				return sum;
			}

		})

	}

	document.getElementById("sumResult").value = sumtheDigit(number);
}
*/



//Reset button function
function reset() {
	document.getElementById("userNum").value = "0";
	document.getElementById("numResult").value = "0";
	document.getElementById("sumResult").value = "0";
	document.getElementById("tree").innerHTML = "0";
	//document.getElementById("treeResult").value = "0";

}

/* 

// Function to get sum of digits 
function sumOfDigit()
{
 var n, sum = 0;
	n = parseInt(document.getElementById("numResult").value);
  
	while(n)
  {
    sum = sum + (n % 10);
    n = Math.floor(n/10);
  }
document.getElementById("sumResult").value = sum;

	document.getElementById("tree").innerHTML = "test " + sum;

}

/* //Back to Nine function using splice and reduce
function sumOfDigit() {
	let result = document.getElementById("numResult").value;

	const sumtheDigit = (result) => {
		let arr = result.toString().split("").map(Number);

	return arr.reduce((acc, cur) => {
		let sum = acc + cur;
	if(sum >= 10){
		return sumOfDigit(sum);
	} else {
		return sum;
		
	}
	
	})
	
	
	}

	document.getElementById("sumResult").innerHTML = "sum = " + sumtheDigit(result);
	
}*/

 



//TREE TEST 2 WIP
function tutorialTest() {
	let n = parseInt(document.getElementById("numResult").value); //Read input number digits
	let arr = n.toString().split("").map(Number); //Split digits to create a number array
	const arr1 = [...arr]; //Saving array in a new vaiable using spread operator


let addOneTwo = arr1[0] + arr1[1]; //Add first and second number in array
	
	let arr2 = arr1.slice(2, 100); //Remove first 2 digits in array
	
	let arr3 = arr2.unshift(addOneTwo); //Add addOneTwo as first number in array
	
	let arr4 = [...arr2]; //Newest array


let addOneTwo1 = arr4[0] + arr4[1]; //Add first and second number in array

	let arr5 = arr4.slice(2, 100); //Remove first 2 digits in array
	
	let arr6 = arr5.unshift(addOneTwo1); //Add addOneTwo as first number in array
	
	let arr7 = [...arr5]; //Newest array


let addOneTwo2 = arr7[0] + arr7[1]; //Add first and second number in array

	let arr8 = arr7.slice(2, 100); //Remove first 2 digits in array
	
	let arr9 = arr8.unshift(addOneTwo2); //Add addOneTwo as first number in array
	
	let arr10 = [...arr8]; //Newest array



let addOneTwo3 = arr10[0] + arr10[1]; //Add first and second number in array

	let arr11 = arr10.slice(2, 100); //Remove first 2 digits in array
	
	let arr12 = arr11.unshift(addOneTwo3); //Add addOneTwo as first number in array
	
	let arr13 = [...arr11]; //Newest array


let addOneTwo4 = arr13[0] + arr13[1]; //Add first and second number in array

	let arr14 = arr13.slice(2, 100); //Remove first 2 digits in array
	
	let arr15 = arr14.unshift(addOneTwo4); //Add addOneTwo as first number in array
	
	let arr16 = [...arr14]; //Newest array
	

let addOneTwo5 = arr16[0] + arr16[1]; //Add first and second number in array

	let arr17 = arr16.slice(2, 100); //Remove first 2 digits in array
	
	let arr18 = arr17.unshift(addOneTwo5); //Add addOneTwo as first number in array
	
	let arr19 = [...arr17]; //Newest array


let addOneTwo6 = arr19[0] + arr19[1]; //Add first and second number in array

	let arr20 = arr19.slice(2, 100); //Remove first 2 digits in array
	
	let arr21 = arr20.unshift(addOneTwo6); //Add addOneTwo as first number in array
	
	let arr22 = [...arr20]; //Newest array


let addOneTwo7 = arr22[0] + arr22[1]; //Add first and second number in array

	let arr23 = arr22.slice(2, 100); //Remove first 2 digits in array
	
	let arr24 = arr23.unshift(addOneTwo7); //Add addOneTwo as first number in array
	
	let arr25 = [...arr23]; //Newest array


let addOneTwo8 = arr25[0] + arr25[1]; //Add first and second number in array

	let arr26 = arr25.slice(2, 100); //Remove first 2 digits in array
	
	let arr27 = arr26.unshift(addOneTwo8); //Add addOneTwo as first number in array
	
	let arr28 = [...arr26]; //Newest array

// Replace NaN


//

//Account for final numbers resulting in 9 18, 81 and 27, 72, 36, 63, 27, 72

let result4 = (
	arr1 == 9 ? "Don't be shy! Enter a larger number." :
	arr4 == 9 || arr7 == 9 || arr10 == 9 || arr13 == 9 || arr16 == 9 || arr19 == 9 || arr22 == 9 || arr25 == 9 || arr28 == 9 ? "Nice nine!" :
	arr4 == 18 || arr7 == 18 || arr10 == 18 || arr13 == 18 || arr16 == 18 || arr19 == 18 || arr22 == 18 || arr25 == 18 || arr28 == 18 ? "1 + 8 = 9" :
	arr4 == 81 || arr7 == 81 || arr10 == 81 || arr13 == 81 || arr16 == 81 || arr19 == 81 || arr22 == 81 || arr25 == 81 || arr28 == 81 ? "8 + 1 = 9" :
	arr4 == 27 || arr7 == 27 || arr10 == 27 || arr13 == 27 || arr16 == 27 || arr19 == 27 || arr22 == 27 || arr25 == 27 || arr28 == 27 ? "2 + 7 = 9" :
	arr4 == 72 || arr7 == 72 || arr10 == 72 || arr13 == 72 || arr16 == 72 || arr19 == 72 || arr22 == 72 || arr25 == 72 || arr28 == 72 ? "7 + 2 = 9" : 
	arr4 == 45 || arr7 == 45 || arr10 == 45 || arr13 == 45 || arr16 == 45 || arr19 == 45 || arr22 == 45 || arr25 == 45 || arr28 == 45 ? "4 + 5 = 9" :
	arr4 == 54 || arr7 == 54 || arr10 == 54 || arr13 == 54 || arr16 == 54 || arr19 == 54 || arr22 == 54 || arr25 == 54 || arr28 == 54 ? "5 + 4 = 9" :
	arr4 == 36 || arr7 == 36 || arr10 == 36 || arr13 == 36 || arr16 == 36 || arr19 == 36 || arr22 == 36 || arr25 == 36 || arr28 == 36 ? "3 + 6 = 9" :
	arr4 == 63 || arr7 == 63 || arr10 == 63 || arr13 == 63 || arr16 == 63 || arr19 == 63 || arr22 == 63 || arr25 == 63 || arr28 == 63 ? "6 + 3 = 9" :
	"I need to learn how to loop this..." )
	
	document.getElementById("tutorial").innerHTML = (arr.join(' + ')) + "<br />" + (arr4.join(' + ')) 
	+ "<br />" + (arr7.join(' + ')) 
	+ "<br />" + (arr10.join(' + '))
	+ "<br />" + (arr13.join(' + '))
	+ "<br />" + (arr16.join(' + '))
	+ "<br />" + (arr19.join(' + ')) 
	+ "<br />" + (arr22.join(' + '))
	+ "<br />" + (arr25.join(' + '))
	+ "<br />" + (arr28.join(' + '))
	+ "<br />" + result4;
}

	//JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
let test_array =[NaN, 0, 15, false, -22, '',undefined, 47, null, 1, 0, 6]

function tutorialTest2(test_array) {

    var index = -1,
        arr_length = test_array ? test_array.length : 0,
        resIndex = -1,
        results = [];

    while (++index < arr_length) {
        var value = test_array[index];

        if (value) {
            results[++resIndex] = value;
        }
    }

    return results;
}

document.getElementById("tutorialTest2").innerHTML = tutorialTest2(test_array);

	

	/*function sumOfAllDigits() {
	let addOneTwo = arr1[0] + arr1[1];

		const sumOfAllDigits = (arr1) => {
			let arr2 = arr1.slice(2, 100); //Remove first 2 digits in array
			return arr2.unshift(addOneTwo); 
	
		}
	
		document.getElementById("tutorialTest2").innerHTML = sumOfAllDigits(arr1);
	}
	
	
	/*function range(start, count) {
		if (arguments.length == 1) {
			count = start;
			start = 0;
			arr1[0] + arr1[1]
		}
	
		return arr1.slice(start, start + count).join(" + ");
	}*/


	/* const pTag = document.querySelector("p#tutorialTest2")

	for (let i = arr1; arr1.length > i; ++i) pTag.textContent += arr1[0] + arr1[1];
	
	// -------------------------------------------
	
	// the method name say's all
	let otherP = document.createElement('p')  
	
	// just a trick as many in JS
	otherP.textContent = Array.from(Array(1),(_,i)=> arr1.join(' + ')).join(' + ') 
	
	// append otherP in the right place on the DOM
	document.body.appendChild( otherP )  


	//document.getElementById("tutorial").innerHTML = (arr.join(' + ')) + "<br />" + (arr4.join(' + ')) 
*/

//WORK ON REMOVING NaN!!!

/* let addOneTwo = arr1[0] + arr1[1]; //Add first and second number in array
	
	let arr2 = arr1.slice(2, 100); //Remove first 2 digits in array
	
	let arr3 = arr2.unshift(addOneTwo); //Add addOneTwo as first number in array
	
	let arr4 = [...arr2]; //Newest array

	return Number.isNaN(arr4) ? "0" : arr4;





let addOneTwo1 = arr4[0] + arr4[1]; //Add first and second number in array

	let arr5 = arr4.slice(2, 100); //Remove first 2 digits in array
	
	let arr6 = arr5.unshift(addOneTwo1); //Add addOneTwo as first number in array
	
	let arr7 = [...arr5]; //Newest array
	

let addOneTwo2 = arr7[0] + arr7[1]; //Add first and second number in array

	let arr8 = arr7.slice(2, 100); //Remove first 2 digits in array
	
	let arr9 = arr8.unshift(addOneTwo2); //Add addOneTwo as first number in array
	
	let arr10 = [...arr8]; //Newest array


let addOneTwo3 = arr10[0] + arr10[1]; //Add first and second number in array

	let arr11 = arr10.slice(2, 100); //Remove first 2 digits in array
	
	let arr12 = arr11.unshift(addOneTwo3); //Add addOneTwo as first number in array
	
	let arr13 = [...arr11]; //Newest array


let addOneTwo4 = arr13[0] + arr13[1]; //Add first and second number in array

	let arr14 = arr13.slice(2, 100); //Remove first 2 digits in array
	
	let arr15 = arr14.unshift(addOneTwo4); //Add addOneTwo as first number in array
	
	let arr16 = [...arr14]; //Newest array
	

let addOneTwo5 = arr16[0] + arr16[1]; //Add first and second number in array

	let arr17 = arr16.slice(2, 100); //Remove first 2 digits in array
	
	let arr18 = arr17.unshift(addOneTwo5); //Add addOneTwo as first number in array
	
	let arr19 = [...arr17]; //Newest array


let addOneTwo6 = arr19[0] + arr19[1]; //Add first and second number in array

	let arr20 = arr19.slice(2, 100); //Remove first 2 digits in array
	
	let arr21 = arr20.unshift(addOneTwo6); //Add addOneTwo as first number in array
	
	let arr22 = [...arr20]; //Newest array


let addOneTwo7 = arr22[0] + arr22[1]; //Add first and second number in array

	let arr23 = arr22.slice(2, 100); //Remove first 2 digits in array
	
	let arr24 = arr23.unshift(addOneTwo7); //Add addOneTwo as first number in array
	
	let arr25 = [...arr23]; //Newest array


let addOneTwo8 = arr25[0] + arr25[1]; //Add first and second number in array

	let arr26 = arr25.slice(2, 100); //Remove first 2 digits in array
	
	let arr27 = arr26.unshift(addOneTwo8); //Add addOneTwo as first number in array
	
	let arr28 = [...arr26]; //Newest array


	/*let lengthArr = 0;

	if (arr1.length == 1) {
		lengthArr = arr4Fun;
	} else if (arr1.length == 2) {
		lengthArr = arr4Fun;
	} else if (arr1.length == 3) {
		lengthArr = 0;
	} else if (arr1.length == 4) {
		lengthArr = arr10;
	} else if (arr1.length == 5) {
		lengthArr = arr13;
	} else if (arr1.length == 6) {
		lengthArr = arr16;
	} else if (arr1.length == 7) {
		lengthArr = arr19;
	} else if (arr1.length == 8) {
		lengthArr = arr22;
	} else if (arr1.length == 9) {
		lengthArr = arr25;
	} else if (arr1.length == 10) {
		lengthArr = arr28;
	} else {
		"Error"
	} */
//NaN start

//Number.isNaN(arr13) ? "0" : arr13;



//let removeNan = arr13?.flatMap((array) => (isNaN(arr13[0].valueOf)) ? "true" : "false")
//(isNaN(arr10)) ? "0" : "1";
  
//Number.isNaN(NaN) ? document.getElementById("tutorialTest2").innerHTML = "Good day" 
//	: document.getElementById("tutorialTest2").innerHTML = "Bad day";
	
	
	//if(isNaN(x)) throw "not a number";
	/*const removeNan = (arr13) => {
		return (isNaN(arr13[0].valueOf)) ? document.getElementById("tutorialTest2").innerHTML = arr13 
		: document.getElementById("tutorialTest2").innerHTML = "Bad day";

	}

	document.getElementById("tutorialTest2").innerHTML = removeNan(arr13);*/


	 //NaN end

//Account for final numbers resulting in 9 18, 81 and 27, 72, 36, 63, 27, 72

/* const result4 = (
	arr1 == 9 ? "Don't be shy! Enter a larger number." :
	arr4 == 9 || arr7 == 9 || arr10 == 9 || arr13 == 9 || arr16 == 9 || arr19 == 9 || arr22 == 9 || arr25 == 9 || arr28 == 9 ? "Nice nine!" :
	arr4 == 18 || arr7 == 18 || arr10 == 18 || arr13 == 18 || arr16 == 18 || arr19 == 18 || arr22 == 18 || arr25 == 18 || arr28 == 18 ? "1 + 8 = 9" :
	arr4 == 81 || arr7 == 81 || arr10 == 81 || arr13 == 81 || arr16 == 81 || arr19 == 81 || arr22 == 81 || arr25 == 81 || arr28 == 81 ? "8 + 1 = 9" :
	arr4 == 27 || arr7 == 27 || arr10 == 27 || arr13 == 27 || arr16 == 27 || arr19 == 27 || arr22 == 27 || arr25 == 27 || arr28 == 27 ? "2 + 7 = 9" :
	arr4 == 72 || arr7 == 72 || arr10 == 72 || arr13 == 72 || arr16 == 72 || arr19 == 72 || arr22 == 72 || arr25 == 72 || arr28 == 72 ? "7 + 2 = 9" : 
	arr4 == 45 || arr7 == 45 || arr10 == 45 || arr13 == 45 || arr16 == 45 || arr19 == 45 || arr22 == 45 || arr25 == 45 || arr28 == 45 ? "4 + 5 = 9" :
	arr4 == 54 || arr7 == 54 || arr10 == 54 || arr13 == 54 || arr16 == 54 || arr19 == 54 || arr22 == 54 || arr25 == 54 || arr28 == 54 ? "5 + 4 = 9" :
	arr4 == 36 || arr7 == 36 || arr10 == 36 || arr13 == 36 || arr16 == 36 || arr19 == 36 || arr22 == 36 || arr25 == 36 || arr28 == 36 ? "3 + 6 = 9" :
	arr4 == 63 || arr7 == 63 || arr10 == 63 || arr13 == 63 || arr16 == 63 || arr19 == 63 || arr22 == 63 || arr25 == 63 || arr28 == 63 ? "6 + 3 = 9" :
	"I need to learn how to loop this..." )
		
	
	document.getElementById("tutorial").innerHTML = (arr.join(' + ')) + "<br />" + (arr4.join(' + ')) 
	+ "<br />" + (arr7.join(' + ')) 
	+ "<br />" + (arr10.join(' + '))
	+ "<br />" + (arr13.join(' + '))
	+ "<br />" + (arr16.join(' + '))
	+ "<br />" + (arr19.join(' + ')) 
	+ "<br />" + (arr22.join(' + '))
	+ "<br />" + (arr25.join(' + '))
	+ "<br />" + (arr28.join(' + '))
	+ "<br />" + result4;
	//+ "<br />" + arr28NoNaN;		*/


//Number.isNaN(arr10[0]) ? 0 : arr10[0]



//document.getElementById("tutorialTest2").innerHTML = result4;

/*//Sum of Digits using splice and reduce
function sumOfDigits() {
	
	let n = parseInt(document.getElementById("numResult").value);
  
	const sumtAllDigits = (n) => {
		let numArr = n.toString().split('');
		let sum = numArr.reduce((a, b) => Number(a) + Number(b));
		return sum < 10 ? sum : sumtAllDigits(sum);

	}

	document.getElementById("sumResult").value = sumtAllDigits(n);
} */

//const newArr = arr1.flatMap((arr1) => arr1);
	   
		//document.getElementById("tutorialTest2").innerHTML = (output.join(' + '));
  
 

 /* 
  Number.isNaN(arr4)|| Number.isNaN(arr7) || Number.isNaN(arr10) || Number.isNaN(arr13) || Number.isNaN(arr16) || Number.isNaN(arr19) || Number.isNaN(arr22)|| Number.isNaN(arr25) || Number.isNaN(arr28) ? "0" :
	"I need to learn how to loop this..." )


 //TREE TEST 1 WIP

function tutorialTest () {

let n = parseInt(document.getElementById("numResult").value);
let arr = n.toString().split("").map(Number);
let arr1 = [...arr];

const arr1firstTwo = arr1.slice(0, 2); 

const newArr = [];

const firstTwo = 2; //const newArr = arr1.slice(0, 2); 

for (let index = 0; index < firstTwo; index++) { //Slice using for loop
	newArr.unshift(arr1[index]);
}

let newArr1 = arr1.flatMap((newArr) => arr1firstTwo + newArr);

document.getElementById("tutorial").innerHTML = (arr1.join(' + ')) + " " + "try this " + newArr + " " + "try this " + arr1firstTwo + " " + "try this " + newArr1; //Display digits with '+'

}

 
 
 
 let res = 0;
output = [];
  
for (i=0; i < arr1.length; i++) {
	for (let j = 0; j < arr1.length; j++) {
		output.push(res += arr1[i]);
		let temp = arr[j] // Needed to swap positions
		  arr[j] = arr[j + 1];
		  arr[j + 1] = temp; 
		} 
		
		
const result4 = (

	//9, 18, 81, 27, 72, 45 and 54
	arr1 == 9 ? "Don't be shy! Try a bigger number." :
	arr4 == 9 || arr7 == 9 || arr10 == 9 || arr13 == 9 || arr16 == 9 || arr19 == 9 || arr22 == 9 || arr25 == 9 || arr28 == 9 ? "Excellent! Try a bigger number." :
	arr4 == 18 || arr7 == 18 || arr10 == 18 || arr13 == 18 || arr16 == 18 || arr19 == 18 || arr22 == 18 || arr25 == 18 || arr28 == 18 ? "1 + 8 = 9" :
	arr4 == 81 || arr7 == 81 || arr10 == 81 || arr13 == 81 || arr16 == 81 || arr19 == 81 || arr22 == 81 || arr25 == 81 || arr28 == 81 ? "8 + 1 = 9" :
	arr4 == 27 || arr7 == 27 || arr10 == 27 || arr13 == 27 || arr16 == 27 || arr19 == 27 || arr22 == 27 || arr25 == 27 || arr28 == 27 ? "2 + 7 = 9" :
	arr4 == 72 || arr7 == 72 || arr10 == 72 || arr13 == 72 || arr16 == 72 || arr19 == 72 || arr22 == 72 || arr25 == 72 || arr28 == 72 ? "7 + 2 = 9" : 
	arr4 == 45 || arr7 == 45 || arr10 == 45 || arr13 == 45 || arr16 == 45 || arr19 == 45 || arr22 == 45 || arr25 == 45 || arr28 == 45 ? "4 + 5 = 9" :
	arr4 == 54 || arr7 == 54 || arr10 == 54 || arr13 == 54 || arr16 == 54 || arr19 == 54 || arr22 == 54 || arr25 == 54 || arr28 == 54 ? "5 + 4 = 9" :
	arr4 == 36 || arr7 == 36 || arr10 == 36 || arr13 == 36 || arr16 == 36 || arr19 == 36 || arr22 == 36 || arr25 == 36 || arr28 == 36 ? "3 + 6 = 9" :
	arr4 == 63 || arr7 == 63 || arr10 == 63 || arr13 == 63 || arr16 == 63 || arr19 == 63 || arr22 == 63 || arr25 == 63 || arr28 == 63 ? "6 + 3 = 9" :
	"I need to learn how to loop this..." )
	
	*/
		
		// document.getElementById("tutorialTest").value = (output.join(' + '));
  //document.getElementById("tree").innerHTML = (output.reverse().join(' + '));

//Display digits with '+'

//Look at first and second number in the array

//Add first and second number

//Store result as first number

//Display new digits with '+'

//Check if there is a third number

//If there is a third number, add the first number

//Store result as first number

//Display new digits with '+'

//Check if there is a fourth number

//If there is a fourth number, add the first number

//Store result as first number

//Display new digits with '+'

//...

//Check if there is a [x] number

//If there is no [x] number then check if the last result sum is 2 digits or sum less than 10

//If sum less than 10, then sum is the final result

//If sum greater than 10, then add the last two digits to get the final result

//Display the final result 9


/*  // Call a function and save the return value in x:

 function tutorialTest3() {
	let n = parseInt(document.getElementById("userNumber").value);
    output = [];

while (n) {
    output.push(n % 10);
    n = Math.floor(n/10);
}

console.log(output.reverse().join(',')); // 1,2,3,5,4,9,8,7
	document.getElementById("tutorial3").innerHTML = "try me "+ (output.reverse().join(','));

  }


  const arrayLike = {
	length: 3,
	unrelated: "foo",
	2: 4,
  };
  console.log(Array.prototype.reverse.call(arrayLike)); */

  /*function tutorialTest3(a, b) {
		return a + b;

  }

  console.log(tutorialTest3(2, 5)); */