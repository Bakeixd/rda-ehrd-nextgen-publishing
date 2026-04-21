<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>

<script type ="text/javascript" src="https://cdn.jsdelivr.net/npm/chart.js@3.8.2/dist/chart.min.js"></script>
<style type="text/css">
	@media only screen and (max-width: 576px){
		#popupArea1 {
		    margin-left: 1px !important;
		    margin-top: 89px;
		}
	}
</style>
<script type="text/javascript">
var isMobile = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) ? true : false;

	/* 모바일 전용 현장학습 출석하기 생성  */

	$(document).ready(function() {
		var filter = "win16|win32|win64|mac";

		if (navigator.platform) {

			if (0 > filter.indexOf(navigator.platform.toLowerCase())) {

				$("#attendance").css("display", "block");

			}
		}
	});

	var getContextPath = "${pageContext.request.contextPath}";
	var getAspId = "${sessionScope.aspId}";
	
	function abilityTargetCheck(){
		var result = false;
		var url = getContextPath+"/ability/abilityTargetCheck.do";
		$.ajax({
	        type: "POST",
	        url : url,
	        dataType:"json",
	        data:{userId:"${sessionScope.sUserId}"} ,
	        async : false,
	        success: function(args) {
	        	result = args.isOk;
	            $(args).each(function(index, item) {
	            	result = item.isOk;
				});
	            if(!result){
	            	alert("역량진단은 연구직 또는 지도직만 해당됩니다.");
	            }
	        }
	        
	    });
		return result;
	}
	
	
	function loginCheck() {
		var ok = true;
		<c:if test='${empty sessionScope.sUserId}'>
		alert("로그인하셔야 접근 가능합니다.");
		ok = false;

		topMenu('login');
		</c:if>

		return ok;
	}

	function loginCheck_v01() {
		var ok = true;
		<c:if test='${empty sessionScope.sUserId}'>
		alert("로그인하셔야 접근 가능합니다.");
		ok = false;
		</c:if>

		return ok;
	}

	function loginCheckB(GB) {
		
		var ok = true;
		<c:if test='${empty sessionScope.sUserId}'>
		alert("로그인하셔야 접근 가능합니다.");
		ok = false;
		if(GB == "A"){
			go_login(GB);
		}else if(GB == "B"){
			go_login(GB);
		}
		</c:if>

		return ok;
	}

	function topMenu(menu, eduCd) {
		var frm = document.menuForm;
		var url = null;
		var params = menu.split('_');
		var ham_active = params[0];
	    var mobileYn = null;

		var pageNum = null;
		var detailNum = null;
		var bbsId = "";
		var lecMethod = "";
		var menuPage = params[0].replace("sMenu", "");
		if (params.length == 2)
			pageNum = params[params.length - 1];
		else {
			pageNum = params[params.length - 2];
			detailNum = params[params.length - 1];
		}
		/*if(menu == "sMenu4_8" && lecturerPoolAuthorCheck() == "0"){
			return;
		}*/

		var popup = false;

		var eduPartCd = "";
		//alert(menu);
		//alert(menuPage);
		//alert(pageNum);
		//alert(detailNum);
		switch (menu) {
		//이용안내
		case "sMenu1_1": //자료이용 및 저작권보호
			url = "<c:url value='/info/useInformation.do'/>";
			menuPage = "12";
			pageNum = "1";
			break;

		case "sMenu1_2": //수강신청안내
			url = "<c:url value='/info/useInformation.do'/>";
			break;

		case "sMenu1_3": //수료증출력안내
			url = "<c:url value='/info/useInformation.do'/>";
			break;

		case "sMenu1_4": //홈페이지구성안내
			url = "<c:url value='/info/useInformation.do'/>";
			break;

		case "sMenu1_5": //공지사항
			//url = "<c:url value='/info/useInformation.do'/>"; //자료이용 및 저작권 보호
			url = "<c:url value='/board/selectNoticeList.do?MN=A3'/>";
			bbsId = "BBSMSTR_000000000001";
			$("#notice_gubun").val("NOTICE");
			break;

		case "sMenu1_6": //이메일 무단수집 거부
			url = "<c:url value='/info/useInformation.do'/>";
			break;

		case "sMenu1_7": //개인정보처리방침
			url = "<c:url value='/info/useInformation.do'/>";
			menuPage = "12";
			pageNum = "7";
			break;

		case "sMenu1_8": //교육운영방향
			url = "<c:url value='/info/useInformation.do?MN=A1'/>";
			break;

		case "sMenu1_9": //과정개설건의
			url = "<c:url value='/info/useInformation.do?MN=A2'/>";
			break;

		case "sMenu1_10": //연간교육일정
			url = "<c:url value='/info/useInformation.do'/>";
			break;

		case "sMenu1_11": //시설안내
			url = "<c:url value='/info/useInformation.do'/>";
			break;

		//교육신청
		<c:forEach var="result" items="${sessionScope.eduBList}" varStatus="status">
	case "sMenu2_${result.rn}": //직무교육
		url = "<c:url value='/apply/cur/selectCourseList.do?MN=B${result.rn}'/>";
		eduPartCd = "${result.eduPartCd}";
		break;
	</c:forEach>
	// 		case "sMenu2_2" : //전문교육
	// 			url = "<c:url value='/apply/cur/selectCourseList.do'/>";
	// 			eduPartCd = "B1,C1";
	// 			break;

	// 		case "sMenu2_3" : //농산업기계교육
	// 			url = "<c:url value='/apply/cur/selectCourseList.do'/>";
	// 			eduPartCd = "D1";
	// 			break;

	// 		case "sMenu2_4" :  //특별교육
	// 			url = "<c:url value='/apply/cur/selectCourseList.do'/>";
	// 			eduPartCd = "F1";
	// 			break;

	// 		case "sMenu2_5" :  //정보화 통계교육
	// 			url = "<c:url value='/apply/cur/selectCourseList.do'/>";
	// 			eduPartCd = "G1";
	// 			break;

case "sMenu10_1": //사이버 정규과정(e-러닝)

	lecMethod = "ON";
	eduPartCd = eduCd;
	if(isMobile){
		url = "<c:url value='/apply/cur/selectRegularCourseList.do?mobileYn=Y&MN=C1'/>";
	}else{
		url = "<c:url value='/apply/cur/selectRegularCourseList.do?mobileYn=N&MN=C1'/>";
	}
	break;

case "sMenu10_2": //사이버 공개과정(e-러닝)
	url = "<c:url value='/apply/cur/selectOpenCourseList.do'/>";
	eduPartCd = eduCd;
	break;

case "sMenu10_3": //공무원 정규과정(e-러닝)
	if(isMobile){
		url = "<c:url value='/apply/cur/selectRegularCourseList.do?mobileYn=Y&MN=C2'/>";
	}else{
		url = "<c:url value='/apply/cur/selectRegularCourseList.do?mobileYn=N&MN=C2'/>";
	}
	eduPartCd = eduCd;
	lecMethod = "ON";
	break;

case "sMenu10_5": //새해농업인실용교육 사이버 공개과정(e-러닝)
	if (loginCheck()) {
		url = "<c:url value='/apply/cur/selectOpenCourseList.do'/>";
		eduPartCd = eduCd;

		break;
	} else {
		//url = "<c:url value='/uat/uia/loginUsr.do'/>";
		popup = true;
		break;
	}

case "sMenu10_6": //새해농업인실용교육 사이버 공개과정(B/L과정)
	url = "<c:url value='/apply/cur/selectRegularCourseList.do'/>";
	eduPartCd = "";
	lecMethod = "BL";
	break;

case "sMenu10_7": //협업과정(e-러닝)
	url = "<c:url value='/apply/cur/selectRegularCourseList.do'/>";
	lecMethod = "ON";
	eduPartCd = eduCd;
	break;

case "sMenu10_8": //테마과정>테마과정(스마트농업)
	url = "<c:url value='/apply/cur/smart.do'/>";
	eduPartCd = eduCd;
	break;
case "sMenu10_8_1": //테마과정>테마과정(스마트농업)
	url = "<c:url value='/apply/cur/smart.do'/>";
	eduPartCd = eduCd;
	break;
case "sMenu10_8_2": //테마과정>테마과정(디지털배움터)
	url = "<c:url value='/apply/cur/selectDisitalList.do'/>";
	eduPartCd = eduCd;
	break;	
case "sMenu10_8_3": //테마과정>러닝맵과정
	url = "<c:url value='/apply/cur/selectLearningMapCourseList.do'/>";
	eduPartCd = eduCd;
	break;		
case "sMenu10_8_4": //테마과정>세트과정
	url = "<c:url value='/apply/cur/selectSetCourseTotList.do'/>";
	eduPartCd = eduCd;
	break;

case "sMenu2_12": //수요조사
	url = "<c:url value='/apply/demand/selectEduDemandSchList.do'/>";
	menuPage = "1";
	pageNum = "6";
	break;

case "sMenu2_13": //현장실습 보고서
	if (loginCheck()) {
		url = "<c:url value='/front/nal/selectNewAndLeaderList.do'/>";
		break;
	} else {
		popup = true;
		break;
	}

case "sMenu2_14": //선도농가 등록
	if (loginCheck()) {
		url = "<c:url value='/front/fpe/selectLeadFarmerList.do'/>";
		break;
	} else {
		popup = true;
		break;
	}

case "sMenu2_15": //연수생 등록
	if (loginCheck()) {
		url = "<c:url value='/front/fpe/selectFieldPlaceApprovalList.do'/>";
		break;
	} else {
		popup = true;
		break;
	}
case "sMenu9_7": //출석관리
	if (loginCheck()) {

	 	let today = new Date();
		let month = ('0' + (today.getMonth() + 1)).slice(-2);
		url = "<c:url value='/mbl/pos/selectFarmPositivityList.do?pMonth=" +month+ "'/>";
		break;
	} else {
		popup = true;
		break;
	}

	//나의 강의실
case "sMenu3_1": //신청중인과정
	if (loginCheck()) {
		url = "<c:url value='/myClass/lect/selectLectureList.do?suadd=Y'/>";
		break;
	} else {
		//url = "<c:url value='/uat/uia/loginUsr.do'/>";
		//menuPage = "6";
		//pageNum = "1";
		popup = true;
		//alert("##");
		break;
	}

case "sMenu3_2": //교육중인과정
	if (loginCheck()) {
		//if(isMobile){
			url = "<c:url value='/myClass/lect/selectLectureEduIngList.do'/>";
		//}else{
		//	url = "<c:url value='/myClass/lect/selectLectureEduIngList.do?mobileYn=N'/>";
		//}
		break;
	} else {
		//url = "<c:url value='/uat/uia/loginUsr.do'/>";
		//menuPage = "6";
		//pageNum = "1";
		popup = true;
		break;
	}


case "sMenu3_2_1": //교육중인과정
	if (loginCheckB("A")) {
		//if(isMobile){
			url = "<c:url value='/myClass/lect/selectLectureEduIngList.do'/>";
		//}else{
		//	url = "<c:url value='/myClass/lect/selectLectureEduIngList.do?mobileYn=N'/>";
		//}
		break;
	} else {
		//url = "<c:url value='/uat/uia/loginUsr.do'/>";
		//menuPage = "6";
		//pageNum = "1";
		popup = true;
		break;
	}


case "sMenu3_3": //완료된과정
	if (loginCheck()) {
		url = "<c:url value='/myClass/certi/selectEduCertiList.do'/>";
		break;
	} else {
		//url = "<c:url value='/uat/uia/loginUsr.do'/>";
		//menuPage = "6";
		//pageNum = "1";
		popup = true;
		break;
	}

case "sMenu3_3_1": //완료된과정
	if (loginCheckB("B")) {
		url = "<c:url value='/myClass/certi/selectEduCertiList.do'/>";
		break;
	} else {
		//url = "<c:url value='/uat/uia/loginUsr.do'/>";
		//menuPage = "6";
		//pageNum = "1";
		popup = true;
		break;
	}

case "sMenu3_4": //현업적용도평가
	if (loginCheck()) {
		url = "<c:url value='/myClass/work/selectWorkAppPollList.do'/>";
		break;
	} else {
		//url = "<c:url value='/uat/uia/loginUsr.do'/>";
		//menuPage = "6";
		//pageNum = "1";
		popup = true;
		break;
	}

case "sMenu3_5": //과정개설건의
	if (loginCheck()) {
		url = "<c:url value='/apply/req/selectRequestCourseList.do'/>";
		break;
	} else {
		popup = true;
		break;
	}

case "sMenu3_6": //마일리지현황
	if (loginCheck()) {
		url = "<c:url value='/myClass/mile/selectMyMileageList.do'/>";
		break;
	} else {
		//url = "<c:url value='/uat/uia/loginUsr.do'/>";
		//menuPage = "6";
		//pageNum = "1";
		popup = true;
		break;
	}

case "sMenu3_7": //대기중인과정
	if (loginCheck()) {
		url = "<c:url value='/myClass/lect/selectLectureWaitList.do?suadd=Y'/>";
		break;
	} else {
		//url = "<c:url value='/uat/uia/loginUsr.do'/>";
		//menuPage = "6";
		//pageNum = "1";
		popup = true;
		//alert("##");
		break;
	}
	
case "sMenu3_8": //역량진단
	if (loginCheck()) {
		if(abilityTargetCheck()){
			url = "<c:url value='/ability/selectAbilityDgnssCourse.do'/>";
			break;
		}else{
			popup = true;
			break;
		}
		
	} else {
		
		popup = true;
		break;
	}	
	
case "sMenu3_9": //역량진단결과
	if (loginCheck()) {
		if(abilityTargetCheck()){
			url = "<c:url value='/ability/selectAbilityDgnssCourseResult.do'/>";
			break;
		}else{
			popup = true;
			break;
		}
	} else {
		//url = "<c:url value='/uat/uia/loginUsr.do'/>";
		//menuPage = "6";
		//pageNum = "1";
		popup = true;
		//alert("##");
		break;
	}
	
case "sMenu3_10": //권한신청
	if (loginCheck()) {
		url = "<c:url value='/myClass/mrm/selectAuthApplyList.do'/>";
		break;
	} else {
		//url = "<c:url value='/uat/uia/loginUsr.do'/>";
		//menuPage = "6";
		//pageNum = "1";
		popup = true;
		//alert("##");
		break;
	}

case "sMenu4_1": //공지사항
	url = "<c:url value='/board/selectNoticeList.do'/>";
	bbsId = "BBSMSTR_000000000001";
	$("#notice_gubun").val("NOTICE");
	break;

case "sMenu4_2": //농촌HRD뉴스
	url = "<c:url value='/board/selectFarmHrdNewsList.do'/>";
	bbsId = "BBSMSTR_000000000001";
	$("#notice_gubun").val("NOTICE");
	break;

case "sMenu4_3": //관련법규
	url = "<c:url value='/board/selectRechtssatzList.do'/>";
	bbsId = "BBSMSTR_000000000003";
	$("#notice_gubun").val("NOTICE");
	break;

case "sMenu4_4": //자주묻는질문
	url = "<c:url value='/board/selectFaqList.do'/>";
	break;

case "sMenu4_5": //새해농업인자료실
	url = "<c:url value='/board/selectBoardList.do'/>";
	bbsId = "BBSMSTR_000000000002";
	break;

case "sMenu4_6": //포토갤러리
	url = "<c:url value='/board/selectPhotoList.do'/>";
	bbsId = "BBSMSTR_000000000023";
	$("#notice_gubun").val("NOTICE");
	break;

case "sMenu4_7": //커뮤니티
	if (loginCheck()) {
		popup = true;
		// 				var param = "cmmntyId=CMMNTY_0000000000081";
		window.open("<c:url value='/cop/cmy/CmmntyMain.do'/>", "_blank",
				"width=990,height=857, scrollbars=1, resizable=1, location=1");
		break;
	} else {
		//url = "<c:url value='/uat/uia/loginUsr.do'/>";
		//menuPage = "6";
		//pageNum = "1";
		popup = true;
		break;
	}

case "sMenu4_8": //강사 풀
	if (loginCheck()) {
		url = "<c:url value='/front/board/lcm/selectLecturerManageList.do'/>";
		break;
	} else {
		//url = "<c:url value='/uat/uia/loginUsr.do'/>";
		//menuPage = "6";
		//pageNum = "1";
		popup = true;
		break;
	}

case "sMenu4_9": //시·도 교육안내
	url = "<c:url value='/front/pfc/performanceList.do'/>";
	break;

case "sMenu4_10": //동영상 자료
	url = "<c:url value='/board/selectBoardList.do'/>";
	bbsId = "BBSMSTR_000000000248";
	break;

case "sMenu4_11": //일반 자료
	url = "<c:url value='/board/selectBoardList.do'/>";
	bbsId = "BBSMSTR_000000000249";
	break;

case "sMenu4_12": //교재자료실
	url = "<c:url value='/board/selectBoardList.do'/>";
	bbsId = "BBSMSTR_000000000258";
	break;

case "sMenu4_13": //질문방
	url = "<c:url value='/board/selectQnABoardList.do'/>";
	bbsId = "BBSMSTR_100000000000";
	break;

case "sMenu4_14": //관련규정
	url = "<c:url value='/board/selectRechtssatzList.do'/>";
	bbsId = "BBSMSTR_000000000003";
	break;

case "sMenu12_27": //이용안내
	if(eduCd == "email"){
		url = "<c:url value='/info/useInformation.do?MN=E4#email'/>";
	} else{
		url = "<c:url value='/info/useInformation.do?MN=E4#dataUsePolicy'/>";
	}
	break;

case "sMenu4_8": //강사 풀
	url = "<c:url value='/front/board/lcm/selectLecturerManageList.do'/>";
	break;

//기관소개
case "sMenu5_1": //기관 소개 인사말
	url = "<c:url value='/info/useInformation.do?MN=F1'/>";
	break;

case "sMenu5_2": //미션과 비전
	url = "<c:url value='/info/useInformation.do?MN=F2'/>";
	break;

case "sMenu5_3": //조직 및 기능
	url = "<c:url value='/info/useInformation.do?MN=F4'/>";
	break;

case "sMenu5_4": //연혁
	url = "<c:url value='/info/useInformation.do?MN=F3'/>";
	break;

/* 	case "sMenu5_5" :  //시설안내
		url = "<c:url value='/info/useInformation.do'/>";
		break; */

case "sMenu5_6_1": //찾아오시는길
	url = "<c:url value='/info/useInformation.do?MN=F5'/>";
	break;

case "sMenu5_6_2": //찾아오시는길
	url = "<c:url value='/info/useInformation.do'/>";
	break;

case "sMenu5_6_3": //찾아오시는길
	url = "<c:url value='/info/useInformation.do'/>";
	break;

case "sMenu5_7": //주간식단
	url = "<c:url value='/info/selectSikdanList.do'/>";
	break;
case "sMenu5_8": //주변시설안내
	url = "<c:url value='/info/selectNearPlaceList.do'/>";
	break;
case "sMenu5_10": //견학코스안내
	url = "<c:url value='/exp/experienceCourse.do'/>";
	break;
case "sMenu5_11": //견학예약
	url = "<c:url value='/exp/selectExperReservation.do'/>";
	break;
case "sMenu5_12": //예약내역 조회 수정
	url = "<c:url value='/exp/selectExperienceInfo.do'/>";
	break;

//로그인
case "login": //로그인
	url = "<c:url value='/uat/uia/loginUsr.do'/>";
	menuPage = '6';
	pageNum = '1';
	break;

case "center": //로그인
	url = "/ehrd_front/ehrdMainIndex.do";
	alert("농촌인적자원개밣센터에서 로그인 후 접속해주세요.");
	break;

case "loginGBA": //로그인
	url = "<c:url value='/uat/uia/loginUsr.do?mainLogin=A'/>";
	menuPage = '6';
	pageNum = '1';
	break;

case "loginGBB": //로그인
	url = "<c:url value='/uat/uia/loginUsr.do?mainLogin=B'/>";
	menuPage = '6';
	pageNum = '1';
	break;

case "sMenu6_2": // 통합회원 ID/PW 찾기
	popup = true;
	window
			.open(
					'http://sso.rda.go.kr:8001/rda_idp/register/rda/member_idpwsearch.jsp',
					'',
					'toolbar=0,directories=0,status=no,menubar=0,scrollbars=yes,resizable=no,width=625,height=370');
	break;

case "sMenu8_1": //마이페이지
	url = "<c:url value='/myp/selectUserDetail.do'/>";
	break;

case "sMenu8_2": // 회원가입
	popup = true;
	window
			.open(
					'http://sso.rda.go.kr:8001/rda_idp/register/rda/member_agreement.jsp',
					'',
					'toolbar=0,directories=0,status=no,menubar=0,scrollbars=yes,resizable=no,width=710,height=600');
	break;

case "sMenu8_3": // ID/PW 찾기
	popup = true;
	window
			.open(
					"/ehrd/front/main/selectIdPasswdSearch",
					"_blank",
					"width=625,height=550, menubra=no, toolbar=no, location=no, resizable=no, status=no, scrollbars=yes");
	//window.open("https://hrd.rda.go.kr:2360/ehrd/front/main/selectIdPasswdSearch", "_blank", "width=625,height=370, scrollbars=1, resizable=1, location=1, menubra=no, toolbar=no, location=no, resizable=no, status=no, scrollbars=no");
	break;

case "sMenu8_4": // 통합회원가입안내
	popup = true;
	window
			.open(
					'http:/sso_manual1.jsp',
					'',
					'toolbar=0,directories=0,status=no,menubar=0,scrollbars=yes,resizable=no,width=650,height=600');
	break;

case "sMenu8_5": // 민원신청
	popup = true;
	//window.open("http://www.rda.go.kr/board/board.do?mode=sub_main&menu_id=peo&menu_nm", "_blank", "width=700,height=1550, scrollbars=1, resizable=1, location=1");
	//국민신문고 임시로 넣어놈 -- 농진청의 anc_code, channel, menu_code 받아야 함
	window
			.open(
					"http://www.epeople.go.kr/jsp/user/frame/pc/cvreq/UPcCvreqForm.jsp?anc_code=1341000&channel=1341129&menu_code=PC001",
					"_blank",
					"width=700,height=1550, scrollbars=1, resizable=1, location=1");
	break;
case "sMenu9_1": //귀농현장실습
	url = "<c:url value='/front/nal/selectNewAndLeaderList.do'/>";
	break;
case "sMenu9_2": //미션
	url = "<c:url value='/front/nal/selectMissionList.do'/>";
	break;
case "sMenu9_3": //자유모임
	url = "<c:url value='/front/nal/selectFreeMeetingInfoList.do'/>";
	break;
case "sMenu9_4": //선도농가 등록 풀
	url = "<c:url value='/front/fpe/selectLeadFarmerList.do'/>";
	break;
case "sMenu9_5": //현장실습교육 신청
	url = "<c:url value='/front/fpe/selectFieldPlaceApprovalList.do'/>";
	break;
case "sMenu9_6": //나의창업센터
	url = "<c:url value='/front/smp/myStartModelPlanList.do'/>";
	break;
case "sMenu11_1": //농업인대학 찾기
	url = "<c:url value='/front/fmuv/main/fmuvMainList.do' />";
	break;
case "sMenu11_2": //농업인대학 공지사항
	url = "<c:url value='/front/fmuv/main/fmuvFileroomList.do' />?gubun=NOT";
	break;
case "sMenu11_3": //농업인대학 자유게시판
	//url = "<c:url value='/front/fmuv/main/fmuvFileroomMain.do' />?gubun=F_NOT";
	url = "<c:url value='/front/fmuv/main/selectFmuvFreeBoardList.do' />?gubun=F_NOT";
	bbsId = "BBSMSTR_000000000269";
	break;
case "sMenu11_4": //농업인대학 소개
	url = "<c:url value='/front/fmuv/main/fmuvIntroduction.do' />";
	break;
case "sMenu12_3": //예산내역서
	url = "<c:url value='/board/selectInfoOpenBoardList.do'/>";
	bbsId = "BBSMSTR_000000000281";
	break;
case "sMenu12_4": //직원 국외출장 현황
	url = "<c:url value='/board/selectInfoOpenBoardList.do'/>";
	bbsId = "BBSMSTR_000000000283";
	break;
case "sMenu12_37": //보유물품현황
	url = "<c:url value='/board/selectInfoOpenBoardList.do'/>";
	bbsId = "BBSMSTR_000000000358";
	break;
case "sMenu12_38": //정보공개처리현황
	url = "<c:url value='/board/selectInfoOpenBoardList.do'/>";
	bbsId = "BBSMSTR_000000000359";
	break;
/*
case "sMenu12_24" : //교육훈련규정
url = "<c:url value='/board/selectInfoOpenBoardList.do'/>";
bbsId = "BBSMSTR_000000000351";
break;
case "sMenu12_24" : //학사관리규정
url = "<c:url value='/board/selectInfoOpenBoardList.do'/>";
bbsId = "BBSMSTR_000000000351";
break;
case "sMenu12_24" : //교육시설물 이용규정
url = "<c:url value='/board/selectInfoOpenBoardList.do'/>";
bbsId = "BBSMSTR_000000000351";
break;
case "sMenu12_24" : //사무분장규정
url = "<c:url value='/board/selectInfoOpenBoardList.do'/>";
bbsId = "BBSMSTR_000000000351";
break;
case "sMenu12_24" : //위임전결규정
url = "<c:url value='/board/selectInfoOpenBoardList.do'/>";
bbsId = "BBSMSTR_000000000351";
break;
case "sMenu12_24" : //법령심의위원회 운영규정
url = "<c:url value='/board/selectInfoOpenBoardList.do'/>";
bbsId = "BBSMSTR_000000000351";
break;
case "sMenu12_24" : //당직 및 비상근무규정
url = "<c:url value='/board/selectInfoOpenBoardList.do'/>";
bbsId = "BBSMSTR_000000000351";
break;
 */
case "sMenu12_12": //각종홍보, 보도자료
	url = "<c:url value='/board/selectInfoOpenBoardList.do'/>";
	bbsId = "BBSMSTR_000000000296";
	break;
case "sMenu12_13": //전자문서 목록대장
	url = "<c:url value='/board/selectInfoOpenBoardList.do'/>";
	bbsId = "BBSMSTR_000000000297";
	break;
case "sMenu12_14": //시설견학 실적
	url = "<c:url value='/board/selectInfoOpenBoardList.do'/>";
	bbsId = "BBSMSTR_000000000298";
	break;
case "sMenu12_15": //기관장업무추진비
	url = "<c:url value='/board/selectInfoOpenBoardList.do'/>";
	bbsId = "BBSMSTR_000000000318";
	break;
case "sMenu12_16": //기관장업무추진비
	url = "<c:url value='/board/selectInfoOpenBoardList.do?MN=G3'/>";
	bbsId = "BBSMSTR_000000000328";
	break;
case "sMenu12_0": //정보공개메인
	url = "<c:url value='/board/selectInfoOpenBoardList.do?MN=G2'/>";
	bbsId = "BBSMSTR_000000000308";
	break;
case "sMenu15_1": //ASP 공지사항
	url = "<c:url value='/board/selectNoticeList.do'/>";
	bbsId = "BBSMSTR_000000000001";
	$("#notice_gubun").val("NOTICE");
	break;
case "sMenu12_17": //정보공개제도란?
	url = "<c:url value='/board/selectInfoOpenBoardList.do?MN=G1'/>";
	bbsId = "BBSMSTR_000000000340";
	break;
case "sMenu12_18": //정보공개방법
	url = "<c:url value='/board/selectInfoOpenBoardList.do'/>";
	bbsId = "BBSMSTR_000000000341";
	break;
case "sMenu12_19": //관련법령 및 서식
	url = "<c:url value='/board/selectInfoOpenBoardList.do'/>";
	bbsId = "BBSMSTR_000000000342";
	break;
case "sMenu12_20": //청구 및 처리절차
	url = "<c:url value='/board/selectInfoOpenBoardList.do'/>";
	bbsId = "BBSMSTR_000000000343";
	break;
case "sMenu12_21": //불복구제절차
	url = "<c:url value='/board/selectInfoOpenBoardList.do'/>";
	bbsId = "BBSMSTR_000000000344";
	break;
case "sMenu12_22": //청구권자 및 대상정보
	url = "<c:url value='/board/selectInfoOpenBoardList.do'/>";
	bbsId = "BBSMSTR_000000000345";
	break;
case "sMenu12_23": //수수료
	url = "<c:url value='/board/selectInfoOpenBoardList.do'/>";
	bbsId = "BBSMSTR_000000000346";
	break;
case "sMenu12_24": //기관 운영 관련 규정
	url = "<c:url value='/board/selectInfoOpenBoardList.do?MN=G4'/>";
	bbsId = "BBSMSTR_000000000350";
	break;
case "sMenu12_26": //공공데이터개방
	url = "<c:url value='/board/selectInfoOpenBoardList.do?MN=G6'/>";
	bbsId = "BBSMSTR_000000000350";
	break;
case "sMenu12_1": //교육훈련종합평가서
	url = "<c:url value='/board/selectInfoOpenBoardList.do'/>";
	bbsId = "BBSMSTR_000000000278";
	break;
case "sMenu12_2": //교육훈련계획서
	url = "<c:url value='/board/selectInfoOpenBoardList.do'/>";
	bbsId = "BBSMSTR_000000000279";
	break;

case "sMenu16_1": //마이크로러닝
	url = "<c:url value='/apply/cur/selectMclCourseHomeList.do'/>";
	//eduPartCd = eduCd;
	break;
case "sMenu16_2": //러닝맵과정
	url = "<c:url value='/apply/cur/selectLearningMapCourseList.do'/>";
	eduPartCd = eduCd;
	break;
case "sMenu16_3": //세트과정
	url = "<c:url value='/apply/cur/selectSetCourseTotList.do'/>";
	eduPartCd = eduCd;
	break;
case "sMenu16_4": //비정형학습자료
	url = "<c:url value='/apply/cur/selectAtypicalCourseList.do'/>";
	bbsId = "setCourse";
	eduPartCd = eduCd;
	break;
case "sMenu16_6": //테마과정(스마트농업)
	url = "<c:url value='/apply/cur/smart.do'/>";
	eduPartCd = eduCd;
	break;
case "sMenu16_7": //테마과정(디지털배움터)(스마트농업)
	url = "<c:url value='/apply/cur/selectDisitalList.do'/>";
	eduPartCd = eduCd;
	break;	
case "sMenu16_5": //분류별강좌
	url = "<c:url value='/apply/cur/selectMclClList.do'/>";
	break;

}

if (menu == "sMenu5_11") {

	/* var _width = '550';
    var _height = '600';

    // 팝업을 가운데 위치시키기 위해 아래와 같이 값 구하기 - 임시 팝업
    var _left = Math.ceil(( window.screen.width - _width )/2);
    var _top = Math.ceil(( window.screen.height - _height )/2);
   // $('#popupArea1').css("margin-left",_left+"px");
	var popupArea = $('#popupArea1');
	popupArea.find('#pop_type_11').delay(1*40).fadeIn("slow");
	popCss.draggable({cancel: ".pop_content1"});
	return;
 */
	// 로그인 할 경우에만 페이지 진입 - 견학예약 풀리면 그때 위 팝업 주석 후 아래 주석 풀어야 함.
	var loginyn = "0";
	<c:if test="${empty sessionScope.sUserId}">
		loginyn = "1";
	</c:if>

	if(loginyn == "1"){
		loginCheck();
		return;
	}else{
		url = "<c:url value='/exp/selectExperReservation.do'/>";
	}

}
if (menu == "sMenu16_4") {
	//alert("비정형학습은 준비중입니다.");
	//return;
}
if (eduPartCd != null) {
	frm.eduPartCd.value = eduPartCd;
}
if (lecMethod != null) {
	frm.lecMethod.value = lecMethod;
}
if (popup) {
	return;
} else {
	frm.menuFormMenuPage.value = menuPage;
	frm.menuFormPageNum.value = pageNum;
	frm.menuFormDetailNum.value = detailNum;
	frm.bbsId.value = bbsId;
	frm.action = url;
	frm.submit();
}
}
//ASP 용
function topAspMenu(menu, eduCd, gubun) {
var frm = document.menuForm;
var url = null;
var params = menu.split('_');
var pageNum = null;
var detailNum = null;
var bbsId = "";
var lecMethod = "";
var menuPage = params[0].replace("sMenu", "");
if (params.length == 2)
	pageNum = params[params.length - 1];
else {
	pageNum = params[params.length - 2];
	detailNum = params[params.length - 1];
}

var popup = false;

var eduPartCd = "";

switch (menu) {
case "sMenu10_1": //기본교육(e-러닝)
	url = "<c:url value='/apply/cur/selectRegularCourseList.do?MN=A'/>";
	lecMethod = "ON";
	eduPartCd = eduCd;
	break;

case "sMenu10_2": //마이크로닝(e-러닝)
	url = "<c:url value='/apply/cur/selectOpenCourseList.do'/>";
	eduPartCd = eduCd;
	break;

case "sMenu16_1": //마이크로닝
	url = "<c:url value='/apply/cur/selectMclCourseHomeList.do'/>";
	//eduPartCd = eduCd;
	break;
}
if (eduPartCd != null) {
	frm.eduPartCd.value = eduPartCd;
}
if (lecMethod != null) {
	frm.lecMethod.value = lecMethod;
}
docume
if (popup) {
	return;
} else {
	frm.menuFormMenuPage.value = menuPage;
	frm.menuFormPageNum.value = pageNum;
	frm.menuFormDetailNum.value = detailNum;
	frm.bbsId.value = bbsId;
	frm.asp_gubun.value = gubun;
	frm.action = url;
	frm.submit();
}
}

/**
 * 공통파일 다운로드
 * @param propName			: 프로퍼티명
 * @param svrFileName		: 업로드파일명
 * @param originalFileName  : 실제파일명
 */
function fn_common_downFile(propName, svrFileName, originalFileName) {
var url = "<c:url value='/cmm/fms/commonFileDown.do'/>" + "?propName="
		+ propName + "&svrFileName=" + svrFileName + "&originalFileName="
		+ encodeURI(originalFileName, "UTF-8");
window.location.href = url;
}

function logOut() {
document.menuForm.action = "<c:url value='/uat/uia/userLogout.do'/>";
document.menuForm.submit();
}

function lecturerPoolAuthorCheck() {
var param = "0";
$.ajax({
	type : "post",
	url : "<c:url value='/com/lecturerPoolAuthorCheck.do' />",
	dataType : "json",
	data : {},
	async : false,
	success : function(data) {
		if (data.resultCode == "0") {
			if (confirm("강사풀 메뉴를 열람하실 수 있는 권한이없습니다. \n\n열람 신청을 하시겠습니까?")) {
				$.ajax({
					type : "post",
					url : "<c:url value='/com/lecturerPoolAuthorInsert.do' />",
					dataType : "json",
					data : {},
					async : true,
					success : function(data) {
						alert("열람신청이 완료되었습니다. \n\n관리자의 승인 후 열람이 가능합니다.");
						param = "0";
					},
					error : function(data, status) {
						alert(status);
					}
				});
			}
			param = "0";
		} else if (data.resultCode == "1") {
			alert("현재 열람 신청 후 관리자의 승인처리가 안 된 상태입니다.");
			param = "0";
		} else {
			param = "1";
		}
	},
	error : function(data, status) {
		alert(status);
	}
});
return param;
}

function lecturerPoolAuthorInsert() {
$.ajax({
	type : "post",
	url : "<c:url value='/com/lecturerPoolAuthorInsert.do' />",
	dataType : "json",
	data : {},
	async : true,
	success : function(data) {
		//alert(11);
		//alert("열람신청이 완료되었습니다. \n\n관리자의 승인 후 열람이 가능합니다.");
	},
	error : function(data, status) {
		alert(status);
	}
});
}

var iZoomPercent = 0;

function funcZoom(param) {
//     if(navigator.userAgent.toLowerCase().indexOf("msie")!=-1)
//     {
//alert(document.getElementById("warpper"));
if (document.body.style.zoom == null || document.body.style.zoom == "")
	iZoomPercent = 100;

if (param == "in")
	iZoomPercent = iZoomPercent + 10;
else
	iZoomPercent = iZoomPercent - 10;

if (iZoomPercent > 200)
	iZoomPercent = 200;

if (iZoomPercent < 50)
	iZoomPercent = 50;

document.body.style.zoom = iZoomPercent + "%";
//     }
}

//통합검색
function searchApi(param) {
var url = "https://hrd.rda.go.kr/ehrd_front/search/search.jsp?query=" + param;
window.open(url, '_self');
}

//모바일 메뉴 컨버트
function mbl_top_menu_convert(v) {
	console.log(v.split(','));
	if(v.indexOf(',') > -1) {
		var menu = v.split(',');
		topMenu( menu[0], menu[1] );
	} else {
		topMenu( v );
	}
}
</script>
</head>
<body>
<div id="skip">
	<a href="#con_content">본문으로 바로가기</a> 
	<a href="#con_navbar">메인메뉴로 바로가기</a>
	<a href="#con_footer">하단으로 바로가기</a>
</div>
<!-- 리뉴엘 상단 시작 -->
<form name="menuForm" id="menuForm" method="post">
	<input type="hidden" name="menuFormMenuPage" value="<c:out value="${menuFormMenuPage }" escapeXml="fasle"/>">
	<input type="hidden" name="menuFormPageNum" value="<c:out value="${menuFormPageNum }" escapeXml="fasle"/>">
	<input type="hidden" name="menuFormDetailNum" value="<c:out value="${menuFormDetailNum }" escapeXml="fasle"/>">
	<input type="hidden" name="eduPartCd" value="<c:out value="${eduPartCd }" escapeXml="fasle"/>">
	<input type="hidden" name="bbsId" value="<c:out value="${bbsId }" escapeXml="fasle"/>">
	<input type="hidden" name="lecMethod" value="<c:out value="${lecMethod }" escapeXml="fasle"/>">
	<input type="hidden" name="notice_gubun" id="notice_gubun" value="">
	<input type="hidden" name="asp_gubun" id="asp_gubun" value="Y">
</form>
<c:set var="path" value="${requestScope['javax.servlet.forward.servlet_path']}"/>
<section class="layout">
	<header>
		<div class="header_inner">
			<h1 class="haeder_logo">
				<a href="<c:url value='/ehrdMainIndex.do'/>">
					<img src="<c:url value='/assets/images/new/main-page/logo.png'/>" alt="logo">
				</a>
			</h1>
			<c:if test="${!fn:contains(path, 'ehrdMainIndex.do')}">
				<section class="gnb-menu-wrap-center">
					<nav class="menu-wrap">
						<ul>
						    <li class="btn">
						        <div>기관소개</div>
						        <ul class="gnb-2depth" >
						            <li><a href="javascript:topMenu( 'sMenu5_1' );"><span>인사말</span></a></li>
						            <li><a href="javascript:topMenu( 'sMenu5_2' );"><span>미션과비전</span></a></li>
						            <li><a href="javascript:topMenu( 'sMenu5_4' );"><span>연혁</span></a></li>
						            <li><a href="javascript:topMenu( 'sMenu5_3' );"><span>조직및기능</span></a></li>
						            <li><a href="javascript:topMenu( 'sMenu5_6_1' );"><span>찾아오시는길</span></a></li>
						            <li><a href="javascript:topMenu( 'sMenu5_10' );"><span>스마트농업기계교육관</span></a></li>
						        </ul>
						    </li>
						</ul>
						<ul>
						    <li class="btn">
						        <div>교육안내</div>
						        <ul class="gnb-2depth">
						            <li>
						            	<a href="javascript:topMenu( 'sMenu1_8' );"><span>교육운영방향</span></a>
							            <!-- 
							            <ul>
										    <li><a href="#">중점추진방향</a></li>
										    <li><a href="#">교육분류체계</a></li>
										</ul> 
										-->
						      		</li>
						            <li><a href="javascript:topMenu( 'sMenu1_9' );"><span>교육계획안내</span></a></li>
						        </ul>
						    </li>
						</ul>
						<ul>
						    <li class="btn">
						        <div>열린마당</div>
						        <ul class="gnb-2depth">
						            <li><a href="javascript:topMenu( 'sMenu1_5' );"><span>공지사항</span></a></li>
						            <li><a href="javascript:topMenu( 'sMenu4_13' );"><span>질문방</span></a></li>
						            <li><a href="javascript:topMenu( 'sMenu4_10','BBSMSTR_000000000248' );"><span>자료실</span></a></li>
						            <li><a href="javascript:topMenu( 'sMenu4_6' );"><span>포토갤러리</span></a></li>
						        </ul>
						    </li>
						</ul>
						<ul>
							<li class="btn">
							    <div>정보공개</div>
							    <div>
							        <ul class="gnb-2depth">
							            <li><a href="javascript:topMenu('sMenu12_17');"><span>정보공개제도안내</span></a>
							            <!-- <ul>
							             <li><a href="#">정보공개제도안내</a></li>
							             <li><a href="#">정보공개제방법</a></li>
							             <li><a href="#">관련법령및서식</a></li>
							             <li><a href="#">청구및처리절차</a></li>
							             <li><a href="#">불복구제절차</a></li>
							             <li><a href="#">청구권자및대상정보</a></li>
							             <li><a href="#">수수료</a></li>
							         </ul> -->
							         </li>
							         <li><a href="javascript:topMenu('sMenu12_0');"><span>사전정보공개</span></a></li>
							         <li><a href="javascript:topMenu('sMenu12_16');"><span>비공개대상정보</span></a></li>
							         <li><a href="javascript:topMenu('sMenu12_24');"><span>정보공개내용</span></a>
							             <!-- <ul>
							                 <li><a href="#">기관 운영관련규정</a></li>
							                 <li><a href="#">교육훈련계획서</a></li>
							                 <li><a href="#">예산내역서</a></li>
							                 <li><a href="#">기관장업무추진비</a></li>
							                 <li><a href="#">직원 국외출장현황</a></li>
							                 <li><a href="#">각종홍보보도자료</a></li>
							                 <li><a href="#">보유물품현황</a></li>
							                 <li><a href="#">정보공개처리현황</a></li>
							             </ul> -->
							         </li>
							         <li><a href="javascript:topMenu('sMenu12_26');"><span>공공데이터개방</span></a></li>
							         <li><a href="javascript:topMenu( 'sMenu12_27' );"><span>이용안내</span></a>
							             <!-- <ul>
							                 <li><a href="#">자료이용및저작권보호</a></li>
							                 <li><a href="#">개인정보처리방침</a></li>
							                 <li><a href="#">영상정보처리기기의설치근거및설치목적</a></li>
							             </ul> -->
							            </li>
							        </ul>
							    </div>
							</li>
						</ul>
					</nav>
				</section>
			</c:if>
			<ul class="mian_icon-wrap">
				<li class="main_icon i-user">
					<c:choose>
						<c:when test="${not empty sessionScope.sUserId }">
							<a href="javascript:topMenu( 'sMenu8_1' );" title="마이페이지 바로가기">
								<img src="<c:url value='/assets/images/new/main-page/i_user.svg'/>" alt="마이페이지">
							</a>
						</c:when>
						<c:otherwise>
							<a href="javascript:topMenu( 'sMenu8_2' );" title="회원가입 바로가기">
								<img src="<c:url value='/assets/images/new/main-page/i_user.svg'/>" alt="회원가입">
							</a>
						</c:otherwise>
					</c:choose>
				</li>
				<li class="main_icon i-src"><a href="#"><img src="<c:url value='/assets/images/new/main-page/i_serach.svg'/>" alt="검색"></a></li>
				<li class="main_icon i-menu"><a id="con_navbar" href="javascript:fn_siteMapView(this);"><img src="<c:url value='/assets/images/new/main-page/i_hamburger.svg'/>" alt="전체메뉴"></a></li>
			</ul>
		</div>
	</header>
	
	<div class="site--all--menu--popup">
		<div class="popup-header-wrap">
			<div class="header_inner popup-header">
			    <h1 class="haeder_logo">
			        <a href="<c:url value='/ehrdMainIndex.do'/>">
			            <img src="<c:url value='/assets/images/new/main-page/logo.png'/>" alt="로고" />
			        </a>
			    </h1>
			    <ul class="mian_icon-wrap">
			        <li class="main_icon i-menu">
			        	<a href="javascript:fn_siteMapView(this);"><img src="<c:url value='/assets/images/new/main-page/i_sub_closed.svg'/>" alt="닫기" /></a>
			        </li>
			    </ul>
			</div>
		</div>
		<div class="site--menu--popup--wrap">
		    <ul class="site--menu--wrap">
		        <li class="menu-popup-wrap">
		            <div class="menu-tit">기관소개</div>
		            <ul class="site--menu--ul">
		                <li><a href="javascript:topMenu( 'sMenu5_1' );"><span>인사말</span></a></li>
		                <li><a href="javascript:topMenu( 'sMenu5_2' );"><span>미션과비전</span></a></li>
		                <li><a href="javascript:topMenu( 'sMenu5_4' );"><span>연혁</span></a></li>
		                <li><a href="javascript:topMenu( 'sMenu5_3' );"><span>조직및기능</span></a></li>
		                <li><a href="javascript:topMenu( 'sMenu5_6_1' );"><span>찾아오시는길</span></a></li>
		                <li><a href="javascript:topMenu( 'sMenu5_10' );"><span>스마트농업기계교육관</span></a></li>
		            </ul>
		        </li>
		    </ul>
		    <ul class="site--menu--wrap hover-g">
		        <li class="menu-popup-wrap">
		            <div class="menu-tit bg-green">교육안내</div>
		            <ul class="site--menu--ul">
		                <li style="margin-bottom: 2.1rem;">
		                	<a href="javascript:topMenu( 'sMenu1_8' );"><span>교육운영방향</span></a>
				            <ul class="ul--text--wrap">
				                <li><a href="javascript:topMenu( 'sMenu1_8' );">중점추진방향</a></li>
				                <li><a href="#">교육분류체계</a></li>
				            </ul>
		       			 </li>
		            	<li><a href="javascript:topMenu( 'sMenu1_9' );"><span>교육계획안내</span></a></li>
		        	</ul>
			    </li>
			</ul>
			<ul class="site--menu--wrap hover-s">
			    <li class="menu-popup-wrap">
			        <div class="menu-tit bg-salmon">열린마당</div>
			        <ul  class="site--menu--ul">
			            <li><a href="javascript:topMenu( 'sMenu1_5' );"><span>공지사항</span></a></li>
			            <li><a href="javascript:topMenu( 'sMenu4_13' );"><span>질문방</span></a></li>
			            <li><a href="javascript:topMenu( 'sMenu4_10','BBSMSTR_000000000248' );"><span>자료실</span></a></li>
			            <li><a href="javascript:topMenu( 'sMenu4_6' );"><span>포토갤러리</span></a></li>
			        </ul>
			    </li>
			</ul>
			<ul class="site--menu--wrap hover-v ">
			    <li class="menu-popup-wrap">
			        <div class="menu-tit bg-violet">정보공개</div>
			        <div class="menu-con-flex">
			            <ul  class="site--menu--ul">
			                <li style="margin-bottom:2.6rem">
			             		<a href="javascript:topMenu('sMenu12_17');"><span>정보공개제도안내</span></a>
								<ul class="ul--text--wrap">
								    <li><a href="javascript:topMenu('sMenu12_17');">정보공개제도안내</a></li>
								    <li><a href="javascript:topMenu('sMenu12_17');">정보공개제방법</a></li>
								    <li><a href="javascript:topMenu('sMenu12_17');">관련법령및서식</a></li>
								    <li><a href="javascript:topMenu('sMenu12_17');">청구및처리절차</a></li>
								    <li><a href="javascript:topMenu('sMenu12_17');">불복구제절차</a></li>
								    <li><a href="javascript:topMenu('sMenu12_17');">청구권자및대상정보</a></li>
								    <li><a href="javascript:topMenu('sMenu12_17');">수수료</a></li>
								</ul>
							</li>
							<li><a href="javascript:topMenu('sMenu12_0');"><span>사전정보공개</span></a></li>
							<li><a href="javascript:topMenu('sMenu12_16');"><span>비공개대상정보</span></a></li>
						</ul>
						<ul class="site--menu--ul">
							<li style="margin-bottom: 8.3rem;">
								<a href="javascript:topMenu('sMenu12_24');"><span>정보공개내용</span></a>
						        <ul class="ul--text--wrap">
						            <li><a href="javascript:topMenu( 'sMenu12_24');">기관 운영관련규정</a></li>
						            <li><a href="javascript:topMenu( 'sMenu12_2');">교육훈련계획서</a></li>
						            <li><a href="javascript:topMenu( 'sMenu12_3');">예산내역서</a></li>
						            <li><a href="javascript:topMenu( 'sMenu12_15');">기관장업무추진비</a></li>
						            <li><a href="javascript:topMenu( 'sMenu12_4');">직원 국외출장현황</a></li>
						            <li><a href="javascript:topMenu( 'sMenu12_12');">각종홍보보도자료</a></li>
						            <li><a href="javascript:topMenu( 'sMenu12_37');">보유물품현황</a></li>
						            <li><a href="javascript:topMenu( 'sMenu12_38');">정보공개처리현황</a></li>
						        </ul>
						    </li>
						    <li><a href="javascript:topMenu('sMenu12_26');"><span>공공데이터개방</span></a></li>
						    <li>
						    	<a href="javascript:topMenu( 'sMenu12_27' );"><span>이용안내</span></a>
						        <ul class="ul--text--wrap">
						            <li><a href="javascript:topMenu( 'sMenu12_27' );">자료이용및저작권보호</a></li>
						            <li><a href="javascript:topMenu( 'sMenu1_7' );">개인정보처리방침</a></li>
						            <li><a href="javascript:topMenu( 'sMenu1_1' );">영상정보처리기기의설치근거및설치목적</a></li>
						        </ul>
						    </li>
						</ul>
					</div>
				</li>
			</ul>
		</div>
	</div>
	
	<script type="text/javascript">
		function centerMove() {
			if (confirm("농촌인적자원개발센터 홈으로 이동하시겠습니까?")) {
				location.href = "<c:url value='/ehrdMainIndex.do'/>";
			}
		}

		function closeFun1(target){
			$(target).parent().parent().fadeOut("fast");
		}
	</script>

	<div id="popupArea1" style='position:absolute;z-index:1000002;box-sizing: border-box;  margin-left: 750px; '>
		<div class="pop_layer_main1 ui-draggable" id="pop_type_11" style='background: url("/ehrd_front/images/popup/notExperience.png") no-repeat 0% 0% / 400px 350px; border: 1px solid rgb(186, 189, 191); border-image: none; left: 350px; top: 50px; width: 400px; height: 350px; font-size: 12px; display: none;'>
		  <div class="pop_content1" style="padding: 50px 108px 15px 90px; height: 200px; text-align: left; line-height: 1.2; margin-top: 84px; -ms-overflow-x: hidden; -ms-overflow-y: hidden;"><span><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </p>
		  </span>
		  </div>

		  <div class="pop_bottom" style="padding: 14px 55px 0px 90px; height: 80px; text-align: right; color: rgb(255, 255, 255); box-sizing: border-box;">
		  <a class="close2" style="background: rgb(38, 38, 38); margin: 0px 2px; padding: 3px 7px; border-radius: 0.3em; color: rgb(255, 255, 255); display: inline-block; cursor: pointer;" onclick="javascript:closeFun1(this)" herf="#">확인</a>
			</div>
		</div>
	</div>
		
	