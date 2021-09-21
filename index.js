/*
 * 原始出處：http://g23988.blogspot.com/2015/08/html-javascript.html
 * 後由 hms5232 改寫並放置於 Github 上公開
 */


let min = 0;
let max = urls.length - 1;

if(max == 0){
	window.location.href='https://github.com/hms5232/random-survey';
}else{
	let random = Math.floor(Math.random() * (max - min + 1)) + min;
	console.log(urls[random])
	window.location.href = urls[random];
}
