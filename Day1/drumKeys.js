const keyA = document.getElementById('aMinor');

window.addEventListener('keydown', function(e){
	const audio = document.querySelector(`audio[class="${e.keyCode}"]`);
	const key = document.querySelector(`.key`);
	audio.currentTime = 0;	
	audio.play();
	console.log(key);
});

window.addEventListener('keyup', function(e){
	const audio = document.querySelector(`audio[class="${e.keyCode}"]`);
	
	audio.pause();
	
});
