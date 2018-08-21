function removeBlankCook(data) {
	return data.filter((e) => e.cookTime !== '');
}

export function removeBlankPrep(data) {
	return data.filter((e) => e.prepTime !== '');
}

export function lessThanOneHour(data) {
	const convertToSeconds = (input) => {
		let reptms = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/;
		let hours = 0,
			minutes = 0,
			seconds = 0,
			totalseconds;

		if (reptms.test(input)) {
			let matches = reptms.exec(input);
			if (matches[1]) hours = Number(matches[1]);
			if (matches[2]) minutes = Number(matches[2]);
			if (matches[3]) seconds = Number(matches[3]);
			totalseconds = hours * 3600 + minutes * 60 + seconds;
		}
		return totalseconds;
	};
	const newData = data;

	newData.forEach((element) => {
		if (convertToSeconds(element.prepTime) < 3600) {
			newData['quickPrep'] = true;
		} else {
			newData['quickPrep'] = false;
		}

		if (convertToSeconds(element.cookTime) < 3600) {
			newData['quickCook'] = true;
		} else {
			newData['quickCook'] = false;
		}
	});
	return newData;
}

export function lessThan10Items(data) {
	const newData = data;

	function calcIngredient(ingredients) {
		return ingredients.split('\n').length;
	}

	newData.forEach((element) => {
		if (calcIngredient(element.ingredients) < 10) {
			element['lessThan10'] = true;
		} else {
			element['lessThan10'] = false;
		}
	});

	return newData;
}
