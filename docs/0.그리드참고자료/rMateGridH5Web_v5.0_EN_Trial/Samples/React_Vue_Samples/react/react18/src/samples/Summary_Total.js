//Summary_Total.html
this.layoutStr =
'<rMateGrid>\
	<SpanRowAttribute id="sumRowAttr" styleName="allTotalStyle" backgroundColor="#FFF19F"/>\
	<SpanRowAttribute id="sumRowAttr_T" styleName="allTotalStyle" backgroundColor="#bbd713"/>\
	<SpanRowAttribute id="sumRowAttr_Y" styleName="allTotalStyle" backgroundColor="#d1e844"/>\
	<SpanCellAttribute id="sum1CellAttr" colNo="0" styleName="subTotalStyle" backgroundColor="#CCDD66"/>\
	<SpanCellAttribute id="sum2CellAttr" colNo="1" styleName="subTotalStyle" backgroundColor="#FFE048"/>\
	<SpanCellAttribute id="sumTotalCellAttr" colNo="0" styleName="allTotalHeaderStyle" backgroundColor="#a8c305"/>\
\
	<NumberFormatter id="numfmt" useThousandsSeparator="true"/>\
	<PercentFormatter id="percfmt" useThousandsSeparator="true"/>\
	<DataGrid id="dg1" horizontalScrollPolicy="off" verticalAlign="middle" selectionMode="singleCell" headerPaddingTop="5" headerPaddingBottom="6">\
		<groupedColumns>\
			<DataGridColumn id="dg1col1" dataField="Year" textAlign="center"/>\
			<DataGridColumn id="dg1col2" dataField="Quarter" textAlign="center"/>\
			<DataGridColumn dataField="Month" textAlign="center"/>\
			<DataGridColumnGroup headerText="Region">\
				<DataGridColumnGroup headerText="Korea">\
					<DataGridColumn id="dg1col4" dataField="Seoul" textAlign="right" formatter="{numfmt}"/>\
					<DataGridColumn id="dg1col5" dataField="Busan" textAlign="right" formatter="{numfmt}"/>\
					<DataGridColumn id="dg1col6" dataField="Incheon" textAlign="right" formatter="{numfmt}"/>\
				</DataGridColumnGroup>\
				<DataGridColumnGroup headerText="U.S.A.">\
					<DataGridColumn id="dg1col7" dataField="NewYork" textAlign="right" headerText="New York"/>\
					<DataGridColumn id="dg1col8" dataField="LA" textAlign="right" headerText="L.A."/>\
					<DataGridColumn id="dg1col9" dataField="Washington" textAlign="right"/>\
				</DataGridColumnGroup>\
			</DataGridColumnGroup>\
			<DataGridColumnGroup headerText="Sum">\
				<DataGridColumn id="dg1col10" dataField="Revenue" textAlign="right"/>\
				<DataGridColumn id="dg1col11" dataField="Percent" textAlign="right" formatter="{percfmt}"/>\
			</DataGridColumnGroup>\
		</groupedColumns>\
		<dataProvider>\
			<!-- 그리드의 자료를 일반 dataProvider가 아닌 별도의 컴포넌트에 입력해야 할 경우 아래와 같이 source에 $gridData를 넣어줍니다 -->\
			<SpanSummaryCollection source="{$gridData}">\
				<mergingFields>\
<!--\n\
caseInsensitive 그룹핑시 대소문자 구분 여부 ("true","false"중 택일 기본값 "false")\n\
colNum 그룹핑 결과를 적용할 그리드의 컬럼 번호.\n\
name 그룹핑할 필드명\n\
rowSpanable 그룹핑시 그룹으로 묶인 행들에 대해 병합을 수행할지 여부 ("true","false"중 택일 기본값 "true")\n\
-->\n\
					<SpanMergingField name="Year">\
<!--\n\
cellAttribute 합계를 넣는 cell에 대한 속성.\n\
label 합계의 label.\n\
labelDataField label이 들어갈 dataField.\n\
rowAttribute 합계 행에 대한 row 속성.\n\
summaryPlacement 합계라인이 표시될 위치 설정 (first, last 중 택일. 기본 last)\n\
-->\n\
						<SpanSummaryRow label="년 소계" labelDataField="Year" rowAttribute="{sumRowAttr_Y}" cellAttribute="{sum1CellAttr}">\
<!--\n\
cellAttribute 합계를 넣는 cell에 대한 속성.\n\
dataField 합산을 계산할 필드명\n\
targetDataField 합산 결과 저장시 사용할 필드명. 입력되지 않을 경우, 기본은 dataField를 사용하나 이 값을 넣어주면 이 값으로 필드명을 삼아 합산값을 저장하게 됩니다.\n\
summaryOperation 수행해야할 합산. ("SUM","MIN","MAX","AVG","COUNT"중 택일 기본값 "SUM")\n\
-->\n\
							<SpanSummaryField dataField="Seoul" summaryOperation="SUM" />\
							<SpanSummaryField dataField="Busan" summaryOperation="SUM" />\
							<SpanSummaryField dataField="Incheon" summaryOperation="SUM" />\
							<SpanSummaryField dataField="NewYork" summaryOperation="SUM" />\
							<SpanSummaryField dataField="LA" summaryOperation="SUM" />\
							<SpanSummaryField dataField="Washington" summaryOperation="SUM" />\
						</SpanSummaryRow>\
					</SpanMergingField>\
					<SpanMergingField name="Quarter">\
						<SpanSummaryRow label="분기 소계" labelDataField="Quarter" rowAttribute="{sumRowAttr}" cellAttribute="{sum2CellAttr}">\
							<SpanSummaryField dataField="Seoul" summaryOperation="SUM" />\
							<SpanSummaryField dataField="Busan" summaryOperation="SUM" />\
							<SpanSummaryField dataField="Incheon" summaryOperation="SUM" />\
							<SpanSummaryField dataField="NewYork" summaryOperation="SUM" />\
							<SpanSummaryField dataField="LA" summaryOperation="SUM" />\
							<SpanSummaryField dataField="Washington" summaryOperation="SUM" />\
						</SpanSummaryRow>\
					</SpanMergingField>\
				</mergingFields>\
				<summaries>\
					<SpanSummaryRow summaryPlacement="last" label="합계" labelDataField="Year" rowAttribute="{sumRowAttr_T}" cellAttribute="{sumTotalCellAttr}">\
						<SpanSummaryField dataField="Seoul" summaryOperation="SUM" />\
						<SpanSummaryField dataField="Busan" summaryOperation="SUM" />\
						<SpanSummaryField dataField="Incheon" summaryOperation="SUM" />\
						<SpanSummaryField dataField="NewYork" summaryOperation="SUM" />\
						<SpanSummaryField dataField="LA" summaryOperation="SUM" />\
						<SpanSummaryField dataField="Washington" summaryOperation="SUM" />\
					</SpanSummaryRow>\
				</summaries>\
			</SpanSummaryCollection>\
		</dataProvider>\
	</DataGrid>\
	<Style>\n\
		.subTotalStyle {\n\
			color: #669900;\n\
			textAlign: center;\n\
		}\n\
		.allTotalHeaderStyle {\n\
			color: #0000FF;\n\
			fontWeight: bold;\n\
			textAlign: center;\n\
		}\n\
		.allTotalStyle {\n\
			color: #000000;\n\
			fontWeight: bold;\n\
		}\n\
	</Style>\
</rMateGrid>\
';

this.gridData = [
	{
		"Year":2015,
		"Quarter":"1/4",
		"Month":1,
		"Seoul":109520,
		"Busan":40454,
		"Incheon":82477,
		"NewYork":47424,
		"LA":103225,
		"Washington":61161,
		"Revenue":444260,
		"Percent":40
	   },
	   {
		"Year":2015,
		"Quarter":"1/4",
		"Month":2,
		"Seoul":15749,
		"Busan":29714,
		"Incheon":31393,
		"NewYork":45006,
		"LA":17945,
		"Washington":90148,
		"Revenue":229956,
		"Percent":20
	   },
	   {
		"Year":2015,
		"Quarter":"1/4",
		"Month":3,
		"Seoul":14766,
		"Busan":97314,
		"Incheon":103216,
		"NewYork":86072,
		"LA":52863,
		"Washington":93789,
		"Revenue":448020,
		"Percent":40
	   },
	   {
		"Year":2015,
		"Quarter":"2/4",
		"Month":4,
		"Seoul":52352,
		"Busan":56859,
		"Incheon":15688,
		"NewYork":65438,
		"LA":39181,
		"Washington":109514,
		"Revenue":339031,
		"Percent":31
	   },
	   {
		"Year":2015,
		"Quarter":"2/4",
		"Month":5,
		"Seoul":100842,
		"Busan":30391,
		"Incheon":23745,
		"NewYork":72742,
		"LA":102195,
		"Washington":30407,
		"Revenue":360322,
		"Percent":33
	   },
	   {
		"Year":2015,
		"Quarter":"2/4",
		"Month":6,
		"Seoul":19217,
		"Busan":75298,
		"Incheon":70807,
		"NewYork":36447,
		"LA":100805,
		"Washington":84934,
		"Revenue":387508,
		"Percent":36
	   },
	   {
		"Year":2015,
		"Quarter":"3/4",
		"Month":7,
		"Seoul":74324,
		"Busan":64947,
		"Incheon":101350,
		"NewYork":34673,
		"LA":24486,
		"Washington":57781,
		"Revenue":357561,
		"Percent":28
	   },
	   {
		"Year":2015,
		"Quarter":"3/4",
		"Month":8,
		"Seoul":85932,
		"Busan":95733,
		"Incheon":40327,
		"NewYork":69255,
		"LA":80024,
		"Washington":102739,
		"Revenue":474011,
		"Percent":37
	   },
	   {
		"Year":2015,
		"Quarter":"3/4",
		"Month":9,
		"Seoul":101804,
		"Busan":65098,
		"Incheon":79194,
		"NewYork":101669,
		"LA":30608,
		"Washington":73020,
		"Revenue":451393,
		"Percent":35
	   },
	   {
		"Year":2015,
		"Quarter":"4/4",
		"Month":10,
		"Seoul":92130,
		"Busan":91881,
		"Incheon":45166,
		"NewYork":65524,
		"LA":45348,
		"Washington":72708,
		"Revenue":412757,
		"Percent":36
	   },
	   {
		"Year":2015,
		"Quarter":"4/4",
		"Month":11,
		"Seoul":80925,
		"Busan":70537,
		"Incheon":25347,
		"NewYork":29360,
		"LA":76296,
		"Washington":42766,
		"Revenue":325230,
		"Percent":29
	   },
	   {
		"Year":2015,
		"Quarter":"4/4",
		"Month":12,
		"Seoul":99008,
		"Busan":30598,
		"Incheon":99124,
		"NewYork":22776,
		"LA":107805,
		"Washington":38384,
		"Revenue":397696,
		"Percent":35
	   },
	   {
		"Year":2016,
		"Quarter":"1/4",
		"Month":1,
		"Seoul":68503,
		"Busan":10155,
		"Incheon":47908,
		"NewYork":60857,
		"LA":104179,
		"Washington":109097,
		"Revenue":400699,
		"Percent":31
	   },
	   {
		"Year":2016,
		"Quarter":"1/4",
		"Month":2,
		"Seoul":80573,
		"Busan":75743,
		"Incheon":107750,
		"NewYork":76243,
		"LA":79265,
		"Washington":85345,
		"Revenue":504918,
		"Percent":40
	   },
	   {
		"Year":2016,
		"Quarter":"1/4",
		"Month":3,
		"Seoul":23435,
		"Busan":30538,
		"Incheon":86528,
		"NewYork":36735,
		"LA":96031,
		"Washington":96928,
		"Revenue":370196,
		"Percent":29
	   },
	   {
		"Year":2016,
		"Quarter":"2/4",
		"Month":4,
		"Seoul":35657,
		"Busan":109415,
		"Incheon":45569,
		"NewYork":87683,
		"LA":92773,
		"Washington":53422,
		"Revenue":424520,
		"Percent":45
	   },
	   {
		"Year":2016,
		"Quarter":"2/4",
		"Month":5,
		"Seoul":50140,
		"Busan":30142,
		"Incheon":83992,
		"NewYork":87292,
		"LA":72324,
		"Washington":32520,
		"Revenue":356410,
		"Percent":37
	   },
	   {
		"Year":2016,
		"Quarter":"2/4",
		"Month":6,
		"Seoul":39458,
		"Busan":10848,
		"Incheon":10553,
		"NewYork":48474,
		"LA":25642,
		"Washington":36591,
		"Revenue":171565,
		"Percent":18
	   },
	   {
		"Year":2016,
		"Quarter":"3/4",
		"Month":7,
		"Seoul":33761,
		"Busan":49046,
		"Incheon":31351,
		"NewYork":46829,
		"LA":97148,
		"Washington":42630,
		"Revenue":300765,
		"Percent":31
	   },
	   {
		"Year":2016,
		"Quarter":"3/4",
		"Month":8,
		"Seoul":89645,
		"Busan":72565,
		"Incheon":23678,
		"NewYork":78847,
		"LA":62559,
		"Washington":87722,
		"Revenue":415017,
		"Percent":42
	   },
	   {
		"Year":2016,
		"Quarter":"3/4",
		"Month":9,
		"Seoul":14844,
		"Busan":30709,
		"Incheon":83037,
		"NewYork":23130,
		"LA":65006,
		"Washington":48367,
		"Revenue":265093,
		"Percent":27
	   },
	   {
		"Year":2016,
		"Quarter":"4/4",
		"Month":10,
		"Seoul":30598,
		"Busan":55523,
		"Incheon":90576,
		"NewYork":79997,
		"LA":71346,
		"Washington":63569,
		"Revenue":391608,
		"Percent":34
	   },
	   {
		"Year":2016,
		"Quarter":"4/4",
		"Month":11,
		"Seoul":64461,
		"Busan":61341,
		"Incheon":74479,
		"NewYork":10715,
		"LA":40404,
		"Washington":93611,
		"Revenue":345011,
		"Percent":30
	   },
	   {
		"Year":2016,
		"Quarter":"4/4",
		"Month":12,
		"Seoul":99229,
		"Busan":95468,
		"Incheon":108828,
		"NewYork":27176,
		"LA":28673,
		"Washington":54816,
		"Revenue":414191,
		"Percent":36
	   }
];

// this.methods = {};

