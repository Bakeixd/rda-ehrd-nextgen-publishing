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

if($eleBanSwiperPlay && $eleBanSwiperStop){
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
}
/*
//LNB 숨기기
const lnb = document.querySelector('.lnb');
const lnbFoldBtn = document.querySelector('.lnb-fold-btn');

// 화면 크기에 따라 lnb 표시 상태 조정
function toggleLnbOnResize() {
    if (window.innerWidth <= 1600) {
        lnb.classList.add('hide'); // 1524px 이하일 때 자동으로 숨기기
    } else {
        lnb.classList.remove('hide'); // 1524px 이상일 때 항상 보이게
    }
}

// 버튼 클릭으로 lnb 토글
if(lnbFoldBtn){
	lnbFoldBtn.addEventListener('click', function() {
	    lnb.classList.toggle('hide');
	});
}

// 초기 실행
toggleLnbOnResize();

// 창 크기 변경 시 실행
window.addEventListener('resize', toggleLnbOnResize);

*/

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
	if(btnFold){
		btnFold.addEventListener('click', function() {
				// GNB가 접히는 상태로 토글
				gnb.classList.toggle('folded');
		});
	}
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
/* 사용안함
document.addEventListener('DOMContentLoaded', function() {
	var userDropdown = document.querySelector('.userDropdown');
	var userBox = document.querySelector('.user-box');

	if(userBox && userDropdown){
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
	}
});

*/

/*** * modal * ***/
const $modalTrigger = document.querySelectorAll('.open-modal');
const $modalCloseTrigger = document.querySelectorAll('.close-modal');
const $kds_body = document.querySelector('body');
const kds_modal = {
	init: () => {
		kds_modal.open();
		kds_modal.close();
	},
	open: () => {
		$modalTrigger.forEach(e => {
			e.addEventListener('click', ele => {
				const id = e.getAttribute('data-target'); // id 가져오기
				e.classList.add('modal-opened');
				e.setAttribute('tabindex', '-1');
				kds_modal.modalOpen(id);  // 모달 열기 함수 호출
				ele.preventDefault();
			});
		});
	},
	modalOpen: (id) => {
		const $idVal = document.getElementById(id);  // id에 해당하는 모달 가져오기
		const $dialog = $idVal.querySelector('.modal-content');
		const $modalBack = $idVal.querySelector('.modal-back');
		const $modalOpened = document.querySelectorAll('.modal.in:not(.sample)');
		const $modalOpenedLen = $modalOpened.length + 1;
		$kds_body.classList.add('scroll-no');
		$idVal.setAttribute('aria-hidden', 'false');
		$modalBack.classList.add('in');  // 백그라운드 추가
		$idVal.classList.add('shown');  // 모달 보이기
		setTimeout(() => {
			$idVal.classList.add('in');  // 애니메이션을 위한 클래스 추가
		}, 150);

		// 열린 팝업창 포커스
		$dialog.setAttribute('tabindex', '0');

		// 모달 여러 개 열린 경우 마지막 모달 z-index 높게 설정
		if ($modalOpenedLen > 1) {
			const openedLen = $modalOpenedLen;
			const zIndexNew = 1010 + openedLen;
			$idVal.setAttribute('style', 'z-index: ' + zIndexNew);
		}

		// 레이어 진입 시 포커스
		setTimeout(() => {
			$dialog.focus();
		}, 350);
	},
	close: () => {
		$modalCloseTrigger.forEach(e => {
			e.addEventListener('click', ele => {
				const id = e.closest('.modal').getAttribute('id');
				kds_modal.modalClose(id);
			});
			e.addEventListener('keydown', ele => { // 닫기 버튼에서 탭 키 누르면 모달 내 첫번째 포커스로 키보드 이동
				if (e.classList.contains('btn-close')) {
					const keyCode = ele.keyCode || ele.which;
					if (!ele.shiftKey && keyCode == 9) {
						e.closest('.modal-content').focus(); // 첫 번째 링크로 이동
						ele.preventDefault();
					}
				}
			});
		});
	},
	modalClose: (id) => {
		const $idVal = document.getElementById(id);
		const $dialog = $idVal.querySelector('.modal-content');
		const $modalOpened = document.querySelectorAll('.modal.in:not(.sample)');
		const $modalOpenedLen = $modalOpened.length;
		if ($modalOpenedLen < 2) {
			$kds_body.classList.remove('scroll-no');
		}

		$idVal.setAttribute('aria-hidden', 'true');
		$idVal.classList.remove('in');

		$dialog.removeAttribute('tabindex');

		setTimeout(() => {
			$idVal.classList.remove('shown');
		}, 150);

		// 모달 창 연 버튼에 class 삭제 및 tabindex 0으로 조정 (포커스 영역 수정)
		const $triggerBtn = document.querySelector('.modal-opened');
		if ($triggerBtn != null) {
			$triggerBtn.focus();
			$triggerBtn.setAttribute('tabindex', '0');
			$triggerBtn.classList.remove('modal-opened');
		}
	},
};

// 모달 초기화 실행
kds_modal.init();


/**
 * 출처
 * https://www.gov.kr/portal/main/nologin
 */
// 화면확대축소
var nZoom = 100;
var zControl  = {
	zOut : function(){
		nZoom = nZoom - 5;
		zControl.zs();
	},
	zIn : function(){
		nZoom = nZoom + 5; 
		zControl.zs();
	},
	zReset : function(){		
		nZoom = 100;
		zControl.zs();
	},
	zs : function(){
		var aUserAgent = navigator.userAgent.toLowerCase();
		var btn_minus = $("button.minus");
		var btn_plus = $("button.plus");
		
		if(nZoom < 90) {
			nZoom = 90;
			btn_minus.addClass("disabled");
		} else{
			if(btn_minus.hasClass("disabled")){
				btn_minus.removeClass("disabled");	
			}
		}
		
		if(nZoom > 120) {
			nZoom = 120;
			btn_plus.addClass("disabled");
		} else{
			if(btn_plus.hasClass("disabled")){
				btn_plus.removeClass("disabled");	
			}
		}
		
		if (aUserAgent.indexOf("firefox") >= 0){
			$('body').css('-moz-transform','scale('+nowZoom+'%)'); 
			$('body').css('-moz-transform-origin','0 0');			
		} else {
			document.body.style.zoom = nZoom + "%";
		}
		
	}
}
/**
 * table scroll 
 * 
 * ============================
 * 2024.11.26 mina
 * ============================
 * 

 * 사용법
 * 예시 : <div class="table-wrap scroll-table touch-swipe">
				  <table class="table-type1"></table>
				 </div>
	 table-wrap 쪽에 srcoll-table 과 touch-swipe 추가해주세요
 * 

 * 
*/

window.addEventListener("load", function() {
	
	//table이 scroll 상태일 때 이미지 노출
	document.querySelectorAll('.scroll-table').forEach((table) => {
	  const touchSwipeElement = table;
	
	  // 플래그 초기화
	  let isScrolled = false;
	
	  const checkScroll = () => {
	      // 테이블의 스크롤 여부 확인
	      if (table.scrollWidth > table.clientWidth) {
	          if (!isScrolled) {
	              touchSwipeElement.classList.add('show'); // 처음에는 표시
	          }
	      } else {
	          touchSwipeElement.classList.remove('show'); // 스크롤 없으면 숨김
	      }
	  };
	
	  const hideOnScroll = () => {
	      if (!isScrolled) {
	          isScrolled = true; // 스크롤이 발생했음을 플래그로 저장
	          touchSwipeElement.classList.remove('show'); // 메시지 숨김
	      }
	  };
	
	  // 초기화 시 확인
	  checkScroll();
	
	  // 스크롤이 발생하면 메시지 숨김
	  table.addEventListener('scroll', hideOnScroll);
	
	  // 윈도우 리사이즈 시 스크롤 여부 재확인
	  window.addEventListener('resize', checkScroll);
	});
});

function cfEventFindIsaaci(){
	const EVNET_NAME	= '[숨은 이삭이 찾기 이벤트] ';
	const IS_CONSOLE	= false;

	// 기능 테스트를 위해 테스트 파라미터 체크
	const params		= new URL(location).searchParams;
	const eventTestAt	= ( params.get('eventTestAt') == null || params.get('eventTestAt') != 'Y' ) ? 'N' : 'Y';
	if( IS_CONSOLE ){	console.info(EVNET_NAME+'eventTestAt: ' + eventTestAt);		}

	// 이벤트 기간 체크
	const CURRENT_DT		= new Date();
	const EVENT_START_DT    = new Date('2025-12-15 09:00:00');  
	const EVENT_END_DT      = new Date('2025-12-26 23:59:59');  
	if( CURRENT_DT < EVENT_START_DT || EVENT_END_DT < CURRENT_DT ){
		if( IS_CONSOLE ){	console.info(EVNET_NAME+'이벤트 기간이 아닙니다.');		}
		if( IS_CONSOLE ){	console.info('현재일시: ' + CURRENT_DT);			}
		if( IS_CONSOLE ){	console.info('이벤트 시작일시: ' + EVENT_START_DT);	}
		if( IS_CONSOLE ){	console.info('이벤트 종료일시: ' + EVENT_END_DT);		}
		return false;
	}

	// 이벤트 노출 비율 체크
	const EVENT_EXPSR_RT		= 10;	// 이벤트 노출 비율
	const EVENT_TEST_EXPSR_RT	= 100;	// 이벤트 테스트 노출 비율
	const EXPSR_RT				= ( eventTestAt != 'Y' ) ? EVENT_EXPSR_RT : EVENT_TEST_EXPSR_RT;	// 이벤트 노출 비율
	// 이벤트 노출비율에 맞지 않는 경우 이벤트 태그 생성하지 않고 종료.
	if( Math.floor(Math.random() * 100) > EXPSR_RT ){
		if( IS_CONSOLE ){	console.info(EVNET_NAME+'이벤트 노출 제한.(노출률: ' + EXPSR_RT + '%)');	}
		return false;
	}

	// 혹시나 중복 생성 될 경우 기존 생성한 이벤트 태그는 삭제처리.
	if( $('#chatbot-Isaaci').length > 0  ){
		$('#chatbot-Isaaci').remove();
	}

	// 동적태그 생성 파라미터 설정
	const HOST_NAME			= location.origin.includes('localhost') ? '' : 'https://www.nongsaro.go.kr';
	const EVENT_IMG_URL		= HOST_NAME+'/chatbot/img/img_chat_c2.png';						// 이벤트 이미지 URL
	const EVENT_IMG_ALT		= '이삭이아이콘';														// 이벤트 이미지 alt
	const CLOSE_BUTTON_URL	= HOST_NAME+'/ps/img/cmmImg_2020/common/ico_close.png';			// 닫기버튼 이미지 background URL
	let imgWidth			= 143;															// 이벤트 이미지 넓이 143
	let imgHeight			= 151;															// 이벤트 이미지 높이 151
	// 이미지 넖이/높이 계산(이벤트 이미지 변경가능성이 예상되어 넓이/높이 계산 추가)
	let img = new Image();
	img.onload = function(){
		imgWidth	= this.width;
		imgHeight	= this.height;
	};
	img.src = EVENT_IMG_URL;
	if( IS_CONSOLE ){	console.info(EVNET_NAME+'이미지 넓이, 높이: ', imgWidth, imgHeight);				}
	const IMG_POSITION_X	= Math.floor(Math.random() * (window.innerWidth-imgWidth));		// 이벤트 태그 동적생성 위치 X좌표
	const IMG_POSITION_Y	= Math.floor(Math.random() * (window.innerHeight-imgHeight));	// 이벤트 태그 동적생성 위치 Y좌표
	if( IS_CONSOLE ){	console.info(EVNET_NAME+'이미지 좌표(x,y): ', IMG_POSITION_X, IMG_POSITION_Y);	}

	// 동적태그 style 설정 - span
	let dymEventSpanStyle = [];
	dymEventSpanStyle.push('position: absolute');
	dymEventSpanStyle.push('z-index: 100002');
	dymEventSpanStyle.push('left: ' + IMG_POSITION_X + 'px');
	dymEventSpanStyle.push('top: ' + IMG_POSITION_Y + 'px');
	dymEventSpanStyle.push('');
	// 동적태그 style 설정 - button
	let dymEventButtonStyle = [];
	dymEventButtonStyle.push('position: absolute');
	dymEventButtonStyle.push('top: 0');
	dymEventButtonStyle.push('right: 0rem');
	dymEventButtonStyle.push('z-index: 3');
	dymEventButtonStyle.push('width: 1.5rem');
	dymEventButtonStyle.push('height: 1.5rem');
	dymEventButtonStyle.push('background: #FFF url('+CLOSE_BUTTON_URL+') center center no-repeat');
	dymEventButtonStyle.push('background-size: 80%');
	dymEventButtonStyle.push('border: 1px solid #676767');
	dymEventButtonStyle.push('border-radius: 10%');
	dymEventButtonStyle.push('padding: 1px');
	dymEventButtonStyle.push('');
	// 동적태그 style 설정 - button > span
	let dymEventButtonSpanStyle = [];
	dymEventButtonSpanStyle.push('position: absolute');
	dymEventButtonSpanStyle.push('width: 1px');
	dymEventButtonSpanStyle.push('height: 1px');
	dymEventButtonSpanStyle.push('overflow: hidden');
	dymEventButtonSpanStyle.push('margin: -1px');
	dymEventButtonSpanStyle.push('padding: 0');
	dymEventButtonSpanStyle.push('border: 0');
	dymEventButtonSpanStyle.push('');
	// 동적태그 style 설정 - img
	let dymEventImgStyle = [];
	dymEventImgStyle.push('filter: drop-shadow(4px 4px 2px #888)');
	dymEventImgStyle.push('');

	// 동적태그 생성
	let $eventSpan			= $('<span>', {id: 'chatbot-Isaaci', style: dymEventSpanStyle.join('; ').trim(), draggable: true});
	let $eventButton		= /**/$('<button>', {type: 'button', style: dymEventButtonStyle.join('; ').trim()});
	let $eventButtonSpan	= /**//**/$('<span>', {style: dymEventButtonSpanStyle.join('; ').trim()}).html('레이어 닫기');
	let $eventImg			= /**/$('<img>', {src: EVENT_IMG_URL, alt: EVENT_IMG_ALT, style: dymEventImgStyle.join('; ').trim()});

	// 동적태그 조합
	$eventButton.append($eventButtonSpan);
	$eventSpan.append($eventButton);
	$eventSpan.append($eventImg);
	$eventSpan.prependTo('body');
	if( IS_CONSOLE ){	console.info(EVNET_NAME+'이벤트 태그 노출!!');	}

	// 동적태그에 이벤트 추가(마우스로 위치 이동)
	$('#chatbot-Isaaci > img').off('drop').on('drop', function(e){
		$('#chatbot-Isaaci').css('left', (e.pageX < 0 ? 0 : e.pageX));
		$('#chatbot-Isaaci').css('top', (e.pageY < 0 ? 0 : e.pageY));
	});
	// 동적태그에 이벤트 추가(닫기 버튼 클릭 이벤트)
	$('#chatbot-Isaaci > button').off('click').on('click', function(e){
		// 돟적생성된 이벤트태그 삭제 처리.
		$.each($('#chatbot-Isaaci'), function(idx, item){
			$(item).remove();
		});
	});
}




