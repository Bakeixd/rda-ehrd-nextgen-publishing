//Renderer_Icon_Column.html
this.layoutStr =
'<rMateGrid>\
	<NumberFormatter id="numfmt" useThousandsSeparator="true"/>\
	<DataGrid id="dg1" selectionMode="singleRow">\
		<columns>\
<!--\n\
itemRenderer 를 "IconItem"로 설정하여 icon을 사용하고, secondDataField에 데이터에서 icon명을 포함하는 필드명을 넣어줍니다. \n\
\n\
데이터에서 사용할 수 있는 icon명은 다음과 같습니다.\n\
Magnifier : 돋보기 (기본)\n\
Plus : 플러스 기호\n\
Minus : 마이너스 기호\n\
FolderOpen : 열린 폴더 모양\n\
FolderClosed : 닫힌 폴더 모양\n\
Arrow : 우측 방향 화살표\n\
DownArrow : 아래 방향 화살표\n\
Reguired : 빨간색 별표시\n\
Diskette : 디스켓 표시\n\
Node : 도큐먼트 모양 표시\n\
imgBtn : 이미지 버튼 모양\n\
favorBtn : 즐겨찾기 아이콘 모양\n\
check : 체크 표시 모양\n\
\n\
iconPlacement itemRenderer 를 "IconItem"로 설정할 경우 icon의 위치 정렬 지정 (left,right중 택일, 기본 left)\n\
-->\
			<DataGridColumn dataField="Name" id="iconCol2" itemRenderer="IconItem" secondDataField="Icon"/>\
			<DataGridColumn dataField="Territory" itemRenderer="IconItem" icon="imgBtn" width="150"/>\
			<DataGridColumn dataField="Territory_Rep" headerText="Territory Rep" width="150"/>\
			<DataGridColumn dataField="Actual" id="iconCol" itemRenderer="IconItem" icon="Required" textAlign="right" formatter="{numfmt}"/>\
			<DataGridColumn dataField="Estimate" itemRenderer="IconItem" icon="favorBtn" iconPlacement="right" textAlign="right" formatter="{numfmt}"/>\
			<DataGridColumn dataField="Real" textAlign="right" formatter="{numfmt}"/>\
			<DataGridColumn dataField="Price" itemRenderer="IconItem" icon="check" textAlign="right" formatter="{numfmt}"/>\
		</columns>\
	</DataGrid>\
</rMateGrid>\
';


this.gridData = [
	{
		"Name": "Jerry",
		"Territory": "Arizona",
		"Territory_Rep": "Arizona",
		"Actual": 38865,
		"Icon": "man",
		"Icon2": "Magnifier",
		"Estimate": 40000,
		"Real": 30000,
		"Price": 3001
	},
	{
		"Name": "Jerry",
		"Territory": "Arizona",
		"Territory_Rep": "Arizona",
		"Actual": 29885,
		"Icon": "man",
		"Icon2": "Arrow",
		"Estimate": 30000,
		"Real": 30000,
		"Price": 3002
	},
	{
		"Name": "Jerry",
		"Territory": "Central California",
		"Territory_Rep": "Central California",
		"Actual": 29134,
		"Icon": "man",
		"Icon2": "Diskette",
		"Estimate": 30000,
		"Real": 30000,
		"Price": 3003
	},
	{
		"Name": "Jerry",
		"Territory": "Nevada",
		"Territory_Rep": "Nevada",
		"Icon": "man",
		"Icon2": "Plus3",
		"Actual": 52888,
		"Estimate": 45000,
		"Real": 30000,
		"Price": 3004
	},
	{
		"Name": "Jerry",
		"Territory": "Northern California",
		"Territory_Rep": "Northern California",
		"Icon": "man",
		"Actual": 38805,
		"Estimate": 40000,
		"Real": 30000,
		"Price": 3005
	},
	{
		"Name": "Jerry",
		"Territory": "Northern California",
		"Territory_Rep": "Northern California",
		"Icon": "man",
		"Actual": 55498,
		"Estimate": 40000,
		"Real": 30000,
		"Price": 3006
	},
	{
		"Name": "Jerry",
		"Territory": "Southern California",
		"Territory_Rep": "Southern California",
		"Icon": "man",
		"Icon2": "Minus2",
		"Actual": 44985,
		"Estimate": 45000,
		"Real": 30000,
		"Price": 3007
	},
	{
		"Name": "Jerry",
		"Territory": "Southern California",
		"Territory_Rep": "Southern California",
		"Icon": "man",
		"Actual": 44913,
		"Estimate": 45000,
		"Real": 30000,
		"Price": 3008
	},
	{
		"Name": "Alice",
		"Territory": "Arizona",
		"Territory_Rep": "Arizona",
		"Icon": "woman",
		"Icon2": "noteBtn",
		"Actual": 38865,
		"Estimate": 40000,
		"Real": 30000,
		"Price": 3003
	},
	{
		"Name": "Alice",
		"Territory": "Arizona",
		"Territory_Rep": "Arizona",
		"Icon": "woman",
		"Actual": 29885,
		"Estimate": 30000,
		"Real": 30000,
		"Price": 3004
	},
	{
		"Name": "Alice",
		"Territory": "Central California",
		"Territory_Rep": "Central California",
		"Icon": "woman",
		"Actual": 29134,
		"Estimate": 30000,
		"Real": 30000,
		"Price": 3005
	},
	{
		"Name": "Alice",
		"Territory": "Nevada",
		"Territory_Rep": "Nevada",
		"Icon": "woman",
		"Icon2": "clockBtn",
		"Actual": 52888,
		"Estimate": 45000,
		"Real": 30000,
		"Price": 3006
	},
	{
		"Name": "Alice",
		"Territory": "Arizona",
		"Territory_Rep": "Arizona",
		"Icon": "woman",
		"Actual": 29885,
		"Estimate": 30000,
		"Real": 23230,
		"Price": 3004
	},
	{
		"Name": "Alice",
		"Territory": "Central California",
		"Territory_Rep": "Central California",
		"Icon": "woman",
		"Actual": 22342,
		"Estimate": 343444,
		"Real": 30000,
		"Price": 3005
	},
	{
		"Name": "Alice",
		"Territory": "Nevada",
		"Territory_Rep": "Nevada",
		"Icon": "woman",
		"Icon2": "downArrow2",
		"Actual": 45433,
		"Estimate": 13435,
		"Real": 1234,
		"Price": 3006
	},
	{
		"Name": "Tom",
		"Territory": "Nevada",
		"Territory_Rep": "Nevada",
		"Icon": "man",
		"Icon2": "check",
		"Actual": 52888,
		"Estimate": 45000,
		"Real": 30000,
		"Price": 3002
	},
	{
		"Name": "Tom",
		"Territory": "Northern California",
		"Territory_Rep": "Northern California",
		"Icon": "man",
		"Icon2": "secureBtn",
		"Actual": 38805,
		"Estimate": 40000,
		"Real": 30000,
		"Price": 3003
	},
	{
		"Name": "Tom",
		"Territory": "Northern California",
		"Territory_Rep": "Northern California",
		"Icon": "man",
		"Actual": 55498,
		"Estimate": 40000,
		"Real": 30000,
		"Price": 3004
	},
	{
		"Name": "Tom",
		"Territory": "Southern California",
		"Territory_Rep": "Southern California",
		"Actual": 44985,
		"Icon": "man",
		"Estimate": 45000,
		"Real": 30000,
		"Price": 3005
	},
	{
		"Name": "Tom",
		"Territory": "Southern California",
		"Territory_Rep": "Southern California",
		"Actual": 44913,
		"Icon": "man",
		"Icon2": "xBtn",
		"Estimate": 45000,
		"Real": 30000,
		"Price": 3006
	},
	{
		"Name": "William",
		"Territory": "Arizona",
		"Territory_Rep": "Arizona",
		"Icon": "man",
		"Actual": 38865,
		"Estimate": 40000,
		"Real": 30000,
		"Price": 3007
	},
	{
		"Name": "William",
		"Territory": "Arizona",
		"Territory_Rep": "Arizona",
		"Icon": "man",
		"Actual": 29885,
		"Estimate": 30000,
		"Real": 30000,
		"Price": 3008
	},
	{
		"Name": "William",
		"Territory": "Central California",
		"Territory_Rep": "Central California",
		"Icon": "man",
		"Icon2": "pencil",
		"Actual": 29134,
		"Estimate": 30000,
		"Real": 30000,
		"Price": 3009
	},
	{
		"Name": "William",
		"Territory": "Nevada",
		"Territory_Rep": "Nevada",
		"Actual": 52888,
		"Icon": "man",
		"Estimate": 45000,
		"Real": 30000,
		"Price": 3000
	},
	{
		"Name": "William",
		"Territory": "Northern California",
		"Territory_Rep": "Northern California",
		"Icon": "man",
		"Actual": 38805,
		"Estimate": 40000,
		"Real": 30000,
		"Price": 3001
	},
	{
		"Name": "William",
		"Territory": "Northern California",
		"Territory_Rep": "Northern California",
		"Icon": "man",
		"Actual": 55498,
		"Estimate": 40000,
		"Real": 30000,
		"Price": 3002
	},
	{
		"Name": "William",
		"Territory": "Southern California",
		"Territory_Rep": "Southern California",
		"Actual": 44985,
		"Icon": "man",
		"Icon2": "Plus2",
		"Estimate": 45000,
		"Real": 30000,
		"Price": 3003
	},
	{
		"Name": "William",
		"Territory": "Southern California",
		"Territory_Rep": "Southern California",
		"Icon": "man",
		"Actual": 44913,
		"Estimate": 45000,
		"Real": 30000,
		"Price": 3004
	},
	{
		"Name": "Jerry",
		"Territory": "Arizona",
		"Territory_Rep": "Arizona",
		"Icon": "man",
		"Actual": 38865,
		"Estimate": 40000,
		"Real": 30000,
		"Price": 3005
	},
	{
		"Name": "Jerry",
		"Territory": "Arizona",
		"Territory_Rep": "Arizona",
		"Actual": 29885,
		"Icon": "man",
		"Estimate": 30000,
		"Real": 30000,
		"Price": 3006
	},
	{
		"Name": "Jerry",
		"Territory": "Central California",
		"Territory_Rep": "Central California",
		"Actual": 29134,
		"Icon": "man",
		"Estimate": 30000,
		"Real": 30000,
		"Price": 3007
	},
	{
		"Name": "Jerry",
		"Territory": "Nevada",
		"Territory_Rep": "Nevada",
		"Icon": "man",
		"Actual": 52888,
		"Estimate": 45000,
		"Real": 30000,
		"Price": 3008
	},
	{
		"Name": "Jerry",
		"Territory": "Northern California",
		"Territory_Rep": "Northern California",
		"Icon": "man",
		"Icon2": "Required",
		"Actual": 38805,
		"Estimate": 40000,
		"Real": 30000,
		"Price": 3009
	},
	{
		"Name": "Jerry",
		"Territory": "Northern California",
		"Territory_Rep": "Northern California",
		"Icon": "man",
		"Actual": 55498,
		"Estimate": 40000,
		"Real": 30000,
		"Price": 3000
	},
	{
		"Name": "Jerry",
		"Territory": "Southern California",
		"Territory_Rep": "Southern California",
		"Actual": 44985,
		"Icon": "man",
		"Estimate": 45000,
		"Real": 30000,
		"Price": 3001
	},
	{
		"Name": "Jerry",
		"Territory": "Southern California",
		"Territory_Rep": "Southern California",
		"Icon": "man",
		"Actual": 44913,
		"Estimate": 45000,
		"Real": 30000,
		"Price": 3002
	},
	{
		"Name": "Judy",
		"Territory": "Northern California",
		"Territory_Rep": "Northern California",
		"Icon": "woman",
		"Actual": 38805,
		"Estimate": 40000,
		"Real": 30000,
		"Price": 3007
	},
	{
		"Name": "Judy",
		"Territory": "Northern California",
		"Territory_Rep": "Northern California",
		"Icon": "woman",
		"Actual": 55498,
		"Estimate": 40000,
		"Real": 30000,
		"Price": 3008
	},
	{
		"Name": "Judy",
		"Territory": "Southern California",
		"Territory_Rep": "Southern California",
		"Icon": "woman",
		"Actual": 44985,
		"Estimate": 45000,
		"Real": 30000,
		"Price": 3009
	}
];
