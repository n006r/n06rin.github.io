
// You can write more code here

/* START OF COMPILED CODE */

class Cell extends Phaser.GameObjects.Sprite {
	
	constructor(scene, x, y, texture, frame) {
		super(scene, x, y, texture || "blueSq68px");
		
		
		this.init();
		
	}
	
	/* START-USER-CODE */

	init() {
		this.setData('isConquered', false);
		this.setData('color', getColorByTextureKey(this.texture.key));

		this.on('changedata-isConquered', (gameObj, value, prevValue) => {
			this.scene.incConqueredCellsCount();

			if (value !== prevValue) {
				this.startConquerVibe();
				this.notifyNeighbors();
			}
		})
		this.on('changedata-color', (gameObj, value, prevValue) => {
			this.setTexture(getColorTextureKeyByColor(value));

			if (value !== prevValue) {
				this.startConquerVibe();
				this.notifyNeighbors();
			}
		})


		this.neighbors = [];
	}

	neighborCellUpdated(newColor, isConquered) {
		const selfColor = this.getData('color');
		const selfIsConquered = this.getData('isConquered');
		if (newColor === selfColor || selfIsConquered && isConquered) {
			if (!selfIsConquered && isConquered) {
				this.setConquered();
			}
			if (selfColor !== newColor) {
				this.setColor(newColor);
			}
		}
	}

	setColor(newColor) {
		this.setData('color', newColor);
	}
	setConquered() {
		this.setData('isConquered', true);
	}

	notifyNeighbors() {
		setTimeout(() => {
			this.neighbors.forEach(neighbor => {
				neighbor.neighborCellUpdated(this.getData('color'), this.getData('isConquered'));
			})
		}, 50)
	}

	startConquerVibe() {
		if (this.tween) {
			this.tween.stop();
			this.tween.remove();
			this.scaleX = 1;
			this.scaleY = 1;
		}

		this.tween = this.scene.tweens.add({
			targets: this,
			scaleX: 1.1,
			scaleY: 1.1,
			ease: 'Sine.easeInOut',
			yoyo: true,
			duration: 100,
			onComplete: this.livingVibe.bind(this),
		});
	}

	livingVibe() {
		if (this.tween) {
				this.tween.stop();
				this.tween.remove();
				this.scaleX = 1;
				this.scaleY = 1;
			}
		this.tween = this.scene.tweens.add({
			targets: this,
			scaleX: 1.05,
			scaleY: 1.05,
			ease: 'Sine.easeInOut',
			repeat: -1,
			yoyo: true,
			duration: 300,
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
