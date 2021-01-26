(function(window){
var hellocakap = {};
var ayat = "Apa Khabar";
hellocakap.speak = function(name){
	console.log(ayat+" "+name);
}
window.hellocakap=hellocakap;
})(window);