class PlayScene extends Phaser.Scene
{
    constructor (){
        super ({
            key:"play",
            physics : {

                system : "impact",
                garvity : -100
            }
        })
    }

preload(){
this.load.spritesheet('run_sheet','assets/run.png',{frameWidth : 21,frameHeight : 33});

this.load.image("tile_image","assets/jungle tileset.png");
this.load.tilemapTiledJSON("map", "assets/game_map.json");
}


create (){

// this.add.text(100,100,"Play",{ fill : "#ffffff"})
// this.player = this.add.sprite(100,100,'run_sheet');
// this.run_anim= this.player.animation.add('run')
// this.run_anim.play();

//console.log("done");

//this.scene.switch('menu')

var map = this.add.tilemap("map");
var tileset = map.addTilesetImage("jungle_tile","tile_image");

var layer = map.createStaticLayer("main",tileset);
//var layer1 =map.createStaticLayer("asd",tileset);

var items=map.createFromObjects("a",10,{},this);



console.log(items);

}

    
}