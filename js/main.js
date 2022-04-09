/* NOTES
class . (MUTIPLE things)
between < > - nothing
id #   (ONE thing)
END OF NOTES */

var lalaine = document.querySelector('.lil-button');
var carson = document.querySelector('.car-button');

var textBox = document.querySelector('.teamBio');

lalaine.addEventListener("click", function() {
	img.src = 'images/lalaine.png';
	textBox.innerText = 'PLEASE WORK.';
});

carson.addEventListener('click', function() {
	img.src = 'images/carson.png';
	textBox.innerText = 'MY NAME CARSON';
});