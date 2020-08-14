function lesser(a,b){
	if (a > b){
		return b
	}
	return a
}
function greater(a,b){
	if (a < b){
		return b
	}
	return a
}

function ToggleVisibility(element_id) 
{
	let el = document.getElementById(element_id);

	if (el.style.visibility == '' || el.style.visibility == 'hidden') {
		el.style.visibility = 'visible';
	}
	else {
		el.style.visibility = 'hidden';
	}
}