jQuery(function ($) {
	// ハンバーガー
	$(".hamburger").click(function () {
		$(this).toggleClass("is-open");
		$(".header__nav").toggleClass("is-open");
	});

	$(".header__nav ul li a").click(function () {
		$(".hamburger").removeClass("is-open");
		$(".header__nav").removeClass("is-open");
	});

	// スライダー
	const swiper = new Swiper(".swiper", {
		loop: true, // 画像が無限にループ

		pagination: {
			el: ".swiper-pagination",
			clickable: true, // 丸をクリックできる
		},

		navigation: {
			nextEl: ".swiper-button-next", // → ボタン
			prevEl: ".swiper-button-prev", // ← ボタン
		},

		autoplay: {
			delay: 3000, // 自動再生したい場合のみ
		},

		effect: "fade",
		speed: 1500,
	});

	// モーダル

	let scrollPosition = 0;
	$(".works-item").click(function () {
		scrollPosition = $(window).scrollTop();

		const modalImage = $(this).find(".card").data("img");
		const modalText = $(this).find(".card").data("text");

		$("#modalImg").attr("src", modalImage);
		$("#modalText").text(modalText);

		$(".modal").addClass("is-open");
		$("body")
			.addClass("is-modal-open")
			.css("top", -scrollPosition + "px");

			$(".pagetop").addClass("is-hidden");
	});

	$(".modal__bg, .modal__close").click(function () {
		$(".modal").removeClass("is-open");

		$("body").removeClass("is-modal-open").css("top", "");

		$(".pagetop").removeClass("is-hidden");

		// $(window).scrollTop(scrollPosition);
	});

	// ナビの下線
	$(function () {
		$(".nav-link").on("click", function () {
			$(".nav-link").removeClass("is-active");
			$(this).addClass("is-active");
		});
	});

	// トップに戻るボタンが消える

	$(window).on("load", function () {
		const $pagetop = $(".pagetop");

		$(window).on("scroll", function () {
			if ($(this).scrollTop() > 100) {
				$pagetop.addClass("is-show");
			} else {
				$pagetop.removeClass("is-show");
			}
		});
	});

	// aboutからナビの背景に色をつける

	$(function () {
		const $header = $(".header");
		const aboutTop = $("#about").offset().top;

		$(window).on("scroll", function () {
			if ($(this).scrollTop() >= aboutTop) {
				$header.addClass("is-bg");
			} else {
				$header.removeClass("is-bg");
			}
		});
	});
});

// ふわっと下から出てくる
document.addEventListener("DOMContentLoaded", () => {
	AOS.init({
		once: true,
		offset: 120,
		duration: 1400,
		easing: "ease-out-cubic",
		anchorPlacement: "top-bottom",
	});
});
