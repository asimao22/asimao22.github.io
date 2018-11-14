const parallax = document.getElementById
("parallax");

window.addEventListener(scroll,function()
{
    let offset = window.pageXOffset;
    parallax.style.backgroundPositionY = offset
    * 0.7 + "px";
    
})

var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 4000;	// Time Between Switch
	 
// Image List
images[0] = "http://i63.tinypic.com/ank5sz.jpg";
images[1] = "http://i67.tinypic.com/2dlsyz7.jpg";
images[2] = "http://i68.tinypic.com/1jx277.jpg";
images[3] = "http://i68.tinypic.com/24fmbs1.jpg";
images[4] = "http://i67.tinypic.com/miz5fa.jpg"
images[5] = "http://i63.tinypic.com/m9ugxu.jpg"
images[6] = "http://i67.tinypic.com/2urqbyw.png"
images[7] = "http://i64.tinypic.com/21b0w8n.jpg"

// Change Image
function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;