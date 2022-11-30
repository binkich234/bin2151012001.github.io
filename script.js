const search = document.querySelector('.sx');
const btn = document.querySelector('.bx');
const input = document.querySelector('.ix');

btn.addEventListener('click', () => {
	if (input.value == 'hentaiz'){
	  window.location.href = "https://hentaiz.page";
	} else if (input.value == '5cm' || input.value == '5cm/s' || input.value == '5') {
	  window.location.assign("5cm.html");
	} else if (input.value == 'khu vuon ngon tu' || input.value == 'khu vuon' || input.value == 'khu') {
	  window.location.assign("khuvuon.html");
	} else if (input.value == 'ben kia may troi la noi hen uoc' || input.value == 'ben kia may troi') {
	  window.location.assign("benkiamaytroi.html");
	} else if (input.value == 'nua kiep') {
	  window.location.assign("nuakiephongtran.html");
	} else {
	  search.classList.toggle('active');
      input.focus();
	}
});

function butfunc(){
	let post = $(".status-box").val();
	$("<li>").text(post).prependTo(".posts");
	$(".status-box").val("");
}

function ht(){
	alert('đăng kí thành công ');
	window.location.assign("index.html");

}