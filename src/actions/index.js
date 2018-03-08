export const addCount = function (text) {
	return {
		type: "ADD_COUNT",
		text
	}
}

export const delCount = function () {
	return {
		type: "DEL_COUNT"
	}
}

export const restCount = () => ({
	type: "REST_COUNT"
})

