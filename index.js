$(document).ready(function () {
	// Изменения размеров слайдера
	$(window).resize(function () {
		// Размер слайда
		var widthSL = $('.slide').width();
		$('.wrap-slide .sl-1, .wrap-slide .sl-2, .wrap-slide .sl-3').css({
		  'width': widthSL
		});
	});

	$('.menu').click(function () {
		$('.menu').removeClass('menu-color');
		$(this).addClass('menu-color');
	});
	
	// Размер слайда
	var widthSL = $('.slide').width();
		$('.wrap-slide .sl-1, .wrap-slide .sl-2, .wrap-slide .sl-3').css({
		  'width': widthSL
		});

	// Переключение слайда
	$('.slide .switch button').click(function(){
	  // Меняем цвет кнопки 
	  $('.slide .switch button').removeClass('activeSL');
	  $(this).addClass('activeSL');
	  
	  if($(this).hasClass('btn1')){
	    $('.wrap-slide').stop().animate({
	    'margin-left': '0px'
	  },1000, 'easeOutElastic');
	  }
	  if($(this).hasClass('btn2')){
	    $('.wrap-slide').stop().animate({
	    'margin-left': '-100%'
	  },1000, 'easeOutElastic');
	  }
	  if($(this).hasClass('btn3')){
	    $('.wrap-slide').stop().animate({
	    'margin-left': '-200%'
	  },1000, 'easeOutElastic');
	  }
	});

	// Отправка данных формы
	$('.entry-form').submit(function (e) {
		e.preventDefault();
		if (!name) {
			alert('Введите имя');
			return;
		};
		if (!contact) {
			alert('Введите свои контакты');
			return;
		};
		if (!text) {
			alert('Введите сообщение');
			return;
		};
		var name = $('input[name=name]').val();
		var contact = $('input[name=contact]').val();
		var text = $('textarea').val();
		// console.log(name+" "+contact+" "+text);
	});

	// Плавная прокрутка 
	$(".menu").click(function(){
      var selected = $(this).attr('href');	
      // alert(selected);
      $.scrollTo(selected, 1000);		
      return false;
   });	


})

