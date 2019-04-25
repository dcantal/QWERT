import Note from './note.js';
import PressedKey from './pressed_key';

class Gameplay {
    constructor(topKeys) {
        this.notes = [];
        this.pressedKeys = [];
        this.topKeys = topKeys;
        this.values = ["q", "w", "e", "r", "t"];
        this.level = 0;
        this.bpms = [50,70,90];
        this.addRandomNote = this.addRandomNote.bind(this);
        this.score = 0;
        this.time = 0;
        this.scoreDiv = document.getElementById("score-text");
        this.overScore = document.getElementById("game-over-score");
        this.gameOver = false;
        this.gameOverScreen = document.getElementById("game-over");
        this.hitMessage  = document.getElementById("hit-message");
    }

    addPressedKey(ctx, val) {
        let key = new PressedKey({ val: val});
        this.pressedKeys.push(key);
        setTimeout(() => {
            this.removePressedKey(key);
        }, 1000);
    }

    addNote(key) {
        switch(key) {
            case "q":
                this.notes.push(new Note({pos: [50,800], val: "q"}));
                break;
            case "w":
                this.notes.push(new Note({pos: [160,800], val: "w"}));
                break;
            case "e":
                this.notes.push(new Note({pos: [270,800], val: "e"}));
                break;
            case "r":
                this.notes.push(new Note({pos: [380,800], val: "r"}));
                break;
            case "t":
                this.notes.push(new Note({pos: [490,800], val: "t"}));
                break;
        }
    }

    // addNote(key) {
    addNote1() {
        let note = new Note({pos: [50,2000], val: "q"});
        this.notes.push(note);
    }
    addNote2() {
        let note = new Note({pos: [160,900], val: "w"});
        this.notes.push(note);
    }

    addSecond() {
        this.time = this.time + 1;
    }

    drawPressedKeys(ctx){
        ctx.clearRect(0, 0, 600, 1000);
        this.topKeys.draw(ctx);
        this.pressedKeys.forEach((key) => {
            key.draw(ctx);
        });
        this.checkSuccess();
        this.checkOver();
        this.checkLevelPassed();
    }

    drawNotes(ctx){
        // ctx.clearRect(0, 0, 600, 717);
        this.notes.forEach((note) => {
            note.draw(ctx);
        });
    }

    drawStartNotes(ctx) {
        ctx.clearRect(0, 0, 600, 800);
        this.notes.forEach((note) => {
            note.draw(ctx);
        });
    }

    removePressedKey() {
        this.pressedKeys.splice(0,1);
    }

    removeNote(note) {
        this.notes.splice(this.notes.indexOf(note),1);
    }

    checkSuccess() {
        this.pressedKeys.forEach((pressedKey) => {
            this.notes.forEach((note) => {
                if (pressedKey.successHit(note)) {
                    this.removeNote(note);
                    this.score += 10;
                    
                    if (this.score > 10) {
                        this.scoreDiv.className = "positive";
                    }
                    this.scoreDiv.innerText = "SCORE: " + this.score.toString();
                    this.hitMessage.className = "great";
                    setTimeout(() => { this.hitMessage.className = ""; }, 500);
                    this.hitMessage.innerText = "GREAT";
                    setTimeout(() => { this.hitMessage.innerText = ""; }, 500);
                }
            });
        });
    }

    checkOver() {
        if (this.score < -200 || this.time == 61) {
            console.log(`gameplay time: ${this.time} `);
            this.overScore.innerText = "Final Score: " + this.score.toString();
            this.scoreDiv.innerText = "SCORE: " + this.score.toString();
            this.gameOver = true;
        }
    }

    checkLevelPassed() {
        // console.log(this.time);
        if (this.time == 20) {
            this.levelPassed = true;
        }
    }

    missed(note) {
        if (note.pos[1] < -30) {
            console.log("missed");
            this.score -= 10;
            if (this.score < -10) {
                this.scoreDiv.className = "negative";
            }
            this.scoreDiv.innerText = "SCORE: " + this.score.toString();
            this.hitMessage.className = "missed";
            setTimeout(() => { this.hitMessage.className = ""; }, 500);
            this.hitMessage.innerText = "MISSED";
            setTimeout(() => {this.hitMessage.innerText = "";}, 500);
            return true;
        } else {
            return false;
        }
    }

    offScreen(note) {
        if (note.pos[1] < -600) {
            return true;
        } else {
            return false;
        }
    }

    runMap() {
        this.notes.forEach((note) => {
            return (this.missed(note)) ? this.removeNote(note) : note.move();
        });
    }

    runStart() {
        this.notes.forEach((note) => {
            return (this.offScreen(note)) ? this.removeNote(note) : note.move();
        });
    }

    addRandomNotes() {
        let s1 = setInterval(addRandomNote, 413);
        return s1;
    }

    addRandomNote() {
        if (this.time < 58) {
            let key = this.values[Math.floor(Math.random() * 5)];
            this.addNote(key);
        }

    }



}

export default Gameplay;