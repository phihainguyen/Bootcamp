var isPangram = function(str){
	if(str.length < 26){
		return false;
	}

	var newArray = str.split(" ").join("").toLowerCase().split("");
	//first split => ['The', 'quick']
	//after the join => ['Thequick']
	//after toLowerCase => ['thequick']
	// after split again => ['t', 'h', 'e'...]
	var letterHolder = [];
//loop over newArray
for (let i=0; i<newArray.length; i++){
	// if newArray[i] is not in letterHolder, push the value into our letterHolder
	if(!letterHolder.includes(newArray[i])){
		letterHolder.push(newArray[i])
	}
}
//if new array equal 26, return true, stry is pangram
if (letterHolder.length) === 26 {
	return true;

}else{
	return false;
}
}

//============power of Three Activity============//
var powerofTHree = function(N){
	//check to see if 3 to the xth power equal N
	// if true, return true. N is a power of 3
	//else if the 3 to the xth power is greater than N, then we know we gone too far, so we know that N is not a power of 3

	//increment x by 1 and run iteration again

	for (var i =0; ; i++) {
		if (Math.pow(3, i)===N) {
			return true
		}
		else if (Math.pow(3, i)>N) {
			return false;
		}

	}
}
powerofTHree(27);

//====================       ============================//