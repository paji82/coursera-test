(function (){
	var nama = ["Fakhri","Muhamad","Abu", "Farhan", "Faiq", "Aishah"];
	for (var i=0;i<nama.length;i++){
		var hurufpertama=nama[i].charAt(0).toLowerCase();
		if (hurufpertama=="f"){
			byecakap.speak(nama[i]);
		} else {
			hellocakap.speak(nama[i]);
		}
	}
})();