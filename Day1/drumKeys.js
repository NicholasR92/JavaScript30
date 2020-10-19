const keyA = document.getElementById('aMinor');

window.addEventListener('keydown', function(e){
	const audio = document.querySelector(`audio[class="${e.keyCode}"]`);
	const key = document.querySelector(`.key`);
	if(!audio) return;
	audio.currentTime = 0;	
	audio.play();
	key.classList.add('playing');
});

//remove transform
function removeTransition(e) {
	if(e.propertyName !== 'transform') return;

	this.classList.remove('playing');
}
//transform when key is pressed
const keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('transitionend', removeTransition));


