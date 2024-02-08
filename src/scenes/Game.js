import { Scene } from 'phaser';

export class Game extends Scene
{
    constructor ()
    {
        super('Game');
    }

    create ()
    {
        this.add.image(512, 384, 'sky')
        this.createPlatforms()
        

        this.input.once('pointerdown', () => {

            this.scene.start('GameOver');

        });
    }

    createPlatforms () 
    {
        const platforms = this.physics.add.staticGroup()

        platforms.create(512, 660, 'platform').setScale(2).refreshBody()
        platforms.create(312, 484, 'platform')
        platforms.create(712, 350, 'platform')
    }
}
