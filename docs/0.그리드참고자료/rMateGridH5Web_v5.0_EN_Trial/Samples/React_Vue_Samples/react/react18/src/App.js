import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Routes
} from "react-router-dom";
import SampleButton from "./components/SampleButton";
import RMateGridH5 from "./components/rMateGridH5";

class App extends Component {
	render(){
		let samples = this.props.samples,
			rootSample = samples[0],
			//현재 경로의 상위 경로를 Get
			locPath = window.location.pathname.replace(/\/([^/]+)?$/, "");
		
		return (
			//basename은 상대경로를 지원하지 않기 때문에 process.env.PUBLIC_URL 대신 window.location.pathname을 사용
			///*사용은 /와 /index.html 모두 사용할 수 있게 하기 위함
			<Router basename={locPath}>
				<div className="title">알메이트-그리드</div>
				<div className="title sub">(rMate Grid for HTML5 v5.0) for React 18.1.0</div>
				<div className="sampleButtons">
					{
						samples.map(item => 
							<SampleButton key={item.name} sample={item}/>
						)
					}
				</div>
				<Routes>
					<Route key="/*" path="/*" element={
						<RMateGridH5 layout={rootSample.props.layout} data={rootSample.props.data}/>
					}/>
					{
						samples.map(item =>
							<Route key={item.path} path={item.path} element={
								<RMateGridH5 layout={item.props.layout} data={item.props.data}/>
							}/>
						)
					}
				</Routes>
				<div className="content">
					해당 샘플은 react-router-dom을 활용한 알메이트-그리드 React 샘플입니다.<br/>
					react-router-dom은 React 프로젝트와 별개로 추가 설치해주셔야합니다.<br/>
					자세한 내용은 <a target="_blank" href={locPath + "/React_그리드_샘플_가이드.docx"}>샘플 가이드</a>를 참고해주세요.
				</div>
			</Router>
		);
	}
}

export default App;