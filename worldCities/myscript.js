var i = 0;
var images = [];
var time = 3000;

images[0] = 'img1.jpeg';
images[1] = 'img2.jpeg';
images[2] = 'img3.jpeg';
images[3] = 'img4.jpeg';

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
