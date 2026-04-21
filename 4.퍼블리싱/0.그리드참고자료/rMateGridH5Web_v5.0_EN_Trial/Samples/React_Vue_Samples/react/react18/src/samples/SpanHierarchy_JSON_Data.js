//SpanHierarchy_JSON_Data.html

//레이아웃 데이터
this.layoutStr = 
'<rMateGrid>\
	<NumberFormatter id="numfmt" useThousandsSeparator="true"/>\
	<PercentFormatter id="percfmt" useThousandsSeparator="true"/>\
<!--\n\
displayItemsExpanded 계층형 자료를 모두 펼친후에 보여줄지 여부 조정 (true,false중 택일, 기본 false)\n\
treeColumn 계층형 트리가 표현될 컬럼을 지정합니다. (기본은 첫번째 컬럼)\n\
-->\n\
	<DataGrid id="dg1" displayItemsExpanded="true" horizontalScrollPolicy="auto" verticalAlign="middle" headerPaddingTop="5" headerPaddingBottom="6">\
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
			<SpanHierarchicalData source="{$gridData}"/>\
		</dataProvider>\
	</DataGrid>\
	<Style>\n\
		.subTotalStyle {\n\
			color: #4f7adc;\n\
			fontSize: 11;\n\
			textAlign: center;\n\
		}\n\
		.allTotalHeaderStyle {\n\
			color: #ffffff;\n\
			fontWeight: bold;\n\
			fontSize: 11;\n\
			textAlign: center;\n\
		}\n\
		.allTotalStyle {\n\
			color: #ffffff;\n\
			fontWeight: bold;\n\
			fontSize: 11;\n\
			textAlign: right;\n\
		}\n\
	</Style>\
</rMateGrid>\
';

//그리드 데이터
this.gridData = [
	{
		"Year": "2013",
		"Quarter": "T O T A L",
		"Seoul": 846568,
		"Busan": 748824,
		"Incheon": 717834,
		"NewYork": 676387,
		"LA": 780781,
		"Washington": 857351,
		"Revenue": 4627745,
		"Year_attr": {
			"backgroundColor": "#ffffff",
			"styleName": "subTotalStyle"
		},
		"Quarter_attr": {
			"colSpan": 2,
			"styleName": "allTotalHeaderStyle"
		},
		"_rattr": {
			"styleName": "allTotalStyle",
			"backgroundColor": "#4f7adc"
		},
		"children": [
			{
				"Year": "1/4",
				"Quarter": "1/4 SUM",
				"Seoul": 140034,
				"Busan": 167482,
				"Incheon": 217086,
				"NewYork": 178502,
				"LA": 174033,
				"Washington": 245098,
				"Revenue": 1122235,
				"Percent": 100,
				"Year_attr": {
					"backgroundColor": "#ffffff"
				},
				"Quarter_attr": {
					"colSpan": 2,
					"styleName": "subTotalStyle"
				},
				"_rattr": {
					"backgroundColor": "#edf1fb"
				},
				"children": [
					{
						"Quarter": "1/4",
						"Month": 1,
						"Seoul": 109520,
						"Busan": 40454,
						"Incheon": 82477,
						"NewYork": 47424,
						"LA": 103225,
						"Washington": 61161,
						"Revenue": 444260,
						"Percent": 40,
						"Quarter_attr": {
							"rowSpan": 3
						}
					},
					{
						"Quarter": "1/4",
						"Month": 2,
						"Seoul": 15749,
						"Busan": 29714,
						"Incheon": 31393,
						"NewYork": 45006,
						"LA": 17945,
						"Washington": 90148,
						"Revenue": 229956,
						"Percent": 20
					},
					{
						"Quarter": "1/4",
						"Month": 3,
						"Seoul": 14766,
						"Busan": 97314,
						"Incheon": 103216,
						"NewYork": 86072,
						"LA": 52863,
						"Washington": 93789,
						"Revenue": 448020,
						"Percent": 40
					}
				]
			},
			{
				"Year": "2/4",
				"Quarter": "2/4 SUM",
				"Seoul": 172411,
				"Busan": 162547,
				"Incheon": 110240,
				"NewYork": 174627,
				"LA": 242180,
				"Washington": 224855,
				"Revenue": 1086861,
				"Percent": 100,
				"Year_attr": {
					"backgroundColor": "#ffffff"
				},
				"Quarter_attr": {
					"colSpan": 2,
					"styleName": "subTotalStyle"
				},
				"_rattr": {
					"backgroundColor": "#edf1fb"
				},
				"children": [
					{
						"Quarter": "2/4",
						"Month": 4,
						"Seoul": 52352,
						"Busan": 56859,
						"Incheon": 15688,
						"NewYork": 65438,
						"LA": 39181,
						"Washington": 109514,
						"Revenue": 339031,
						"Percent": 31,
						"Quarter_attr": {
							"rowSpan": 3
						}
					},
					{
						"Quarter": "2/4",
						"Month": 5,
						"Seoul": 100842,
						"Busan": 30391,
						"Incheon": 23745,
						"NewYork": 72742,
						"LA": 102195,
						"Washington": 30407,
						"Revenue": 360322,
						"Percent": 33
					},
					{
						"Quarter": "2/4",
						"Month": 6,
						"Seoul": 19217,
						"Busan": 75298,
						"Incheon": 70807,
						"NewYork": 36447,
						"LA": 100805,
						"Washington": 84934,
						"Revenue": 387508,
						"Percent": 36
					}
				]
			},
			{
				"Year": "3/4",
				"Quarter": "3/4 SUM",
				"Seoul": 262060,
				"Busan": 225778,
				"Incheon": 220871,
				"NewYork": 205598,
				"LA": 135118,
				"Washington": 233539,
				"Revenue": 1282965,
				"Percent": 100,
				"Year_attr": {
					"backgroundColor": "#ffffff"
				},
				"Quarter_attr": {
					"colSpan": 2,
					"styleName": "subTotalStyle"
				},
				"_rattr": {
					"backgroundColor": "#edf1fb"
				},
				"children": [
					{
						"Quarter": "3/4",
						"Month": 7,
						"Seoul": 74324,
						"Busan": 64947,
						"Incheon": 101350,
						"NewYork": 34673,
						"LA": 24486,
						"Washington": 57781,
						"Revenue": 357561,
						"Percent": 28,
						"Quarter_attr": {
							"rowSpan": 3
						}
					},
					{
						"Quarter": "3/4",
						"Month": 8,
						"Seoul": 85932,
						"Busan": 95733,
						"Incheon": 40327,
						"NewYork": 69255,
						"LA": 80024,
						"Washington": 102739,
						"Revenue": 474011,
						"Percent": 37
					},
					{
						"Quarter": "3/4",
						"Month": 9,
						"Seoul": 101804,
						"Busan": 65098,
						"Incheon": 79194,
						"NewYork": 101669,
						"LA": 30608,
						"Washington": 73020,
						"Revenue": 451393,
						"Percent": 35
					}
				]
			},
			{
				"Year": "4/4",
				"Quarter": "4/4 SUM",
				"Seoul": 272063,
				"Busan": 193016,
				"Incheon": 169637,
				"NewYork": 117660,
				"LA": 229449,
				"Washington": 153858,
				"Revenue": 1135684,
				"Percent": 100,
				"Year_attr": {
					"backgroundColor": "#ffffff"
				},
				"Quarter_attr": {
					"colSpan": 2,
					"styleName": "subTotalStyle"
				},
				"_rattr": {
					"backgroundColor": "#edf1fb"
				},
				"children": [
					{
						"Quarter": "4/4",
						"Month": 10,
						"Seoul": 92130,
						"Busan": 91881,
						"Incheon": 45166,
						"NewYork": 65524,
						"LA": 45348,
						"Washington": 72708,
						"Revenue": 412757,
						"Percent": 36,
						"Quarter_attr": {
							"rowSpan": 3
						}
					},
					{
						"Quarter": "4/4",
						"Month": 11,
						"Seoul": 80925,
						"Busan": 70537,
						"Incheon": 25347,
						"NewYork": 29360,
						"LA": 76296,
						"Washington": 42766,
						"Revenue": 325230,
						"Percent": 29
					},
					{
						"Quarter": "4/4",
						"Month": 12,
						"Seoul": 99008,
						"Busan": 30598,
						"Incheon": 99124,
						"NewYork": 22776,
						"LA": 107805,
						"Washington": 38384,
						"Revenue": 397696,
						"Percent": 35
					}
				]
			}
		]
	},
	{
		"Year": "2014",
		"Quarter": "T O T A L",
		"Seoul": 834268,
		"Busan": 631493,
		"Incheon": 794249,
		"NewYork": 663977,
		"LA": 835352,
		"Washington": 804618,
		"Revenue": 4359992,
		"Year_attr": {
			"backgroundColor": "#ffffff",
			"styleName": "subTotalStyle"
		},
		"Quarter_attr": {
			"colSpan": 2,
			"styleName": "allTotalHeaderStyle"
		},
		"_rattr": {
			"styleName": "allTotalStyle",
			"backgroundColor": "#4f7adc"
		},
		"children": [
			{
				"Year": "1/4",
				"Quarter": "1/4 SUM",
				"Seoul": 140034,
				"Busan": 167482,
				"Incheon": 217086,
				"NewYork": 178502,
				"LA": 174033,
				"Washington": 245098,
				"Revenue": 1122235,
				"Percent": 100,
				"Year_attr": {
					"backgroundColor": "#ffffff"
				},
				"Quarter_attr": {
					"colSpan": 2,
					"styleName": "subTotalStyle"
				},
				"_rattr": {
					"backgroundColor": "#edf1fb"
				},
				"children": [
					{
						"Quarter": "1/4",
						"Month": 1,
						"Seoul": 109520,
						"Busan": 40454,
						"Incheon": 82477,
						"NewYork": 47424,
						"LA": 103225,
						"Washington": 61161,
						"Revenue": 444260,
						"Percent": 40,
						"Quarter_attr": {
							"rowSpan": 3
						}
					},
					{
						"Quarter": "1/4",
						"Month": 2,
						"Seoul": 15749,
						"Busan": 29714,
						"Incheon": 31393,
						"NewYork": 45006,
						"LA": 17945,
						"Washington": 90148,
						"Revenue": 229956,
						"Percent": 20
					},
					{
						"Quarter": "1/4",
						"Month": 3,
						"Seoul": 14766,
						"Busan": 97314,
						"Incheon": 103216,
						"NewYork": 86072,
						"LA": 52863,
						"Washington": 93789,
						"Revenue": 448020,
						"Percent": 40
					}
				]
			},
			{
				"Year": "2/4",
				"Quarter": "2/4 SUM",
				"Seoul": 172411,
				"Busan": 162547,
				"Incheon": 110240,
				"NewYork": 174627,
				"LA": 242180,
				"Washington": 224855,
				"Revenue": 1086861,
				"Percent": 100,
				"Year_attr": {
					"backgroundColor": "#ffffff"
				},
				"Quarter_attr": {
					"colSpan": 2,
					"styleName": "subTotalStyle"
				},
				"_rattr": {
					"backgroundColor": "#edf1fb"
				},
				"children": [
					{
						"Quarter": "2/4",
						"Month": 4,
						"Seoul": 52352,
						"Busan": 56859,
						"Incheon": 15688,
						"NewYork": 65438,
						"LA": 39181,
						"Washington": 109514,
						"Revenue": 339031,
						"Percent": 31,
						"Quarter_attr": {
							"rowSpan": 3
						}
					},
					{
						"Quarter": "2/4",
						"Month": 5,
						"Seoul": 100842,
						"Busan": 30391,
						"Incheon": 23745,
						"NewYork": 72742,
						"LA": 102195,
						"Washington": 30407,
						"Revenue": 360322,
						"Percent": 33
					},
					{
						"Quarter": "2/4",
						"Month": 6,
						"Seoul": 19217,
						"Busan": 75298,
						"Incheon": 70807,
						"NewYork": 36447,
						"LA": 100805,
						"Washington": 84934,
						"Revenue": 387508,
						"Percent": 36
					}
				]
			},
			{
				"Year": "3/4",
				"Quarter": "3/4 SUM",
				"Seoul": 262060,
				"Busan": 225778,
				"Incheon": 220871,
				"NewYork": 205598,
				"LA": 135118,
				"Washington": 233539,
				"Revenue": 1282965,
				"Percent": 100,
				"Year_attr": {
					"backgroundColor": "#ffffff"
				},
				"Quarter_attr": {
					"colSpan": 2,
					"styleName": "subTotalStyle"
				},
				"_rattr": {
					"backgroundColor": "#edf1fb"
				},
				"children": [
					{
						"Quarter": "3/4",
						"Month": 7,
						"Seoul": 74324,
						"Busan": 64947,
						"Incheon": 101350,
						"NewYork": 34673,
						"LA": 24486,
						"Washington": 57781,
						"Revenue": 357561,
						"Percent": 28,
						"Quarter_attr": {
							"rowSpan": 3
						}
					},
					{
						"Quarter": "3/4",
						"Month": 8,
						"Seoul": 85932,
						"Busan": 95733,
						"Incheon": 40327,
						"NewYork": 69255,
						"LA": 80024,
						"Washington": 102739,
						"Revenue": 474011,
						"Percent": 37
					},
					{
						"Quarter": "3/4",
						"Month": 9,
						"Seoul": 101804,
						"Busan": 65098,
						"Incheon": 79194,
						"NewYork": 101669,
						"LA": 30608,
						"Washington": 73020,
						"Revenue": 451393,
						"Percent": 35
					}
				]
			},
			{
				"Year": "4/4",
				"Quarter": "4/4 SUM",
				"Seoul": 272063,
				"Busan": 193016,
				"Incheon": 169637,
				"NewYork": 117660,
				"LA": 229449,
				"Washington": 153858,
				"Revenue": 1135684,
				"Percent": 100,
				"Year_attr": {
					"backgroundColor": "#ffffff"
				},
				"Quarter_attr": {
					"colSpan": 2,
					"styleName": "subTotalStyle"
				},
				"_rattr": {
					"backgroundColor": "#edf1fb"
				},
				"children": [
					{
						"Quarter": "4/4",
						"Month": 10,
						"Seoul": 92130,
						"Busan": 91881,
						"Incheon": 45166,
						"NewYork": 65524,
						"LA": 45348,
						"Washington": 72708,
						"Revenue": 412757,
						"Percent": 36,
						"Quarter_attr": {
							"rowSpan": 3
						}
					},
					{
						"Quarter": "4/4",
						"Month": 11,
						"Seoul": 80925,
						"Busan": 70537,
						"Incheon": 25347,
						"NewYork": 29360,
						"LA": 76296,
						"Washington": 42766,
						"Revenue": 325230,
						"Percent": 29
					},
					{
						"Quarter": "4/4",
						"Month": 12,
						"Seoul": 99008,
						"Busan": 30598,
						"Incheon": 99124,
						"NewYork": 22776,
						"LA": 107805,
						"Washington": 38384,
						"Revenue": 397696,
						"Percent": 35
					}
				]
			}
		]
	}
];
