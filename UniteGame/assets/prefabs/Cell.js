
// You can write more code here

/* START OF COMPILED CODE */

class Cell extends Phaser.GameObjects.Sprite {
	
	constructor(scene, x, y, texture, frame) {
		super(scene, x, y, texture || "blueSq68px");
		
		
		this.init();
		
	}
	
	/* START-USER-CODE */

	init() {
		this.isConquered = false;
		this.neighbors = [];
	}

	get color() {
		const textureKey = this.texture.key;
		return getColorByTextureKey(textureKey);
	}

	neighborCellUpdated(newColor, isConquered) {
		if (newColor === this.color || this.isConquered && isConquered) {
			this.upd(newColor, isConquered)
		}
	}
	
	upd(newColor, isConquered) {
		let updated = false;
		if (!this.isConquered && isConquered) {
			this.setConquered();
			updated = true;
		}
		if (this.color !== newColor) {
			this.updateColorTo(newColor);
			updated = true;
		}
		if (updated) {
			this.startConquerVibe();
			this.notifyNeighbors();
		}
	}

	updateColorTo(color) {
		const oldColor = this.color;
		this.setTexture(getColorTextureKeyByColor(color));
		this.notifyNeighbors();
	}

	notifyNeighbors() {
		setTimeout(() => {
			this.neighbors.forEach(neighbor => {
				neighbor.neighborCellUpdated(this.color, this.isConquered);
			})
		}, 50)
	}

	setConquered() {
		this.isConquered = true;
		this.scene.incConqueredCellsCount();
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
