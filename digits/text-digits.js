
var textdigit = '';
var line1 ="._.   ...   ._.   ._.   ...   ._.   ._.   ._.   ._.   ._.";
var line2 ="|.|   ..|   ._|   ._|   |_|   |_.   |_.   ..|   |_|   |_|";
var line3 ="|_|   ..|   |_.   ._|   ..|   ._|   |_|   ..|   |_|   ..|";

var textdigit1 = line1.split("   ");
var textdigit2 = line2.split("   ");
var textdigit3 = line3.split("   ");

var showdigit = function(digit) {
	document.write("<tt>");
	var i;
	
	// line1
	for (i=0;i<digit.length;i++) {
		var num = digit[i];
		document.write(textdigit1[num]);
		document.write(" ");
	}
	document.write("<br/>");

	// line2
	for (i=0;i<digit.length;i++) {
		var num = digit[i];
		document.write(textdigit2[num]);
		document.write(" ");
	}
	document.write("<br/>");

	// line3
	for (i=0;i<digit.length;i++) {
		var num = digit[i];
		document.write(textdigit3[num]);
		document.write(" ");
	}
	document.write("<br/>");
	document.write("</tt>");
}

//console.log(textdigit1[0]);
//console.log(textdigit2[0]);
//console.log(textdigit3[0]);
