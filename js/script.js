window.onload = function () {
	'use strict';
	var x = document.querySelector("#myTopnav");
	document.querySelector("#menu").onclick = function () {
		x.classList.toggle('responsive');
	};
};