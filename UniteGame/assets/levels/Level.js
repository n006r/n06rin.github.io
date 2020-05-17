
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {
	
	constructor() {
		super("Level");
		
	}
	
	editorCreate() {
		
		// cellGrid
		const cellGrid = new CellGrid(this, 58.87617963536448, 92.76053807592268);
		this.add.existing(cellGrid);
		
		// orangeButton
		const orangeButton = new ChooseColorButton(this, 55, 1491, "orangeSq68px");
		this.add.existing(orangeButton);
		
		// greenButton
		const greenButton = new ChooseColorButton(this, 303, 1491, "greenSq68px");
		this.add.existing(greenButton);
		
		// blueButton
		const blueButton = new ChooseColorButton(this, 555.640919442562, 1495.1204910186661, "blueSq68px");
		this.add.existing(blueButton);
		
		// redButton
		const redButton = new ChooseColorButton(this, 809.4254899839597, 1497.1251759682991, "redSq68px");
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
		this.editorCreate();

		this.userCell = this.cellGrid.userCell;

		this.orangeButton.on('pointerdown', () => {
			console.log('click on orange button');
			this.userCell.updateColorTo(COLORS.ORANGE);
		});

		this.greenButton.on('pointerdown', () => {
			console.log('click on green button');
			this.userCell.updateColorTo(COLORS.GREEN);
		});

		this.blueButton.on('pointerdown', () => {
			console.log('click on blue button');
			this.userCell.updateColorTo(COLORS.BLUE);
		});

		this.redButton.on('pointerdown', () => {
			console.log('click on red button');
			this.userCell.updateColorTo(COLORS.RED);
		});

		// const conqueredVibe = () => {
		// 	console.log('start conquered vibe');
		// 	this.tweens.add({
		// 		targets: this.cellGrid.list.filter(cell => cell.isConquered),
		// 		scaleX: 1.05,
		// 		scaleY: 1.05,
		// 		ease: 'Sine.easeInOut',
		// 		// delay: i * 50,
		// 		// repeat: -1,
		// 		yoyo: true,
		// 		duration: 800,
		// 		// repeatDelay: 100,
		// 		onComplete: conqueredVibe,
		// 	})
		// }

		// conqueredVibe();
	}

	// update() {
	// 	console.log('hello from scene update');
	// }

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
