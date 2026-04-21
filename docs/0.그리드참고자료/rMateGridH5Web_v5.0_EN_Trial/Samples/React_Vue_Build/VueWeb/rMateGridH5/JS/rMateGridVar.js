// 그리드웃에서 사용하는 함수를 정의하는 js
// 전역 함수로 선언되어야 하므로, var(let, const)없이 선언해주세요.

//Column_LabelJsFunction.html
//labelJsFunction에서 call하는 함수
convertQuarter = function (item, value, column, callByExport) {
	var month = item["Month"];
	var quarter = item["Quarter"];
	var result = "";
	if (month != null) result += month + "월";
	if (quarter != null)
		if (result.length > 0) result += " (" + quarter + ")";
		else result = quarter;

	return result;
};