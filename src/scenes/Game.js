import { Scene } from 'phaser';

const GROUND_KEY = 'platform'
const SKY_KEY = 'sky'

export class Game extends Scene
{
    constructor ()
    {
        super('Game');
    }

    create ()
    {
        this.add.image(512, 384, SKY_KEY)
        this.createPlatforms()
        

        this.input.once('pointerdown', () => {

            this.scene.start('GameOver');

        });
    }

    createPlatforms () 
    {
        const platforms = this.physics.add.staticGroup()

        platforms.create(512, 660, GROUND_KEY).setScale(2).refreshBody()
        platforms.create(312, 484, GROUND_KEY)
        platforms.create(712, 350, GROUND_KEY)
    }
}
