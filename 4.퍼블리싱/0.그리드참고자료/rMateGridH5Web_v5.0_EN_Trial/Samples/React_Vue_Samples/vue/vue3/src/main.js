import { createApp } from "vue";
import router from "./router";
import App from "@/src/App.vue";

// rMatGridH5 그리드 컴포넌트
import GridH5 from "@/src/components/rMateGridH5.vue";

// samples의 데이터를 가지고 component 를 설정하고 각 샘플에 맞는 ...sample안의 설정 값을 props에 저장한다.
var sample,
	samples = [
		{ path: '/', js: 'Column_LabelJsFunction', name: '루트 샘플' }, //루트 샘플 데이터는 Router에 추가 후 삭제할 예정
		{ path: '/labelJsFunction', js: 'Column_LabelJsFunction', name: '라벨 변경' },
		{ path: '/filterable', js: 'Column_Filterable', name: '필터링' },
		{ path: '/summary_Total', js: 'Summary_Total', name: '합계 행 표시' },
		{ path: '/spanHierarchy', js: 'SpanHierarchy_JSON_Data', name: '계층형 그리드' },
		{ path: '/textArea', js: 'Renderer_TextArea', name: 'TextArea' },
		{ path: '/icon_Column', js: 'Renderer_Icon_Column', name: 'Icon 삽입' },
	];

for (sample in samples) {
	sample = samples[sample];
	loadSamples(sample);

	sample.component = GridH5; // component 를 rMateChartH5.vue 로 설정
	router.addRoute(sample);
}

//루트 샘플데이터 삭제
samples.splice(0, 1);

/**
 * sample.js 를 가져와 해당 샘플에 정의된 내용을 토대로 router-view에 출력될 내용을 가공한다.
 *
 * @param {object} sample - samples.js 에 설정된 배열 데이터 안의 하나의 객체 데이터
 */

function loadSamples(sample){
	// 현재 선택된 샘플 js안의 데이터를 가져온다
	let data = require("./samples/" + sample.js + ".js");
		
	sample.props = {
		layout : data.layoutStr,
		data : data.gridData
	};
	
	// 기본 차트 아이디 이외에 설정 하였을 경우
	if (data.gridId) 
		sample.props.gridId = data.gridId;
		
	// 기본 차트 홀더 아이디 이외에 설정 하였을 경우
	if(data.holderId)
		sample.props.holderId = data.holderId;
		
	if (data.gridVars) 
		sample.props.gridVars = data.gridVars;
		
	// 샘플 레이아웃에서 직접 함수를 사용하지 않고 methods에 설정하였을경우
	if(data.methods){
		if(!window.rMateGridH5.methods)
			window.rMateGridH5.methods = {};
			
		window.rMateGridH5.methods[sample.js] = data.methods;
	}
}

createApp(App, { samples: samples }).use(router).mount("#app");
