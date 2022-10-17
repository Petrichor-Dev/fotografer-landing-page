// //membuat live dengan menggunakan ajax

// //tangkap semua element yang di butuhkan
// const quote = document.getElementById('quote');
// const tombol = document.getElementById('tombol');

// tombol.addEventListener('click', function(){

// 	//buat object ajax
// 	const xhr = new XMLHttpRequest();

// 	//cek kesiapam ajax
// 	xhr.onreadystatechange = function () {
// 		if(xhr.readyState == 4 && xhr.status == 200){
// 			//pada saat ajax sudah siap, ganti element container dengan apapun yang ada di file search.php
// 			container.innerHTML = xhr.responseText;
// 		}
// 	}

// 	//jalankan ajax
// 	xhr.open('GET', 'ajax/search.php?keyword=' + keyword.value, true);
// 	xhr.send();

// });


// const isi = document.getElementById('isi');
// const tombol = document.getElementById('click');	

// tombol.addEventListener('click' function(){
// 	quote = ['abc', 'def', 'ghi', 'jkl', 'mno'];

	
// });


//type script
$('#typed-string').ready(function(){
	let typed = new Typed('#typed', {
		strings: ['Videografer | Creator | Fotografer'],
		backSpeed : 40,
		typeSpeed : 40,
		loop : true,
		showCursor : true,
  		cursorChar : '' 
	});
});


//toggle dark mode

// let asd = document.getElementById('asd');

// $darkTheme = false;

// function asd(){
// 	console.log('ok');
// }




