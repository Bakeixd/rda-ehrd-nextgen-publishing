<template>
	<!-- 그리드가 삽입될 div -->
	<div :id="holderId"></div>
</template>

<script>
export default {
	//샘플 그리드 생성에 필요한 데이터를 전달 받습니다.
	props: {
		gridId: {
			// 생성되는 그리드 아이디
			type: String,
			default: 'grid1',
		},
		holderId: {
			// 그리드가 삽입될 div 아이디
			type: String,
			default: 'gridHolder',
		},
		layout: [String, Object], // 그리드 레이아웃
		data: [Array, Object], // 그리드 데이터
	},
	data: () => {
		return {
			gridApp: null,
			gridRoot: null,
			dataGrid: null,
		};
	},
	computed: {
		//rMateGridH5에서 그리드 생성 준비 완료 후 호출할 함수를 지정합니다.
		jsVar() {
			return { rMateOnLoadCallFunction: this.getReadyHandler };
		},
	},
	mounted() {
		this.create();
	},
	beforeUnmount() {
		this.destroy();
	},
	methods: {
		/**
		 * rMateChartH5 객체 생성
		 */
		create: function () {
			this.grid = window.rMateGridH5;
			this.grid.setAssetsPath('rMateGridH5/Assets/'); //icon을 build시 사용하기 위해 설정
			this.grid.create(this.gridId, this.holderId, this.jsVar);
		},
		destroy: function () {
			this.gridApp.destroy();
		},
		/**
		 * jsVar에서 그리드의 속성인 rMateOnLoadCallFunction 으로 설정된 그리드 생성 준비 완료 콜백 함수입니다.
		 * @param id - rMateGridH5.create() 사용 시 사용자가 지정한 id 입니다.
		 */
		getReadyHandler: function () {
			this.gridApp = document.getElementById(this.gridId);
			this.gridRoot = this.gridApp.getRoot();

			this.gridApp.setLayout(this.layout);
			this.gridApp.setData(this.data);

			this.gridRoot.addEventListener(
				'layoutComplete',
				function () {
					this.dataGrid = this.gridRoot.getDataGrid();
				},
				this,
			);
		},
	},
};
</script>

<style>
#gridHolder {
	width: 100%;
	height: 500px;
	margin-bottom: 30px;
}
</style>
