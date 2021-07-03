
function clkbtn(){
	let input = document.getElementById('stdInput').value;

	// user input dile stirng hisebe asbe. take number e convert korte hobe.
	input = parseInt(input);

	switch (input) {
		case 1:
			document.write('<img width="100px" src="img/1.webp"> <br> Roll no: 1');
			break;
		case 2:
			document.write('<img width="100px" src="img/2.webp"> <br> Roll no: 2');
			break;
		case 3:
			document.write('<img width="100px" src="img/3.webp"> <br> Roll no: 3 <br>');
			break;
		case 4:
			document.write('<img width="100px" src="img/3.webp"> <br> Roll no: 4 <br>');
			break;
		default:
		document.write('Your roll number is not valid');
	}
}

