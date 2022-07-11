// $(function(){
// 	var scroll = new SmoothScroll('a[href*="section-"]');
// })

function smoothScroll(target, duration){
	var target = document.querySelector(target);
	var targetPosition = target.getBoundingClientRect().top;
	var startPosition = window.pageYOffset;
	var distance = targetPosition - startPosition;
	var startTime = null;

	function animation(currentTime){
		if (startTime === null) startTime = currentTime;
		var timeElapsed = currentTime - startTime;
		var run = ease(timeElapsed, startPosition, distance, duration)
		window.scrollTo(0,run);
		if (timeElapsed < duration) requestAnimationFrame(animation);
	}

	function ease(t, b, c, d) {
	    t /= d / 2;
	    if (t < 1) return c / 2 * t * t + b;
	    t--;
	    return -c / 2 * (t * (t - 2) - 1) + b;
  	}

	requestAnimationFrame(animation);

}

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () =>{
	navLinks.classList.toggle("open");
	links.forEach(link =>{
		link.classList.toggle("fade");
	});
});

navLinks.addEventListener("click",() =>{
	navLinks.classList.remove("open");
	links.forEach(link =>{
		link.classList.remove("fade");
	});
});


var section1 = document.querySelector('.section1');

section1.addEventListener('click',function(){
	smoothScroll('.section2', 2000);
});

var section3 = document.querySelector('.section3');

section3.addEventListener('click',function(){
	smoothScroll('.section4', 4000);
});

var section5 = document.querySelector('.section5');

section5.addEventListener('click',function(){
	smoothScroll('.section6', 4000);
});

