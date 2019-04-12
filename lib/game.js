class Game {
    constructor(gameplay, ctx) {
        this.gameplay = gameplay;
        this.ctx = ctx;
        this.qPressed = false;
        this.wPressed = false;
        this.ePressed = false;
        this.rPressed = false;
        this.tPressed = false;
        this.keyDownHandler = this.keyDownHandler.bind(this);
        this.keyUpHandler = this.keyUpHandler.bind(this);
    }

    addListeners() {
        debugger
        document.addEventListener("keydown", this.keyDownHandler, false);
        document.addEventListener("keyup", this.keyUpHandler, false);
    }

    

    keyDownHandler(e) {
        switch (e.key) {
            case ("q" || "Q" || "KeyQ"):
                if (this.qPressed == false) {
                    this.qPressed = true;
                    console.log("Q is being pressed");
                    this.gameplay.addPressedKey(this.ctx, "q");
                }
                break;
            case ("w" || "W" || "KeyW"):
                if (this.wPressed == false) {
                    this.wPressed = true;
                    console.log("W is being pressed");
                    this.gameplay.addPressedKey(this.ctx,"w");
                }
                break;
            case ("e" || "E" || "KeyE"):
                if (this.ePressed == false) {
                    this.ePressed = true;
                    console.log("E is being pressed");
                    this.gameplay.addPressedKey(this.ctx,"e");
                }
                break;
            case ("r" || "R" || "KeyR"):
                if (this.rPressed == false) {
                    this.rPressed = true;
                    console.log("R is being pressed");
                    this.gameplay.addPressedKey(this.ctx,"r");
                }
                break;
            case ("t" || "T" || "KeyT"):
                if (this.tPressed == false) {
                    this.tPressed = true;
                    console.log("T is being pressed");
                    this.gameplay.addPressedKey(this.ctx,"t");
                }
                break;
        }
    }

    keyUpHandler(e) {
        switch (e.key) {
            case ("q" || "Q" || "KeyQ"):
                this.qPressed = false;
                console.log("Q is no longer being pressed");
                this.gameplay.removePressedKey();
                break;
            case ("w" || "W" || "KeyW"):
                this.wPressed = false;
                console.log("W is no longer being pressed");
                this.gameplay.removePressedKey();
                break;
            case ("e" || "E" || "KeyE"):
                this.ePressed = false;
                console.log("E is no longer being pressed");
                this.gameplay.removePressedKey();
                break;
            case ("r" || "R" || "KeyR"):
                this.rPressed = false;
                console.log("R is no longer being pressed");
                this.gameplay.removePressedKey();
                break;
            case ("t" || "T" || "KeyT"):
                this.tPressed = false;
                console.log("T is no longer being pressed");
                this.gameplay.removePressedKey();
                break;
        }
    }

    draw() {
        this.gameplay.draw(this.ctx);
        requestAnimationFrame(this.draw.bind(this));
    }

}

export default Game;