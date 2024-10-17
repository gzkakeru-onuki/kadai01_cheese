window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('loading').classList.add('loaded');    
    }, 2000);
});

function check() {
    if(window.confirm("送信してよろしいですか？")) {
        console.log("送信を実施しました。");
        return true;
    } else {
        window.alert("送信をキャンセルしました。");
        console.log("送信はキャンセルされました。");
        return false;
    }
}

$(window).scroll(function (){
	$('.fadein').each(function(){
		var elemPos = $(this).offset().top,
		scroll = $(window).scrollTop(),
		windowHeight = $(window).height();

			if (scroll > elemPos - windowHeight + 150){
				$(this).addClass('scrollin');
			}
	});
});





