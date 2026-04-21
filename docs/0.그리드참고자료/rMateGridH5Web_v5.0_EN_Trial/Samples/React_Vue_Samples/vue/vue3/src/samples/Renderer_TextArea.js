//Renderer_TextArea.html
this.layoutStr = 
'<rMateGrid>\
	<DataGrid id="dg1" variableRowHeight="true" horizontalScrollPolicy="auto" verticalAlign="middle">\
		<columns>\
			<DataGridColumn dataField="country" width="120" headerText="국가" textAlign="center"/>\
			<DataGridColumn dataField="capital" width="120" headerText="수도" textAlign="center"/>\
<!--\n\
itemRenderer 를 "TextAreaItem"로 설정하여 \\n을 <br>로 변환해주도록 합니다.\n\
-->\
			<DataGridColumn dataField="desc" headerText="설명" itemRenderer="TextAreaItem"/>\
		</columns>\
	</DataGrid>\
</rMateGrid>\
';


this.gridData = [
	{
		"country": "Korea",
		"capital": "서울",
		"desc": "대한민국의 수도<br>인구 : 1000만<br>면적 : 605.25 Km2<br>꽃 : 개나리"
	  },
	  {
		"country": "Korea",
		"capital": "부산",
		"desc": "대한민국의 남부해안도시<br>인구 : 360만<br>면적 : 765.64 Km2<br>꽃 : 동백꽃"
	  },
	  {
		"country": "U.S.A",
		"capital": "워싱턴",
		"desc": "미국의 수도, 동부에 위치<br>인구 : 58만<br>면적 : 159 Km2<br>꽃 : 장미<br>명소 : 국회의사당, 백악관 등"
	  },
	  {
		"country": "Japan",
		"capital": "도쿄",
		"desc": "일본열도의 수도<br>인구 : 1280만<br>면적 : 2187.05 Km2<br>꽃 : 왕벗나무"
	  },
	  {
		"country": "China",
		"capital": "베이징",
		"desc": "중국의 수도<br>인구 : 1690만<br>면적 : 16410.54 Km2<br>꽃 : 측백나무"
	  },
	  {
		"country": "England",
		"capital": "런던",
		"desc": "영국의 수도<br>인구 : 750만<br>면적 : 1578 Km2<br>명소 : 템즈강,버킹엄궁전"
	  },
	  {
		"country": "France",
		"capital": "파리",
		"desc": "프랑스의 수도<br>인구 : 216만<br>면적 : 105 Km2<br>명소 : 센강,개선문,몽마르트"
	  },
	  {
		"country": "Germany",
		"capital": "베를린",
		"desc": "독일의 수도<br>인구 : 337만<br>면적 : 891.75 Km2<br>명소 : 슈프레강,브란덴부르크"
	  },
	  {
		"country": "Russia",
		"capital": "모스코바",
		"desc": "러시아의 수도<br>인구 : 1047만<br>면적 : 1000 Km2<br>명소 : 모스코바강, 크렘린"
	  },
	  {
		"country": "Brazil",
		"capital": "브라질리아",
		"desc": "남미 브라질의 수도<br>인구 : 260만<br>면적 : 5802 Km2<br>명소 : 계획도시,브라질의사당"
	  },
	  {
		"country": "Australia",
		"capital": "캔버라",
		"desc": "호주의 수도<br>인구 : 35만<br>면적 : 814.2 Km2<br>명소 : 호주 국립 박물관"
	}
];