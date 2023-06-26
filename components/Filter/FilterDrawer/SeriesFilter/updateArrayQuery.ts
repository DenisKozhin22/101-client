export const updateArrayQuery = (array: string, newValue: string) => {
	const newArray = array ? String(array).split('-') : []

	const index = newArray.indexOf(newValue)

	if (index === -1) {
		newArray.push(newValue)
	} else {
		newArray.splice(index, 1)
	}

	return newArray.join('-')
}
