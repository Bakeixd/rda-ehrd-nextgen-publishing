<template>
	<router-link :to="sample.path"
		><div class="sample-button">{{ sample.name }}</div></router-link
	>
</template>

<script>
export default {
	props: {
		sample: Object,
	},
};
</script>

<style>
.sampleButtons {
	display: flex;
	font-size: 13px;
	margin-bottom: 10px;
}

.sampleButtons > a {
	display: inherit;
	align-items: center;
	justify-content: center;

	margin: 6px;

	width: 100%;
	height: 30px;

	border-radius: 5px;
	text-decoration: none;
	background-color: rgba(49, 57, 63, 0.6);

	transition: all 0.2s ease;
}

.sampleButtons > a:hover {
	background-color: rgba(49, 57, 63, 0.9);
	box-shadow: -7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9, 7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001;
}

.sampleButtons > a > div {
	width: auto;
	cursor: pointer;
	color: #fff;
	transition: color 0.2s;
}
</style>
