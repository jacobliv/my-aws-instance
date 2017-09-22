var i = 0;
var images = [];
var time = 3000;

images[0] = 'ancient-costume-2533836_1280.jpg';
images[1] = 'buffalo-1807517_1280.jpg';
images[2] = 'china-2542630_1280.jpg';
images[3] = 'china-2639590_1280.jpg';

function changeImg(){
	document.slide.src = images[i];
	if(i < images.length - 1){
		i++;
	}
	else{
		i = 0;
	}
	setTimeout("changeImg()", time);
	}
window.onload = changeImg;
