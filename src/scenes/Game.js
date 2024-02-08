import { Scene } from 'phaser';

const GROUND_KEY = 'platform'
const SKY_KEY = 'sky'
const DUDE_KEY = 'dude'

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
        this.createPlayer()
        

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

    createPlayer ()
    {
        this.player = this.physics.add.sprite(512, 384, DUDE_KEY)
        this.player.setBounce(0.2)
        this.player.setCollideWorldBounds(true)

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers(DUDE_KEY, { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        })
        this.anims.create({
            key: 'turn',
            frames: [ { key: DUDE_KEY, frame: 4 } ],
            frameRate: 20
        })
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers(DUDE_KEY, { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        })
    }

}
