let min = 0;
let max = urls.length - 1;

if(max==0){
	window.location.href='https://github.com/hms5232/damin-survey';
}else{
	let random = Math.floor(Math.random() * (max - min + 1)) + min;
	console.log(urls[random])
	window.location.href=urls[random];
}