// Tommys quiz js
// Origanlly we put the condition below in each question function
// But after chatting we looked at DRY and created a single function to handle this for us
function answerResponse(selection, answer, nextquestion) {
	if (selection == answer) {
    	console.log('RIGHT' );
    	document.getElementById("wrong").style.display = "none";
	    document.getElementById("correct").style.display = "block";
    	setTimeout(function(){
    		document.getElementById("correct").style.display = "none";
    		document.getElementById("fieldset" + nextquestion).style.display = "block";
    	}, 3000);
    } else {
    	document.getElementById("wrong").style.display = "block";
    	setTimeout(function(){
    		location.reload();
    	}, 3000);
    }
}

function questionOne(select) {
    console.log('QUESTION', select.id);
    answerResponse(select.options[select.selectedIndex].text, 'it spins around the sun', '2');
}

function questionTwo(select) {
	answerResponse(select.options[select.selectedIndex].text, 'jupiter', '3');
}

function questionThree(select) {
	answerResponse(select.options[select.selectedIndex].text, 'mercury', '4');
}

function questionFour(select) {
	answerResponse(select.options[select.selectedIndex].text, 'yes', '5');
}

