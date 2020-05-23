const rowsAmount = 13;
const columnsAmount = 13;

getLevel = () => {
    return LEVEL_1;

    
    if (SAVED_LEVEL) {
        return SAVED_LEVEL;
    }

    const grid = [];
	for (let row = 0; row < rowsAmount; row++) {
		grid [row] = [];
		for (let column = 0; column < columnsAmount; column++) {
			const cell = {color: getRandomColor()};
			grid[row][column] = cell;
		}
    }
    const r = {
        rowsAmount,
        columnsAmount,
        grid,
    };

    console.log('r is');
    console.log(JSON.stringify(r));
    SAVED_LEVEL = r;
    return r; 
}
