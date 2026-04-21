//팝업존 슬라이더
const eleBanSwiper = new Swiper('.main-d-ban-swiper .swiper', {
	slidesPerView: 1,
	spaceBetween: 16,
	speed: 400,
	loop: true,
	autoplay: {
			delay: 2500,
			disableOnInteraction: false,
	},
	navigation: {
			nextEl: '.main-d-ban-swiper .swiper-button-next',
			prevEl: '.main-d-ban-swiper .swiper-button-prev',
	},
	pagination: {
			el: ".main-d-ban-swiper .swiper-pagination",
			type: "fraction",
	},
});
const $eleBanSwiperPlay = document.querySelector('.main-d-ban-swiper .swiper-button-play');
const $eleBanSwiperStop = document.querySelector('.main-d-ban-swiper .swiper-button-stop');

$eleBanSwiperPlay.style.display = "none";

$eleBanSwiperPlay.addEventListener("click", () => {
		eleBanSwiper.autoplay.start();
		$eleBanSwiperStop.style.display = "";
		$eleBanSwiperPlay.style.display = "none";
});

$eleBanSwiperStop.addEventListener("click", () => {
		eleBanSwiper.autoplay.stop();
		$eleBanSwiperStop.style.display = "none";
		$eleBanSwiperPlay.style.display = "";
});


//LNB 숨기기
document.querySelector('.lnb-fold-btn').addEventListener('click', function() {
	// .lnb 요소를 토글하여 숨기기
	document.querySelector('.lnb').classList.toggle('hide');
});
		



//GNB 드롭다운
document.addEventListener('DOMContentLoaded', function() {
	document.querySelectorAll('.dropdown').forEach(function(dropdown) {
		dropdown.addEventListener('click', function(event) {
			event.preventDefault(); // 기본 동작 방지
			const targetId = dropdown.getAttribute('aria-controls');
			const navList = document.getElementById(targetId);

			// 현재 상태 토글
			const isExpanded = dropdown.classList.toggle('active');
			dropdown.setAttribute('aria-expanded', isExpanded);

			// 드롭다운 토글 (show class로 display 제어)
			navList.classList.toggle('show', isExpanded);
			navList.setAttribute('aria-hidden', !isExpanded);
		});
	});
});


//GNB 접기
document.addEventListener('DOMContentLoaded', function() {
	const gnb = document.querySelector('.gnb');
	const btnFold = document.querySelector('.btn-gnb-fold');

	btnFold.addEventListener('click', function() {
			// GNB가 접히는 상태로 토글
			gnb.classList.toggle('folded');
	});
});


//관련사이트
const btnFamily = document.querySelector('.btn-family');
const familyList = document.querySelector('.family-list');

btnFamily.addEventListener('click', () => {
		// Toggle the display property
		if (familyList.style.display === 'block') {
				familyList.style.display = 'none';
				btnFamily.classList.remove('rotate'); // Remove rotation class
		} else {
				familyList.style.display = 'block';
				btnFamily.classList.add('rotate'); // Add rotation class
		}
});


//user명 눌렀을 때 나오는 팝업
document.addEventListener('DOMContentLoaded', function() {
	var userDropdown = document.querySelector('.userDropdown');
	var userBox = document.querySelector('.user-box');

	userBox.style.display = 'none';

	function toggleUserBox(show) {
			userBox.style.display = show ? 'block' : 'none';
	}

	userDropdown.addEventListener('click', function(event) {
			event.preventDefault(); // a 태그 기본 동작 방지
			toggleUserBox(userBox.style.display === 'none');
	});

	[userDropdown, userBox].forEach(function(el) {
			el.addEventListener('mouseover', function() {
					toggleUserBox(true);
			});
			el.addEventListener('mouseleave', function() {
					setTimeout(function() {
							if (!userDropdown.matches(':hover') && !userBox.matches(':hover')) {
									toggleUserBox(false);
							}
					}, 150);
			});
	});
	
	document.addEventListener('click', function(event) {
			if (!userDropdown.contains(event.target) && !userBox.contains(event.target)) {
					toggleUserBox(false);
			}
	});
});