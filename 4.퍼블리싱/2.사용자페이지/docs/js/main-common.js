//메뉴 팝업
document.addEventListener('DOMContentLoaded', function() {
	// 메뉴 버튼 클릭 시 팝업 열기
	document.querySelector('.i-menu').addEventListener('click', function() {
		document.querySelector('.site--all--menu--popup').style.display = 'block';
	});

	// 닫기 버튼 클릭 시 팝업 닫기
	document.querySelector('.i-closed').addEventListener('click', function() {
		document.querySelector('.site--all--menu--popup').style.display = 'none';
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

/** 전체메뉴 */
function fn_siteMapView(e){
	var siteMap = $(".site--all--menu--popup");
	if(siteMap.is(":visible")){
		siteMap.fadeOut(220);
		$.slock( false );
	} else{
		siteMap.fadeIn(220);
		$.slock( true );
	}
}

/**
 * https://gist.github.com/barneycarroll/6550066 참고
 */
$.slock = function () {
	//prevent body scroll
	var $docEl = $('html'),
		$wrap = $('section.layout'),
		$scrollTop;
		status = false;

	/* 스크롤 잠금 */
	function fn_lock() {
		if (window.pageYOffset) {
			$scrollTop = window.pageYOffset;
			$wrap.css({
				top: -($scrollTop)
			});
		}
		$docEl.css({
			height: "100%",
			overflow: "hidden"
		});

		status = true;
	}

	function fn_unlock() {
		$docEl.css({
			height: "",
			overflow: ""
		});
		$wrap.css({
			top: ''
		});
		window.scrollTo(0, $scrollTop);
		window.setTimeout(function () {
			$scrollTop = null;
		}, 0);

		status = false;
	};

	return function slock(e){
		if(arguments.length) {
			if(e) {
				fn_lock();
			}
			else {
				fn_unlock();
			}
		}
		else {
			if(status){
				fn_unlock();
			}
			else {
				fn_lock();
			}
		}
	}
}();

//헤더 메뉴
document.querySelectorAll('.btn').forEach(button => {
	button.addEventListener('mouseover', function() {
	document.querySelectorAll('.gnb-2depth').forEach(subMenu => {
		subMenu.style.display = 'none'; 
	});
  	  
	  this.classList.add('active');
	  var depth2 = this.querySelector('.gnb-2depth');
	  if(depth2){
		depth2.style.display = 'block';  
	  }
	  document.querySelector('header').classList.add('active');
	});
  
	button.addEventListener('mouseout', function() {
	});
  
	const subMenu = button.querySelector('.gnb-2depth');
	if (subMenu) {
	  subMenu.addEventListener('mouseover', function() {
		button.classList.add('active');
		document.querySelector('header').classList.add('active');
	  });
  
	  subMenu.addEventListener('mouseout', function() {
		button.classList.remove('active');
		this.style.display = 'none';
	  });
	}
});

$(".sub-title-utill ul li > a.btn_share").on("click", function(e){
	$(".fixed_util .shareArea").addClass('on')
	ui.accessibility.focusloop(".shareArea");
});

