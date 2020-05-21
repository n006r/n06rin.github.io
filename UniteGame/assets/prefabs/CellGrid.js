
// You can write more code here

const rowsAmount = 13;
const columnsAmount = 13;

/* START OF COMPILED CODE */

class CellGrid extends Phaser.GameObjects.Container {
	
	constructor(scene, x, y) {
		super(scene, x, y);
		
		
		// fields
		this.cellTextrures = [];
		this.grid = [];
		
		this.tes();
		
	}
	
	/* START-USER-CODE */

	// Write your code here.
	tes() {
		this.cellsAmount = 0;
		const grid = this.grid;
		for (let row = 0; row < rowsAmount; row++) {
			grid [row] = [];
			for (let column = 0; column < columnsAmount; column++) {
				const x = row * (68 + 7);
				const y = column * (68 + 7);
				const cell = new Cell(this.scene, x, y, getColorTextureKeyByColor(getRandomColor()));
				this.add(cell);
				grid[row][column] = cell;
				this.cellsAmount += 1;
			}
		}

		for (let row = 0; row < rowsAmount; row++) {
			for (let column = 0; column < columnsAmount; column++) {
				const cell = grid[row][column];
				if (row > 0) {
					cell.neighbors.push(grid[row - 1][column]);
				}
				if (column < columnsAmount - 1) {
					cell.neighbors.push(grid[row][column + 1]);
				}
				if (row < rowsAmount - 1) {
					cell.neighbors.push(grid[row + 1][column]);
				}
				if (column > 0) {
					cell.neighbors.push(grid[row][column - 1]);
				}
			}
		}

		this.userCell = grid[Math.floor(rowsAmount / 2)][Math.floor(columnsAmount / 2)];

		setTimeout(() => {
			this.userCell.setConquered();
			this.userCell.updateColorTo(this.userCell.color);
			this.userCell.startConquerVibe();
		}, 0);
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
