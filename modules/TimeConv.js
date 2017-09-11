function convertToMin(timeInSec) {
	var minutes = Math.floor(timeInSec / 60);
	var seconds = Math.floor(timeInSec - (minutes * 60));   
	return minutes + "min " + seconds + "sec";
}

function conmvertToHours(timeInSec) {
	var hours = Math.floor(timeInSec / 3600);
	var minutes = Math.floor((timeInSec - (hours * 3600)) / 60);
    var seconds = Math.floor(timeInSec - (hours * 3600) - (minutes * 60));
	return  hours + "godz " + minutes + "min " + seconds + "sec";
}

exports.convertToMin = convertToMin;
exports.convertToHours = conmvertToHours;