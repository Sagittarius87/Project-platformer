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

        this.input.once('pointerdown', () => {

            this.scene.start('GameOver');

        });
    }
}
