class Game {
    constructor(gameplay, ctx, beatMap) {
        this.gameplay = gameplay;
        this.ctx = ctx;
        this.beatMap = beatMap;
        this.qPressed = false;
        this.wPressed = false;
        this.ePressed = false;
        this.rPressed = false;
        this.tPressed = false;
        this.paused = false;
        this.keyDownHandler = this.keyDownHandler.bind(this);
        this.keyUpHandler = this.keyUpHandler.bind(this);
        this.addBeatmap = this.addBeatmap.bind(this);
    }

    addListeners() {
        document.addEventListener("keydown", this.keyDownHandler, false);
        document.addEventListener("keyup", this.keyUpHandler, false);
    }

    

    keyDownHandler(e) {
        switch (e.key) {
            case ("q" || "Q" || "KeyQ"):
                if (this.qPressed == false) {
                    this.qPressed = true;
                    this.gameplay.addPressedKey(this.ctx, "q");
                }
                break;
            case ("w" || "W" || "KeyW"):
                if (this.wPressed == false) {
                    this.wPressed = true;
                    this.gameplay.addPressedKey(this.ctx,"w");
                }
                break;
            case ("e" || "E" || "KeyE"):
                if (this.ePressed == false) {
                    this.ePressed = true;
                    this.gameplay.addPressedKey(this.ctx,"e");
                }
                break;
            case ("r" || "R" || "KeyR"):
                if (this.rPressed == false) {
                    this.rPressed = true;
                    this.gameplay.addPressedKey(this.ctx,"r");
                }
                break;
            case ("t" || "T" || "KeyT"):
                if (this.tPressed == false) {
                    this.tPressed = true;
                    this.gameplay.addPressedKey(this.ctx,"t");
                }
                break;
            case ("p" || "P" || "KeyP"):
                if (this.paused == false) {
                    this.paused = true;
                }
                else if (this.paused){
                    this.paused = false;
                }
                break;
        }
    }

    keyUpHandler(e) {
        switch (e.key) {
            case ("q" || "Q" || "KeyQ"):
                this.qPressed = false;
                this.gameplay.removePressedKey();
                break;
            case ("w" || "W" || "KeyW"):
                this.wPressed = false;
                this.gameplay.removePressedKey();
                break;
            case ("e" || "E" || "KeyE"):
                this.ePressed = false;
                this.gameplay.removePressedKey();
                break;
            case ("r" || "R" || "KeyR"):
                this.rPressed = false;
                this.gameplay.removePressedKey();
                break;
            case ("t" || "T" || "KeyT"):
                this.tPressed = false;
                this.gameplay.removePressedKey();
                // this.gameplay.addNote1();
                // this.gameplay.addNote2();
                break;
        }
    }

    addBeatmap(beatmap){
        // beatmap.forEach((beat) => {
        beatmap.shift().split("").forEach((beat) => {
            this.gameplay.addNote(beat);
        });
    }

    draw() {
        if (!this.paused) {
            this.gameplay.drawPressedKeys(this.ctx);
            this.gameplay.drawNotes(this.ctx);
            this.gameplay.runMap();
        }
    }
    
    animate() {
        this.draw();
        requestAnimationFrame(this.animate.bind(this));
    }
}

export default Game;