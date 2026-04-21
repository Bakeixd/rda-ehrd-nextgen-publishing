<template>
	<div class="title">알메이트-그리드</div>
	<div class="title sub">(rMate Grid for HTML5 v6.0) for Vue3</div>
	<div class="sampleButtons">
		<SampleButton v-for="sample in samples" :key="sample.id" :sample="sample"></SampleButton>
	</div>
	<router-view :key="$route.fullPath" />
	<div className="content">
		해당 샘플은 vue-router를 활용한 rMateGrid Vue 샘플입니다.<br />
		vue-router는 Vue 프로젝트와 별개로 추가로 설치해주셔야 합니다.<br/>
		자세한 내용은 <a target="_blank" href="Vue_그리드_샘플_가이드.docx">샘플 가이드</a>를 참고해주세요.
	</div>
</template>

<script>
import SampleButton from './components/SampleButton.vue';

export default {
	name: 'App',
	props: ['samples'],
	components: {
		SampleButton,
	},
};
</script>

<style>
html,
body {
	width: 100%;
	margin: 0;
	padding: 0;
}

* {
	box-sizing: border-box;
}

#app {
	width:900px;
	height:auto;
	margin:50px auto;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.title{
	font-weight: bold;
	text-align: center;
	font-size: 30px;
	line-height: 35px;
	letter-spacing:-2px;
}

.title.sub{
	font-size: 18px;
	letter-spacing:0px;
}

.content{
	line-height:23px;
}
</style>