
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
		
		// ui
		const ui = this.add.container(0, 0);
		
		// fields
		this.cellGrid = cellGrid;
		this.orangeButton = orangeButton;
		this.greenButton = greenButton;
		this.blueButton = blueButton;
		this.redButton = redButton;
		this.ui = ui;
		
	}
	
	/* START-USER-CODE */

	create() {
		this.data.set('conqueredCellsCount', 0);

		// this.conquerCount = this.add.dom(54, 200, (() => {
		// 	const infectedSign = document.createElement('div');
		// 	infectedSign.classList.add('text', 'infected');
		// 	return infectedSign;
		// })());
		// this.conquerCount.setOrigin(0, 0);
		// this.conquerCount.setText('заражено: 0');


		this.data.events.on('changedata-conqueredCellsCount', (level, value) => {
			// this.conquerCount.setText(`заражено: ${value}`);
			if (this.registry.get('mode') ==='playing') {
				console.log('incrementing score');
				this.data.inc('score');
			}

			const cellsAmount = this.cellGrid.getData('cellsAmount');

			if (value !== 0 && cellsAmount !== 0 && value === cellsAmount) {
				console.log('conqueredCellsCount ', value, ' cellsAmount ', cellsAmount);
				if (!AUTOPLAY) {
					setTimeout(() => {
						console.log('COMPLETE LEVEL');
						// this.data.events.removeAllListeners();
						// this.scene.restart();
						clearTimeout(this.gameOverTimeout);
						this.applyMap();
					}, 1000)
				}
			}
		})


		this.editorCreate();

		this.data.set('score', 0);
		const scoresText = new Phaser.GameObjects.DOMElement(this, 54, 200, (() => {
			const stepsDiv = document.createElement('div');
			stepsDiv.classList.add('text', 'count');
			return stepsDiv;
		})());
		scoresText.setText(`очки: ${this.data.get('score')}`);
		scoresText.setOrigin(0, 0);
		this.ui.add(scoresText);
		this.data.events.on('changedata-score', (level, value) => {
			scoresText.setText(`очки: ${value}`);
		})

		const steps = new Phaser.GameObjects.DOMElement(this, 540, 1400, (() => {
				const stepsDiv = document.createElement('div');
				stepsDiv.classList.add('text', 'possibleUserSteps');
				return stepsDiv;
			})());
		steps.setText(`шагов: ${this.data.get('possibleUserSteps')}`);
		
		this.ui.add(steps);

		const gameOverModal = new GameOverModal(this, 0, 0, () => {
			console.log('on restart button click!');
			this.applyMap();
			gameOverModal.x = 3000;
		});
		gameOverModal.setOrigin(0, 0);	
		gameOverModal.x = 3000;		
		this.ui.add(gameOverModal);

		this.data.set('possibleUserSteps', 10000);
		this.data.events.on('changedata-possibleUserSteps', (level, value) => {
			console.log('changedata-possibleUserSteps ', value);
			steps.setText(`шагов: ${value}`);
			this.gameOverTimeout = setTimeout(() => {
				console.log('afterTimeout value is ', value);
				if (value <= 0 && this.data.get('conqueredCellsCount') !== this.cellGrid.getData('cellsAmount') && !AUTOPLAY) {
					console.log('showing gameOver');
					gameOverModal.x = 0;
				}
			}, 1200)
		});

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


		this.applyMap();
	}

	applyMap() {
		this.registry.set('mode', 'applying map');
		// const level = getLevel();
		let map;
		if (AUTOPLAY) {
			map = SAVED_LEVEL;
		} else {
			map = MAPS.shift();
		}
		this.cellGrid.loadLevel(map);
		this.data.set('possibleUserSteps', map.minSteps.length);
		this.data.set('conqueredCellsCount', 0);
		this.registry.set('mode', 'playing');
		this.userCell.setConquered();
		this.events.emit('mapApplied', this);
	}

	onUserChangeColor(newColor) {
		console.log('onUserChangeColor');
		const possibleUserSteps = this.data.get('possibleUserSteps');
		if (possibleUserSteps > 0) {
			this.userCell.setColor(newColor);
			this.data.set('possibleUserSteps', this.data.get('possibleUserSteps') -1);
		}
	}

	incConqueredCellsCount() {
		this.data.inc('conqueredCellsCount');
	}

	// update() {
	// 	// console.log('hello from scene update');
	// 	console.log('conqueredCellsCount ', this.data.get('conqueredCellsCount'))

	// }

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
