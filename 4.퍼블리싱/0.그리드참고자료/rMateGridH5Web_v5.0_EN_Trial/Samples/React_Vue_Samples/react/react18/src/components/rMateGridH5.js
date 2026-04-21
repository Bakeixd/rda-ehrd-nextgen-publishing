import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class rMateGridH5 extends Component {
	constructor(props) {
		super(props);

		this.grid = window.rMateGridH5;

		// 그리드에서 사용하는 변수
		this.gridApp = null;
		this.gridRoot = null;
		this.gridData = null;

		//그리드 콜백 함수에 this 바인딩
		this.getReadyHandler = this.getReadyHandler.bind(this);
	}

	////////////////////////////////////////////////////////////////////////////////////////////////
	//
	//	Life-Cycle
	//
	////////////////////////////////////////////////////////////////////////////////////////////////

	render() {
		return <div id={this.props.holderId} className="gridHolder"></div>;
	}

	componentDidMount() {
		this.create();
	}

	componentDidUpdate() {
		let props = this.props;
		if (props.layout) this.setLayout(props.layout);
		if (props.data) this.setData(props.data);
	}

	componentWillUnmount() {
		this.destroy();
	}

	////////////////////////////////////////////////////////////////////////////////////////////////
	//
	//	methods
	//
	////////////////////////////////////////////////////////////////////////////////////////////////

	jsVar() {
		return { rMateOnLoadCallFunction: this.getReadyHandler };
	}

	/**
	 * rMateChartH5 객체 생성
	 */
	create() {
		const props = this.props;
		this.grid.setAssetsPath('rMateGridH5/Assets/'); //icon을 build시 사용하기 위해 설정
		this.grid.create(props.gridId, props.holderId, this.jsVar());
	}

	/**
	 * rMateChartH5 객체 삭제
	 */
	destroy() {
		this.gridApp.destroy();
	}

	/**
	 * 레이아웃 설정
	 */
	setLayout(layout) {
		this.gridApp.setLayout(layout);
	}

	/**
	 * 데이터 설정
	 */
	setData(data) {
		this.gridApp.setData(data);
	}

	/**
	 * jsVar에서 그리드의 속성인 rMateOnLoadCallFunction 으로 설정된 그리드 생성 준비 완료 콜백 함수입니다.
	 * @param id - rMateGridH5.create() 사용 시 사용자가 지정한 id 입니다.
	 */
	getReadyHandler(id) {
		let props = this.props;
		let gridApp = (this.gridApp = document.getElementById(id));
		let gridRoot = (this.gridRoot = gridApp.getRoot());
		gridApp.setLayout(props.layout);
		gridApp.setData(props.data);

		gridRoot.addEventListener(
			'layoutComplete',
			function () {
				this.dataGrid = gridRoot.getDataGrid();
			},
			this,
		);
	}
}

// 기본 파라메터 값 타입
rMateGridH5.propTypes = {
	gridId: PropTypes.string, // 그리드 아이디
	holderId: PropTypes.string, // 그리드가 그려질 객체 아이디
	// 그리드 레이아웃
	layout: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.string,
	]),
	// 그리드 데이터
	data: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.array,
	]),
};

// 기본 값
rMateGridH5.defaultProps = {
	gridId: 'grid',
	holderId: 'gridHolder',
};
