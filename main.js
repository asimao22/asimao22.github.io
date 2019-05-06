const parallax = document.getElementById
("parallax");

window.addEventListener(scroll,function()
{
    let offset = window.pageXOffset;
    parallax.style.backgroundPositionY = offset
    * 0.7 + "px";
    
})

// Get the modal
var modal = document.getElementById('myModal');
