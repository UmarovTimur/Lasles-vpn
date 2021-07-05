
$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		// $('body').toggleClass('lock');
	});
	$('.popap__sign-up__burger,.sign_up').click(function(event) {
		$('.popap__sign-up__burger,.popap').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.agreement__chek').click(function(event) {
		$('.popap__sign-up__button').toggleClass('active');
	});
});
// Тень для Шапки
function windowScroll(wst,wsl) {
	if (wst == 0) {
		$('.header').removeClass('shadow');
	}
	if (wst > 0) {
		$('.header').addClass('shadow');
	}
}
$(window).scroll(function() {
	const windowScrollTop = window.pageYOffset;
	const windowScrollleft = window.pageXOffset;
	windowScroll(windowScrollTop,windowScrollleft);
});
/*==================================================================   Технология ibg  ==================================================================*/
function ibg(){
		let ibg=document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if(ibg[i].querySelector('img')){
			ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}
}

ibg();

$(window).resize(function(event) {
	daptive__function();
});

function daptive__header(w,h) {
	var headerList =$('.header__list');
	var headerRow =$('.header__row');
	var headerMenu =$('.header__menu');
	var headerLogo =$('.header__logo');
	var headerBody =$('.header__body');

	if (w < 993) {
		$('.header__row').prependTo(headerMenu);
		$('.header__logo').prependTo(headerBody);
	}else {
		$('.header__row').prependTo(headerBody);
		$('.header__logo').prependTo(headerRow);
	}
}

function daptive(w,h) {
	var wantBody = $('.want__body');
	var wanDele = $('.want__item_dele')
	if (w < 860) {
		$('.want__bg').prependTo(wantBody);
		$('.want__bg').prependTo(wantBody);
		$('.want__item_dele').removeClass('want__item');
	}else {
		$('.want__bg').prependTo(wanDele);
		$('.want__item_dele').addClass('want__item');
	}
}
// adaptive__function
function daptive__function() {
	const windowInnerWidth = window.innerWidth;
	const windowInnerHeight = window.innerHeight;
	daptive__header(windowInnerWidth,windowInnerHeight);
	daptive(windowInnerWidth,windowInnerHeight);
}
daptive__function();

/*JS-функция записи информации в fonts.scss*/

function fontsStyle(params) {
	let file_content = fs.readFileSync(source_folder + '/scss/fonts.scss');
	if (file_content == '') {
		fs.writeFile(source_folder + '/scss/fonts.scss', '', cb);
		return fs.readdir(path.build.fonts, function (err, items) {
			if (items) {
				let c_fontname;
				for (var i = 0; i < items.length; i++) {
			let fontname = items[i].split('.');
			fontname = fontname[0];
			if (c_fontname != fontname) {
				fs.appendFile(source_folder + '/scss/fonts.scss', '@include font("' + fontname + '", "' + fontname + '", "400", "normal");\r\n', cb);
			}
			c_fontname = fontname;
			}
		}
	})
	}
}
$('.card_buy_button').click(function(event) {
		$('.card_buy_button').removeClass('active');
		$(this).toggleClass('active');
		$('.popap__sign-up__burger,.popap').toggleClass('active');
		$('body').toggleClass('lock');
	});

function cb() { }
//===========================================================
function setScrollIntoView(top) {
	const lessonSelected = document.querySelector(intoView);
	lessonSelected.scrollIntoView(top)
}
$('.header__link-about').click(function(event) {
	const intoView = $('.happy');
	setScrollIntoView({
		behavior: "smooth",
	});
});
//===========================================================
function setScrollIntoView(element) {
	window.scroll({
		left: 0,
		top: element.offsetTop - 100,
		behavior: 'smooth',
	})
}
var want = document.querySelector('.want');
var features = document.querySelector('.many');
var choose = document.querySelector('.choose');
var happy = document.querySelector('.happy');
var info = document.querySelector('.global');
var footer = document.querySelector('.footer');

$('.header__link-about').click(function(event) {
	setScrollIntoView(want);
});
$('.header__link-features').click(function(event) {
	setScrollIntoView(features);
});
$('.header__link-choose').click(function(event) {
	setScrollIntoView(choose);
});
$('.header__link-info').click(function(event) {
	setScrollIntoView(info);
});
$('.header__link-trusted').click(function(event) {
	setScrollIntoView(happy);
});
$('.header__link-help').click(function(event) {
	setScrollIntoView(footer);
});