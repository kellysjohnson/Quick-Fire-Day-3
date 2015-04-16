var one = [1, 2, 3, 4, 5, 6, 7, 8];
var two = [9, 7, 6, 5, 4, 3, 2, 6];
var three = [4, 3, 5, 2, 7, 5, 3, 4];
var four = [1, 4, 6, 1, 8, 6, 4, 2];
var five = [8, 3, 6, 5, 9, 6, 3, 8];
var six = [9, 8, 7, 6, 5, 4, 3, 2];

var masterArray = [one, two, three, four, five, six];

console.log(masterArray);

for (var i = 0; i<masterArray.length; i++ ) {
	for (var j = 0; j<masterArray[i].length; j++) {
		masterArray[i][j]= ((masterArray[i][j]+1)*2);
	}
}

console.log(masterArray);