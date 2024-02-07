import { Scene } from 'phaser';

export class Preloader extends Scene
{
    constructor ()
    {
        super('Preloader');
    }

    preload ()
    {
        this.load.setPath('assets');

        this.load.image('background', 'bg.png')
        this.load.image('logo', 'logo.png');
        this.load.image('platform', 'platform.png')
        this.load.image('sky', 'sky.png')
        this.load.image('star', 'star.png')
        this.load.spritesheet('dude', 'dude.png', { frameWidth: 32, frameHeight: 48 })
    }

    create ()
    {
        this.scene.start('MainMenu');
    }
}
