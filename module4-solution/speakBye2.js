(function(){
	var byecakap ={};
	var ayat2="Selamat Tinggal";
	byecakap.speak = function(name){
		console.log(ayat2+" "+name);
	}
	window.byecakap=byecakap;
})(window);