var one = [1, 2, 3, 4, 5, 6, 7, 8];
var two = [9, 7, 6, 5, 4, 3, 2, 6];
var three = [4, 3, 5, 2, 7, 5, 3, 4];
var four = [1, 4, 6, 1, 8, 6, 4, 2];
var five = [8, 3, 6, 5, 9, 6, 3, 8];
var six = [9, 8, 7, 6, 5, 4, 3, 2];

var masterArray = [one, two, three, four, five, six];

console.log(masterArray);


function addIt (array) {
	newArray = [];
	for (var k=0; k<array.length; k++){
		newArray[k]=array[k]+1;
	}
	return newArray;
}

function multiplyIt (array) {
	newArray2 = [];
	for (var l=0; l<array.length; l++){
		newArray[l]=array[l]+1;
	}
	return newArray2;
}



for (var i = 0; i<masterArray.length; i++ ) {
	for (var j = 0; j<masterArray[i].length; j++) {
		masterArray[i][j]= addIt(masterArray[i][j]);
		masterArray[i][j]= multiplyIt(masterArray[i][j]);
	}
}

console.log(masterArray);

