
function convert(degree) {
    var x;

    if (degree == "C") {
        x = document.getElementById("c").value * 9 / 5 + 32;
        document.getElementById("f").value = x.toFixed(2);
    } else {
        x = (document.getElementById("f").value - 32) * 5 / 9;
        document.getElementById("c").value = x.toFixed(2);
    }

    var degreeC = document.getElementById("c").value;
    
    if (degreeC <=5) { //winter
        document.body.style.background = "radial-gradient(white, #0F92C0)"
    } else if (degreeC <=15) { //spring
        document.body.style.background = "radial-gradient(white, #62AC6F)"
    } else if (degreeC <=25) { //autumn
        document.body.style.background = "radial-gradient(white, #F48E20)"
    } else { //summer
        document.body.style.background = "radial-gradient(white, #F6C506)"
    }

}

function sweep() {
	document.getElementById("c").value = "";
    document.getElementById("f").value = "";
   	
   }
