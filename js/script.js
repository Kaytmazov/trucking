$(function() {

    $('#login-form-link').click(function(e) {
		$("#login-form").delay(100).fadeIn(100);
 		$("#register-form").fadeOut(100);
		$('#register-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	$('#register-form-link').click(function(e) {
		$("#register-form").delay(100).fadeIn(100);
 		$("#login-form").fadeOut(100);
		$('#login-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});

});

jQuery(document).ready(function($) {
	// Клик на элемент по которому и будет совершаться 
	// действие открытие и закрытие sidebar
	$('.sidebar-toggle').click(function(e) {
		// Класс sidebar
		var sidebar = $('.sidebar');
		// Ширина sidebar
		var sidebarWidth = $('.sidebar').width();
		// Добавляем класс active
		$('.page-title, .content').addClass('active');

		// Проверяем, если в sidebar свойство left не равна ширины его то выполняються 
		// следующие действия
		if (sidebar.css('left') != sidebarWidth) {
			// Добавляем ему класс active
			sidebar.addClass('active');

			var firstClick = true;

			// Скрипт который будет закрывать sidebar при клике на любое место
			$(document).bind('click.myEvent', function(e) {
				if (!firstClick && $(e.target).closest('.sidebar').length == 0) {
					// Удаляем класс active
					sidebar.removeClass('active');
					// Удаляем класс active
					$('.page-title, .content').removeClass('active');
					$(document).unbind('click.myEvent');
				}
				firstClick = false;
			});
		}
		e.preventDefault();
	});
});