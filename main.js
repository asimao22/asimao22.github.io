const parallax = document.getElementById
("parallax");

window.addEventListener(scroll,function()
{
    let offset = window.pageXOffset;
    parallax.style.backgroundPositionY = offset
    * 0.7 + "px";
    
})
<<<<<<< HEAD


=======
>>>>>>> ef997a5e7e6929731626a322c003ca44190256f7
