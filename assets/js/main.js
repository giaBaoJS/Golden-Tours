jQuery(document).ready(function ($) {
	$('.tour-dt__program .item, .tour-dt__faq .item').each(function () {
		$(this)
			.find('.header')
			.on('click', function (e) {
				if (
					$(this).parent().hasClass('--active') &&
					!$(this).closest('.tour-dt__faq').length
				) {
					return;
				}

				$(this).parent().toggleClass('--active');
				$(this).parent().siblings().removeClass('--active');
			});
	});
	/** SWIPER - END*/
	if ($('#is-slider-detail') && $('#is-slider-detail-thumbs')) {
		const sliderThumbs = new Swiper(
			'#is-slider-detail-thumbs .swiper-container',
			{
				slidesPerView: 'auto',
				autoplay: {
					delay: 5000,
				},
				speed: 1000,
				slideToClickedSlide: true,
				watchSlidesVisibility: true,
				watchSlidesProgress: true,
				loop: false,
			}
		);
		const nextBtn = $('#is-slider-detail').find('.swiper-button-next');
		const prevBtn = $('#is-slider-detail').find('.swiper-button-prev');
		const pagination = $('#is-slider-detail').find('.swiper-pagination');
		new Swiper('#is-slider-detail .swiper-container', {
			slidesPerView: 'auto',
			autoplay: {
				delay: 5000,
			},
			speed: 500,
			thumbs: {
				swiper: sliderThumbs,
			},
			loop: true,
			navigation: {
				nextEl: nextBtn,
				prevEl: prevBtn,
			},
			pagination: {
				el: pagination,
				clickable: true,
			},
		});
	}
	/** SWIPER - END*/
	/** MAGNIFIC */
	if ($('.open-popup-btn').length) {
		$('.close-icon').on('click', function () {
			$.magnificPopup.close();
		});
		$('.open-popup-btn').magnificPopup({
			type: 'inline',
			preloader: false,
			modal: true,
			removalDelay: 500,
			callbacks: {
				beforeOpen: function () {
					this.st.mainClass = 'mfp-zoom-in';
					$('body').css('overflow', 'hidden');
				},
				close: function () {
					$('body').css('overflow', '');
				},
			},
		});
	}
	/** MAGNIFIC - END*/

	/** LIGHTGALLERY */
	if ($('.is-lightgallery').length) {
		$('.is-lightgallery').lightGallery({
			thumbnail: true,
		});
	}
	/** LIGHTGALLERY - END*/
	/** QTT PICKER */
	const priceElement = $('.qtt-picker');
	if (priceElement.length) {
		//lấy dữ liệu từ ô input - min max step
		function qttPicker(btn) {
			const input = $(btn).closest('.qtt-picker').find('.qtt-input');
			const inputMax = $(input).attr('max');
			const inputMin = $(input).attr('min');
			const inputStep = $(input).attr('step')
				? parseFloat($(input).attr('step'))
				: 1;
			if ($(btn).hasClass('next')) {
				const value = inputMax
					? Math.min(parseFloat(input.val()) + inputStep, parseFloat(inputMax))
					: parseFloat(input.val()) + inputStep;
				input.val(
					Number.isInteger(value)
						? parseInt(value)
						: parseFloat(value).toFixed(1)
				);
				return input.val();
			}

			if ($(btn).hasClass('prev')) {
				const value = Math.max(
					parseFloat(input.val()) - inputStep,
					inputMin ? parseFloat(inputMin) : 0
				);
				input.val(
					Number.isInteger(value)
						? parseInt(value)
						: parseFloat(value).toFixed(1)
				);
				return input.val();
			}

			// return input.val();
		}
		$(window).on('click', (e) => {
			if ($(e.target).hasClass('next') || $(e.target).hasClass('prev')) {
				const valueItem = qttPicker(e.target);
			}
		});
		//event cho 2 nút tăng giảm
	}
	/** QTT PICKER - END*/

	$(window).scroll(function () {
		if ($(this).scrollTop() >= 500) {
			$('#return-to-top').fadeIn(300);
		} else {
			$('#return-to-top').fadeOut(300);
		}
	});
	$('#return-to-top').click(function () {
		$('body,html').animate(
			{
				scrollTop: 0,
			},
			500
		);
	});
	$('.hamburger-btn').click(function (e) {
		e.stopPropagation();
		$(this).addClass('active');
		$('.main-menu').addClass('active');
	});
	$('html').click(function () {
		$('.hamburger-btn').removeClass('active');
		$('.main-menu').removeClass('active');
	});
});
//Scroll to top
