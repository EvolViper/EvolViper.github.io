var game = new Phaser.Game(1300, 910, Phaser.AUTO);

var GameState = {
   preload: function() {
        this.load.image("background", "assets/images/background.jpg");
        this.load.image("chicken", "assets/images/chicken.png");
        this.load.image("pig", "assets/images/pig.png");
        this.load.image("sheep", "assets/images/sheep.png");
        this.load.image("arrow", "assets/images/arrow.png");
        this.load.image("horse", "assets/images/horse.png");
        
        this.load.audio("horseSound", ["assets/audio/horse.mp3", "assets/audio/horse.ogg"]);
        this.load.audio("chickenSound", ["assets/audio/chicken.mp3", "assets/audio/chicken.ogg"]);
        this.load.audio("sheepSound", ["assets/audio/sheep.mp3", "assets/audio/sheep.ogg"]);
        this.load.audio("pigSound", ["assets/audio/pig.mp3", "assets/audio/pig.ogg"]);
    },
    create: function() {
        
        
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        
       
        
        this.background = this.game.add.sprite(0, 0, "background");
               
        var animalDate = [
            {key: "chicken", text: "CHICKEN", audio: "chickenSound"},
            {key: "horse", text: "HORSE", audio: "horseSound"},
            {key: "pig", text: "PIG", audio: "pigSound"},
            {key: "sheep", text: "SHEEP", audio: "sheepSound"},
        ];
        
        this.animals = this.game.add.group();
        
        var animal;
        var self = this;
        
        animalDate.forEach(function(element) {
            animal = GameState.animals.create(-2000, GameState.game.world.centerY, element.key);
            
            animal.customParams = {text: element.text, sound: GameState.game.add.audio(element.audio)};
            animal.anchor.setTo(0.5);
            
            animal.inputEnabled = true;
            animal.input.pixelPerfectClick = true;
            animal.events.onInputDown.add(GameState.animateAnimal, this);
        });
        
        this.currentAnimal = this.animals.next();
        this.currentAnimal.position.set(this.game.world.centerX, this.game.world.centerY);
        
        //Левая стрелка
        
        this.leftArrow = this.game.add.sprite(90, this.game.world.centerY, "arrow");
        this.leftArrow.anchor.setTo(0.5);
        this.leftArrow.scale.setTo(-0.5, 0.5);
        this.leftArrow.customParams = {direction: -1};
        
        this.leftArrow.inputEnabled = true;
        this.leftArrow.input.pixelPerfectClick = true;
        this.leftArrow.events.onInputDown.add(this.switchAnimal, this);
        
        //Правая стрелка
        
        this.leftArrow = this.game.add.sprite(1210, this.game.world.centerY, "arrow");
        this.leftArrow.anchor.setTo(0.5);
        this.leftArrow.scale.setTo(0.5, 0.5);
        this.leftArrow.customParams = {direction: 1};
        
        this.leftArrow.inputEnabled = true;
        this.leftArrow.input.pixelPerfectClick = true;
        this.leftArrow.events.onInputDown.add(this.switchAnimal, this);
        
        var style = {
            font: "52px Arial",
            fill: "white"
        };
        
        this.text = this.game.add.text(this.game.width/2, this.game.height * 0.85, "", style);
        this.text.anchor.setTo(0.5);
        
    },
    update: function() {
        //this.sheep.angle += 0.5;
    },
    
    switchAnimal: function(sprite, event) {
        
        this.text.visible = false;
        
        if(this.isMoving) {
            return false;
        }
        
        this.isMoving = true;
        
        var newAnimal, endX;
        
        if (sprite.customParams.direction > 0) {
            newAnimal = this.animals.next();
            console.log(newAnimal);
            newAnimal.x = -newAnimal.width/2;
            endX = 1300 + this.currentAnimal.width/2;
        }
        else {
            newAnimal = this.animals.previous();
            console.log(newAnimal);
            newAnimal.x = 1300 + newAnimal.width/2;
            endX = -this.currentAnimal.width/2;
        }
        
        //Анимация движения животных
        var newAnimalMovement = this.game.add.tween(newAnimal);
        newAnimalMovement.to({x: this.game.world.centerX}, 1000);
        newAnimalMovement.onComplete.add(function(){
            this.isMoving = false;
        }, this);
        newAnimalMovement.start();
        
        var currentAnimalMovement = this.game.add.tween(this.currentAnimal);
        currentAnimalMovement.to({x: endX}, 1000);
        currentAnimalMovement.start();
        
        this.currentAnimal = newAnimal;
    },
    
     showText: function(animal) {
        
        //this.text.setText("");
        this.text.visible = true;
        this.text.setText(animal.customParams.text);
    },
    
     animateAnimal: function(sprite, event) {
        //sprite.scale.setTo(-1, 1);
        sprite.customParams.sound.play();
        GameState.showText(sprite);
        
    }
};

game.state.add("GameState", GameState);
game.state.start("GameState");