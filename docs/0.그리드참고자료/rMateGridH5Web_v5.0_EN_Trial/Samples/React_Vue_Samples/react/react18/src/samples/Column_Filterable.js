//Column_Filterable.html

//레이아웃 데이터
this.layoutStr =
	'<rMateGrid>\
	<NumberFormatter id="numfmt" useThousandsSeparator="true"/>\n\
	<DateFormatter id="datefmt" formatString="YY.MM.DD"/>\n\
	<DataGrid id="dg1" horizontalScrollPolicy="off" textAlign="center">\n\
		<columns>\
<!--\n\
filterable: 필터링 가능여부 조정 (true,false중 택일, 기본 false)\n\
filterCaseInSensitive: 필터링 비교 수행시 대소문자 구분 여부 - filterType이 "none" 또는 "string" 일 경우에만 적용됩니다 (true,false중 택일, 기본 false)\n\
filterFunction: 컬럼에 대한 사용자 정의 필터링 함수\n\
filterOperators: 컬럼에 대한 필터링 수행시 사용자가 선택 가능한 연산자들\n\
filterType: 컬럼에 대한 필터 유형 (none,number,date,string,itemrendererdataprovider,boolean,range,list 중 택일)\n\
-->\n\
			<DataGridColumn dataField="Selected" headerText="" width="40" textAlign="center" backgroundColor="#EDEDF0" trueValue="Yes" falseValue="No" filterable="true"/>\
			<DataGridColumn dataField="From" width="80" filterable="true"/>\
			<DataGridColumn dataField="Subject" width="150" filterable="true" itemRenderer="DataProviderItem" itemRendererLabelField="label" itemRendererDataField="code" itemRendererDataProvider="[{\'label\':\'GMC-1 R1\',\'code\':\'GMC-1 Release1\'},{\'label\':\'GMC-1 R2\',\'code\':\'GMC-1 Release2\'},{\'label\':\'GMC-1 R3\',\'code\':\'GMC-1 Release3\'},{\'label\':\'GMC-1 R4\',\'code\':\'GMC-1 Release4\'},{\'label\':\'GMC-1 R5\',\'code\':\'GMC-1 Release5\'},{\'label\':\'GMC-1 R6\',\'code\':\'GMC-1 Release6\'}]"/>\
			<DataGridColumn dataField="ReceiveDate" headerText="Receive" filterable="true"/>\
			<DataGridColumn dataField="SendDate" headerText="Send" formatter="{datefmt}" filterable="true"/>\
			<DataGridColumn dataField="CC" filterable="true"/>\
			<DataGridColumn dataField="Level"/>\
			<DataGridColumn dataField="Length" textAlign="right" formatter="{numfmt}" filterable="true"/>\
			<DataGridColumn dataField="AttachCount" textAlign="right" formatter="{numfmt}" filterable="true" filterType="range"/>\
		</columns>\
	</DataGrid>\
</rMateGrid>';

//그리드 데이터
this.gridData = [
	{ Selected: 'No', From: 'Amit', Subject: 'GMC-1 Release1', ReceiveDate: '2015/12/07', SendDate: '2015/12/06', CC: 'Jim', Length: 75126, Level: 1, AttachCount: 1 },
	{ Selected: 'No', From: 'Amit', Subject: 'GMC-1 Release2', ReceiveDate: '2015/12/07', SendDate: '2015/12/06', CC: 'Jim', Length: 95822, Level: 1, AttachCount: 2 },
	{ Selected: 'Yes', From: 'Amit', Subject: 'GMC-1 Release3', ReceiveDate: '2015/12/11', SendDate: '2015/12/11', CC: 'Jim', Length: 1862456, Level: 3, AttachCount: 0 },
	{ Selected: 'No', From: 'Barb', Subject: 'GMC-1 Release3', ReceiveDate: '2015/12/08', SendDate: '2015/12/08', CC: 'Anant', Length: 65488, Level: 8, AttachCount: 31 },
	{ Selected: 'No', From: 'Barb', Subject: 'GMC-1 Release4', ReceiveDate: '2015/12/06', SendDate: '2015/12/06', CC: 'Anant', Length: 4851568, Level: 8, AttachCount: 1 },
	{ Selected: 'Yes', From: 'Harry', Subject: 'GMC-1 Release2', ReceiveDate: '2015/11/28', SendDate: '2015/11/28', CC: 'Ram', Length: 13548, Level: 1, AttachCount: 0 },
	{ Selected: 'No', From: 'Harry', Subject: 'GMC-1 Release3', ReceiveDate: '2015/12/08', SendDate: '2015/12/08', CC: 'Ram', Length: 1235, Level: 1, AttachCount: 12 },
	{ Selected: 'No', From: 'John', Subject: 'GMC-1 Release2', ReceiveDate: '2015/12/07', SendDate: '2015/12/07', CC: 'Jim', Length: 84621877, Level: 5, AttachCount: 20 },
	{ Selected: 'No', From: 'John', Subject: 'GMC-1 Release3', ReceiveDate: '2015/12/07', SendDate: '2015/12/06', CC: 'Jim', Length: 51846, Level: 5, AttachCount: 3 },
	{ Selected: 'Yes', From: 'Phill', Subject: 'GMC-1 Release1', ReceiveDate: '2015/12/08', SendDate: '2015/12/08', CC: 'Jim', Length: 31680, Level: 3, AttachCount: 5 },
	{ Selected: 'No', From: 'Phill', Subject: 'GMC-1 Release1', ReceiveDate: '2015/12/08', SendDate: '2015/12/08', CC: 'Jim', Length: 1813, Level: 2, AttachCount: 0 },
	{ Selected: 'No', From: 'Phill', Subject: 'GMC-1 Release3', ReceiveDate: '2015/12/08', SendDate: '2015/12/08', CC: 'Jim', Length: 13548, Level: 2, AttachCount: 1 },
	{ Selected: 'No', From: 'Phill', Subject: 'GMC-1 Release4', ReceiveDate: '2015/12/08', SendDate: '2015/12/08', CC: 'Jim', Length: 16588, Level: 1, AttachCount: 0 },
	{ Selected: 'Yes', From: '김철수', Subject: 'GMC-1 Release4', ReceiveDate: '2015/11/21', SendDate: '2015/11/21', CC: '박순이', Length: 5158, Level: 9, AttachCount: 0 },
	{ Selected: 'Yes', From: '김철수', Subject: 'GMC-1 Release5', ReceiveDate: '2015/11/19', SendDate: '2015/11/19', CC: '이미자', Length: 216815, Level: 8, AttachCount: 2 },
	{ Selected: 'No', From: '김철수', Subject: 'GMC-1 Release6', ReceiveDate: '2015/11/22', SendDate: '2015/11/20', CC: '박만수', Length: 312566, Level: 7, AttachCount: 3 },
];
