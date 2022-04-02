/* NOTES
class . (MUTIPLE things)
between < > - nothing
id #   (ONE thing)
END OF NOTES */

let img = document.querySelector('img');
let lalaine = document.querySelector('.btn lil-button');
let carson = document.querySelector('.btn car-button');
let paragraph = document.querySelector('.teamBios');

lalaine.addEventListener('click', () => {a
	img.src = 'images/lalaine.png';
	paragraph.innerText = 'PLEASE WORK.';
});

carson.addEventListener('click', () => {
	img.src = 'images/carson.png';
	paragraph.innerText = 'MY NAME CARSON';
});