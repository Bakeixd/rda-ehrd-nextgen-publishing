<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@page import="java.util.List"%>
<%@page import="java.net.URLEncoder"%>
<%@page import="egovframework.com.cmm.StringUtil"%>
<%@page import="com.ubintis.common.util.StrUtil"%>
<%@page import="com.ubintis.app.BaseMgt"%>
<%@page import="com.ubintis.app.SSOSessManager"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="ui" uri="http://egovframework.gov/ctl/ui"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="validator" uri="http://www.springmodules.org/tags/commons-validator" %>
<% 
     String path = request.getContextPath();
%>

<html lang="ko">
<head>
<title>농촌진흥청 농촌인적자원개발센터</title>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel='stylesheet' type='text/css' href="<c:url value='/assets/fonts/glyphicons/css/glyphicons.min.css'/>" />   
<link href="<c:url value='/assets/plugins/datatables/dataTables.css'/>" rel='stylesheet' type='text/css' media='all' id='datatablesstyle'>
<link href="<c:url value="/assets/plugins/form-daterangepicker/daterangepicker-bs3.css"/>" 	rel="stylesheet" 	type="text/css"  />
  
<link href="<c:url value='/assets/css/new/reset.css'/>" rel="stylesheet" type="text/css">
<link href="<c:url value='/assets/css/new/component.css'/>" rel="stylesheet" type="text/css">
<link href="<c:url value='/assets/css/new/font.css'/>" rel="stylesheet" type="text/css">
<link href="<c:url value='/assets/css/new/modal.css'/>" rel="stylesheet" type="text/css">
<link href="<c:url value='/assets/css/new/index-main.css'/>" rel="stylesheet" type="text/css">
<link href="<c:url value='/assets/css/new/login.css'/>" rel="stylesheet" type="text/css">

<!-- only for this page -->      
<link rel='stylesheet' type='text/css' href="<c:url value='/assets/js/jqueryui.css'/>" />
<script type='text/javascript' src="<c:url value='/assets/js/jquery-1.10.2.min.js'/>"></script>
<script type='text/javascript' src="<c:url value='/assets/js/jquery.print-preview.js'/>"></script>
<script type='text/javascript' src="<c:url value='/assets/js/jquery-migrate-1.2.1.min.js'/>"></script>
<script type='text/javascript' src="<c:url value='/assets/js/jqueryui-1.10.3.min.js'/>"></script>
<script type='text/javascript' src="<c:url value='/assets/js/bootstrap.min.js'/>"></script>
<script type='text/javascript' src="<c:url value='/assets/js/jquery.cookie.js'/>"></script>
<script type='text/javascript' src="<c:url value='/assets/js/jquery.nd.js'/>"></script> 
<script type="text/javascript" src="<c:url value='/assets/js/jquery.bpopup.min.js'/>"></script>
<script type="text/javaScript" src="<c:url value='/assets/js/conversion.js' />"></script>   
<script type="text/javascript" src="<c:url value='/js/egovframework/com/uat/uia/rsa/jsbn.js'/>" ></script>
<script type="text/javascript" src="<c:url value='/js/egovframework/com/uat/uia/rsa/rsa.js'/>" ></script>
<script type="text/javascript" src="<c:url value='/js/egovframework/com/uat/uia/rsa/prng4.js'/>" ></script>
<script type="text/javascript" src="<c:url value='/js/egovframework/com/uat/uia/rsa/rng.js'/>" ></script>

<!-- 구글아이디 로그인 라이브러리 -->
<script src="https://apis.google.com/js/platform.js" gapi_processed="true"></script>

<!-- 카카오톡 로그인 라이브러리 -->
<script src="https://developers.kakao.com/sdk/js/kakao.js"></script>

<!-- 네이버 로그인 라이브러리 -->
<script type="text/javascript" src="https://static.nid.naver.com/js/naverLogin_implicit-1.0.3.js" charset="utf-8"></script>
<script type="text/javascript" src="https://code.jquery.com/jquery-1.11.3.min.js"></script>


<%
	String app_id_self = "sp_cyber";
	String netxtUrl = "/passni/login/home_login_ok.jsp";
// 	String retUrl = "/ehrd_front/";
// 	String failUrl = "/ehrd_front/uat/uia/loginUsr.do";
	String retUrl = "/";
	String failUrl = "/uat/uia/loginUsr.do";
	String isDevelopmentMode 	= StrUtil.NVL(request.getAttribute("isDevelopmentMode"));
	System.out.println("isDevelopmentMode=>"+isDevelopmentMode);
%>
<script type="text/javascript">
<c:if test="${not empty resultMsg}">
alert('${resultMsg}');
</c:if>

<c:if test="${!empty resultPwMsg}">
	alert('<spring:message code="${resultPwMsg}" />');
</c:if>

function send(){
	var frm = document.loginFrm;
	var id = frm.userId.value;
	var pw = frm.passwd.value;
	var ssoLogin = document.ssoLogin;
	var url = new String("<%=request.getRequestURL()%>").split("WEB-INF");
		 
	if(id == null || id == "" || pw == null || pw == ""){
		alert("ID/Password를 입력하세요.");
		return false;
	}
	
	if(document.getElementById("ssoCheck").value == "Y"){
		ssoMode = true;
		document.getElementById("ssoCheck").value="Y";
	}else{
		ssoMode = false;
		document.getElementById("ssoCheck").value="N";
	}

		    if(ssoMode){
					var app_id_self = "<%=app_id_self%>";
				    var retUrl = "<c:url value='/uat/uia/userActionLogin.do'/>";
				    var failUrl = url[0];
					ssoLogin.sso_user_id.value     	= sdt_encode(id);
				    ssoLogin.sso_user_pw.value      	= sdt_encode(pw);
				
				    ssoLogin.app_id_self.value      	= app_id_self;
				    ssoLogin.retUrl.value           		= retUrl;
				    ssoLogin.failUrl.value          		= failUrl;
				
					ssoLogin.method                      = "post";
				    ssoLogin.action                        = "<c:url value='/passni/login/home_login_ok.jsp'/>";
				    ssoLogin.submit();
		    }else{
					frm.action = "<c:url value='/uat/uia/userActionLogin.do'/>";
					frm.submit();
		    }
}
/**
 * ID/PW 로그인 버튼
 */
function fSubmitSSOLoginForm(){
	var frm = document.ssoLoginForm;
	var loginId = frm.userId.value;
	var loginPasswd = frm.passwd.value;
	
	
	if( $('#userId').value == '' ){
		alert( '아이디를 입력하여 주십시요.' );
		$('#userId').focus();
		return false;
	}
	
	if( $('#passwd').value == '' ){
		alert( '비밀번호를 입력하여 주십시요.' );
		$('#passwd').focus();
		return false;
	}
	
	$('#userId').value = '';
	$('#passwd').value = '';
	
	var ssoChallenge= '3BFB3F3FCE8057FEF0B51FCA11700680090CE920';
	
	var jsonObj = {'userid':loginId, 'userpw':loginPasswd, 'ssoChallenge':ssoChallenge};
	var jsonStr = Object.toJSON( jsonObj );
	
	//document.ssoLoginForm.E2.value = rstr2hex( jsonStr );
	
	var rsa = new RSAKey();
	rsa.setPublic( '8d524f2c05170db8960d2827f5fff95100d7a30e4bb69e9278a0c4991fe6c82527c81f7996267423efc27a96e185f880f6e17614d555379308d3757924062761e1d676e3e2cf136ab51ff5b645e8da3649549f0de51ba5c4fcf725baa35c7e1ea07994c66aa6780c140d97e91677e4f3bcaf8baeda9856ccd89889687063e1cc3ff5aa9662cd191377ddde1ed3dc02029df075abd7b2f0fc60e543a8f63faaf638ae90aeda6cc76d39b559a51bbbc5c14f46dbc5cdc4819d74e32275c4725a317398a8bb3ddfa4d5428ed11b1a4042b570c75d078a2b4bfff126ae91f3a9660c773cca1dd4b5521dd4db6186cd203c48723d9e64b86b666d9a349f19a235343d', '10001' );
	
	document.ssoLoginForm.E2.value = rsa.encrypt( jsonStr );

	/*
	var expDate  = new Date();
	expDate.setDate(expDate.getDate()+1);
	
	if (document.ssoLoginForm.idSave.checked == true) {
		jsSetCookie('cookieLoginId', loginId, expDate, '/');
	}else{
		jsSetCookie('cookieLoginId', '', expDate, '/');
	}
	*/
	
	return true;
}
</script>
</head>

<body class="uid-body">
	<header class="uid-header">
		<c:set var="homeLink" value="/ehrdEduIndex.do"/>
		<h1><a href="<c:out value='${homeLink }' escapeXml='false' />"><img src="<c:url value='/assets/images/new/main-page/logo.png'/>" alt="농촌인적자원개발센터"></a></h1>
	</header>
	<section>
	  <div class="uid-wrap">
	    <div class="login-form-box">
	  	<form name="loginFrm" id="loginFrm" method="post">
			<!--<label>통합로그인</label>   sshCheck 실서버 : Y 로컬 : N -->
			<input  name="ssoCheck" type="hidden" id="ssoCheck" value="N">
		      <div class="login-form-area type-tab">
		        <div class="login-wrap">
		          <div class="in">
		            <fieldset>
		              <div class="fieldset">
		                <div class="form-group">
		                  <div class="form-tit">
		                    <label for="login_id">아이디</label>
		                  </div>
		                  <div class="form-conts">
		                    <input type="text" id="userId" name="userId" class="form-control lg" autocomplete="on" placeholder="아이디를 입력해주세요.">
		                  </div>
		                </div>
		                <div class="form-group">
		                  <div class="form-tit">
		                    <label for="login_pw">비밀번호</label>
		                  </div>
		                  <div class="form-conts btn-ico-wrap">
		                    <input type="password"  name="passwd" id="passwd"  class="form-control lg" placeholder="비밀번호를 입력해주세요." maxlength="50" onKeyPress="if (event.keyCode==13){send();}">
		                    <button type="button" class="btn btn-ico ico-pw-invisible">
		                      <span class="sr-only">입력한 비밀번호 보기</span>
		                    </button>
		                    <button type="button" class="btn btn-ico ico-pw-visible">
		                      <span class="sr-only">입력한 비밀번호 숨기기</span>
		                    </button>
		                  </div>
		                </div>
		                <div class="form-flex">
			                <div class="form-group chk-area">
			                  <div class="form-check">
			                    <input type="checkbox" name="save_id" id="save_id">
			                    <label for="save_id">아이디 저장</label>
			                  </div>
			                </div>
		                	<a href="javascript:goFindId();" class="btn-txt find-txt">아이디 및 비밀번호 찾기</a>
		                </div>
		                <div class="form-group">
		                  <button type="submit" class="btn primary lg " onclick="javascript:send();">로그인</button>
		                </div>
		                <%-- <div class="form-group">
		                  <ul class="link-group">
		                    <li><a href="javascript:goFindId();" class="btn md btn-txt">아이디 및 비밀번호 찾기</a></li>
		                   <!--  <li><a href="javascript:goFindPassWord();" class="btn md btn-txt">비밀번호 찾기</a></li> -->
		                    <li><a href="javascript:goJoinUser();" class="btn md btn-txt">회원가입</a></li>
		                  </ul>
		                </div>--%>
		              </div>
		            </fieldset>
		          </div>
		        </div>
				
				<div class="login-info-wrap">
	        <div class="in">
	          <p class="tit">SNS로 간편하게 시작하기</p>
	          <div class="btn-wrap login-method">
	          	 <a href="#" class="btn tertiary btn-kakao" onclick="javascript:kakaoLogin();" ><img src="<c:url value='/assets/images/new/main-page/i-kakao.png'/>" alt="카카오"></a>
	          	 <div id="naver_id_login" class="login-method"></div>
	             <a href="javascript:;" class="btn tertiary btn-google" id="gglLogin"><img src="<c:url value='/assets/images/new/main-page/i-google.png'/>" alt="구글"></a>
	          </div>
	        </div>
        </div><!-- //login-info-wrap -->
				<span class="join-link-txt">아직 회원이 아니신가요?<a href="javascript:goJoinUser();" class="join-link">회원가입</a></span>              
		      </div>
		</form>
	    </div>
	  </div>
	
	  </section>
	  <footer class="uid-footer">
	    <span>COPYRIGHT ⓒ 2021 RURAL DEVELOPMENT ADMINISTRATION. ALL RIGHTS RESERVED</span>
	  </footer>
	<form name="ssoLogin">
		<input type="hidden" name="sso_user_id" >
		<input type="hidden" name="sso_user_pw" >
		<input type="hidden" name="app_id_self">
		<input type="hidden" name="retUrl">
		<input type="hidden" name="failUrl">
		<input type="hidden" name="secMode" value="true">
	</form>
	<form name="imForm" id="imForm" method="post">
		<input name="retUrl" id="retUrl" type="hidden" value="https://hrd.rda.go.kr/ehrd_front">
		<input name="failUrl" id="failUrl" type="hidden" value="https://hrd.rda.go.kr/ehrd_front">
	</form>
	
	
	<form name="authLogin">
		<input type="hidden" id="kakaoProviderId">
		<input type="hidden" id="kakaoAccessToken">
		<input type="hidden" id="kakaoRefreshToken">
		<input type="hidden" id="naverProviderId">
		<input type="hidden" id="naverAccessToken">
		<input type="hidden" id="naverRefreshToken">
		<input type="hidden" id="googleProviderId">
		<input type="hidden" id="googleAccessToken">
		<input type="hidden" id="googleRefreshToken">
	</form>
		
	<script type="text/javascript">
		 /*비밀번호 보이기*/
		 document.querySelectorAll('.ico-pw-visible').forEach(button => {
		  button.addEventListener('click', function () {
		    const inputField = this.previousElementSibling;
		
		    if (inputField.type === 'password') {
		      inputField.type = 'text';
		    } else {
		      inputField.type = 'password'; 
		      this.classList.remove('active');
		    }
		  });
		});
		 
		/* 아이디 찾기 */
		function goFindId() {
		    document.loginFrm.action="<c:url value='/uat/uia/egovIdSearch.do'/>";
		    document.loginFrm.submit();
		}
		
		/* 비밀번호 찾기 */
		function goFindPassWord() {
		    document.loginFrm.action="<c:url value='/uat/uia/egovPasswordSearch.do'/>";
		    document.loginFrm.submit();
		}
		
		/* 회원가입 */
		function goJoinUser() {
		    document.loginFrm.action="<c:url value='/uat/uia/EgovJoinUser.do'/>";
		    document.loginFrm.submit();
		}		
		
		 
		 	   var naver_id_login = new naver_id_login("ANnV8KE2KGq4pGop7r7t", "http://localhost:8680/uat/uia/EgovJoinUser.do");// Client ID, CallBack URL 삽입
		       var state = naver_id_login.getUniqState();
		       
		       naver_id_login.setButton("white", 10, 40);
		       naver_id_login.setDomain("http://localhost:8680/"); //서비스URL
		       naver_id_login.setState(state);
		       //naver_id_login.setPopup();
		       naver_id_login.init_naver_id_login();
		       
		       //naver_id_login.get_naver_userprofile("naverSignInCallback()");

		       
		       $('#naver_id_login img').remove();
		       
		       var img = "<c:url value='/assets/images/new/main-page/i-naver.png'/>";
		       $('#naver_id_login a').append("<a href='#' class='btn tertiary btn-naver'><img src='"+img+"' alt='네이버'></a>");
		       
 
		       
		       function naverSignInCallback(){
		    	    //alert(naver_id_login.getProfileData('email'));
		    	    //alert(naver_id_login.getProfileData('nickname'));
		    	    //alert(naver_id_login.getProfileData('age'));
 
		    	   
		          console.log(JSON.stringify(naver_id_login));
		          
		       }

				
		       
		       function kakaoLogin(){
		          window.Kakao.init("71e8974ec7fcd990cce50b5968924668");
		          window.Kakao.Auth.login({
		             scope : 'profile_nickname',
		             success : function(authObj){
		                console.log(authObj);
		                window.Kakao.API.request({
		                   url:'/v2/user/me',
		                   success: function(res){
		                      const kakao_account = res.kakao_account;
		                      console.log("카카오 로그인 정보1-->"+res.id);
		                      console.log("카카오 로그인 정보2-->"+JSON.stringify(kakao_account));
		                      console.log("카카오 로그인 정보2-->"+JSON.stringify(res));
		                      
		                      console.log("카카오 로그인 정보2-->"+authObj.access_token);
		                      console.log("카카오 로그인 정보2-->"+authObj.refresh_token);
		                      
		                   //console.log("카카오 로그인 정보3-->"+kakao_account.email);
		            
		                   location.href="/uat/uia/EgovJoinUser.do?psite=&sns=kakao&kakaoProviderId="+res.id+"&name="+kakao_account.profile.nickname+"&email="+kakao_account.email+"&access_token="+authObj.access_token+"&refresh_token="+authObj.refresh_token;
		 
		                   }
		         
		                });
		             }
		          });
		       }
		       
		       
		       var googleUser = {};
		       var title='google';
		       var startApp = function() {
		          gapi.load('auth2', function(){
		             auth2 = gapi.auth2.init({
		                client_id: '78189508330-eiejcg71pi2bodmthuo6gkbp4o928fd0.apps.googleusercontent.com',
		                plugin_name: "hrd",
		                cookiepolicy: 'single_host_origin'
		             });
		      
		             attachSignin(document.getElementById('gglLogin'));
		      
		          });

		       };

		       function attachSignin(element) {
		          auth2.attachClickHandler(element, {}, function(googleUser) {
		                
		        	  	var gId = googleUser.getBasicProfile().getId();
		                var gName = googleUser.getBasicProfile().getName();
		                var gEmail = googleUser.getBasicProfile().getEmail();
		               
		                console.log('Google 로그인 정보1: ' + gId);
		                console.log('Google 로그인 정보2: ' + gName);
		                console.log("Google 로그인 정보3: " + gEmail);
		                
		                location.href="/uat/uia/EgovJoinUser.do?psite=&sns=gmail&googleProviderId="+gId+"&googleProviderName="+gName + "&googleProviderEmail="+gEmail;
		                
		             }, function(error) {
		                console.log(JSON.stringify(error, undefined, 2));
		      
		             }
		   
		          );
		          $("#ssIFrame_google").attr("title", "구글 로그인");
		       }

		       startApp();		
		       
		       
		     //카카오 인증 
			 function kakaoAuth(){
			     window.open('', 'popup',  'width=650, height=750,toolbar=no,directories=no,scrollbars=no,resizable=no,status=no,menubar=no,top=0,left=0');
			     document.authLogin.action = "http://localhost:8680/uat/uia/EgovJoinUser.do";
			     document.authLogin.target = "popup";
			     
 
                 
			     $("#kakaoProviderId").val("3798557045");
			     $("#kakaoAccessToken").val("ZNkyEcyua3BTkq6o7UCkpIQPipb9yjnmAAAAAQo9cusAAAGTQ0jGJUA9X5YOsAdz");
			     $("#kakaoRefreshToken").val("5MOzqtAx8V3su8F0_-cvZf_EWYRw6wD6AAAAAgo9cusAAAGTQ0jGIkA9X5YOsAdz");
			     
			     document.authLogin.submit();
			  } 		       
	</script>
</body>
</html>

