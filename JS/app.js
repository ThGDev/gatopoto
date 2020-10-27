// MENU EN POSITION FIXED AU SCROLL
var MenuFixed = document.querySelector("#menu");

function scrolled(){
	var windowHeight = window.innerHeight,
        currentScroll = document.body.scrollTop || document.documentElement.scrollTop;
	
        MenuFixed.className = (currentScroll >= windowHeight) ? "fixed" : "";        
}

addEventListener("scroll", scrolled, false);