/* eslint-disable */

import React from 'react';
import {createRoot} from 'react-dom/client';

import './index.css';

import App from './App';
import samples from "./samples";
import reportWebVitals from './reportWebVitals';

for(let sample in samples){
	sample = samples[sample];
	loadSamples(sample);
}

/**
 * sample.js 를 가져와 해당 샘플에 정의된 내용을 토대로 router-view에 출력될 내용을 가공한다.
 * 
 * @param {object} sample - samples.js 에 설정된 배열 데이터 안의 하나의 객체 데이터
 */
function loadSamples(sample){
	// 현재 선택된 샘플 js안의 데이터를 가져온다
	const name = sample.name,
		data = require("./samples/" + sample.js + ".js");
		
	sample.props = {
		layout : data.layoutStr,
		data : data.gridData
	};

	if (data.gridId) 
		sample.props.gridId = data.gridId;
		
	// 기본 차트 홀더 아이디 이외에 설정 하였을 경우
	if(data.holderId)
		sample.props.holderId = data.holderId;
}

const container = document.getElementById('root');
createRoot(container).render(<App samples={samples}/>);
//ReactDOM.render(<App samples={samples}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
reportWebVitals();
