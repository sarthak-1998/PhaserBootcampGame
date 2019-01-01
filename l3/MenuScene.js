class MenuScene extends Phaser.Scene
{
    constructor (){
        super ({key:"menu"})
    }

preload(){


}


create (){
this.add.text(100,100,"Menu",{ fill : "#ffffff"})

this.scene.switch('play');


}

    
}