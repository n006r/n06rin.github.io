
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {
	
	constructor() {
		super("Level");
		
	}
	
	editorCreate() {
		
		// cellGrid
		const cellGrid = new CellGrid(this, 89, 290);
		this.add.existing(cellGrid);
		
		// orangeButton
		const orangeButton = new ChooseColorButton(this, 68, 1632, "orangeSq68px");
		this.add.existing(orangeButton);
		
		// greenButton
		const greenButton = new ChooseColorButton(this, 340, 1632, "greenSq68px");
		this.add.existing(greenButton);
		
		// blueButton
		const blueButton = new ChooseColorButton(this, 612, 1632, "blueSq68px");
		this.add.existing(blueButton);
		
		// redButton
		const redButton = new ChooseColorButton(this, 884, 1632, "redSq68px");
		this.add.existing(redButton);
		
		// fields
		this.cellGrid = cellGrid;
		this.orangeButton = orangeButton;
		this.greenButton = greenButton;
		this.blueButton = blueButton;
		this.redButton = redButton;
		
	}
	
	/* START-USER-CODE */

	create() {
		this.data.set('conqueredCellsCount', 0);
		const infectedSign = document.createElement('div');
		infectedSign.classList.add('text', 'infected');

		this.conquerCount = this.add.dom(54, 200, infectedSign);
		this.conquerCount.setOrigin(0, 0);
		this.conquerCount.setText('заражено: 0');


		this.data.events.on('changedata-conqueredCellsCount', (level, value) => {
			this.conquerCount.setText(`заражено: ${value}`);

			if (value === this.cellGrid.getData('cellsAmount')) {
				if (!AUTOPLAY) {
					setTimeout(() => {
						this.scene.restart();
					}, 1000)
				}
			}
		})


		this.editorCreate();

		const level = getLevel();
		this.cellGrid.loadLevel(level);

		this.data.set('possibleUserSteps', level.minSteps.length);

		const stepsDiv = document.createElement('div');
		stepsDiv.classList.add('text', 'possibleUserSteps');
		this.stepsCount = this.add.dom(540, 1400, stepsDiv);
		this.stepsCount.setOrigin(0, 0);
		this.stepsCount.setText(`шагов: ${this.data.get('possibleUserSteps')}`);

		this.data.events.on('changedata-possibleUserSteps', (level, value) => {
			console.log('changedata-possibleUserSteps ', value);
			this.stepsCount.setText(`шагов: ${value}`);
			if (value <= 0) {
				if (!AUTOPLAY) {
					setTimeout(() => {
						this.scene.restart();
					}, 1000)
				}
			}
		})

		this.userCell = this.cellGrid.userCell;

		this.orangeButton.on('pointerdown', () => {
			this.onUserChangeColor(COLORS.ORANGE);
		});

		this.greenButton.on('pointerdown', () => {
			this.onUserChangeColor(COLORS.GREEN);
		});

		this.blueButton.on('pointerdown', () => {
			this.onUserChangeColor(COLORS.BLUE);
		});

		this.redButton.on('pointerdown', () => {
			this.onUserChangeColor(COLORS.RED);
		});
	}

	onUserChangeColor(newColor) {
		console.log('onUserChangeColor');
		this.userCell.setColor(newColor);
		this.data.set('possibleUserSteps', this.data.get('possibleUserSteps') -1);
	}

	incConqueredCellsCount() {
		this.data.inc('conqueredCellsCount')
	}

	// update() {
	// 	// console.log('hello from scene update');
	// 	console.log('conqueredCellsCount ', this.data.get('conqueredCellsCount'))

	// }

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
