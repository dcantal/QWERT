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
        this.allPressed = false;
        this.paused = false;
        this.started = false;
        this.keyDownHandler = this.keyDownHandler.bind(this);
        this.keyUpHandler = this.keyUpHandler.bind(this);
        this.addBeatmap = this.addBeatmap.bind(this);
        this.pauseMenu = document.getElementById("pause-menu");
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
            case ("z" || "Z" || "KeyZ"):
                if (this.paused || this.gameplay.gameOver) {
                    document.location.reload();
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
        if (!this.paused && !this.gameplay.gameOver) {
            this.pauseMenu.className = "hidden";
            this.gameplay.drawPressedKeys(this.ctx);
            this.gameplay.drawNotes(this.ctx);
            this.gameplay.runMap();
        }
        else if (this.paused) {
            this.pauseMenu.className = "";
        }
        else if (this.gameplay.gameOver) {
            this.gameplay.gameOverScreen.className = "";
        }
        else if (this.gameplay.levelPassed) {
            this.gameplay.levelPassedScreen.className = "";
        }

    }

    drawStart() {
        if (!this.started) {
            this.gameplay.drawStartNotes(this.ctx);
            this.gameplay.runStart();
        }
        requestAnimationFrame(this.drawStart.bind(this));
    }
    
    animate() {
        this.draw();
        requestAnimationFrame(this.animate.bind(this));
    }
}

export default Game;