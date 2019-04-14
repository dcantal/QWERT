import Note from './note.js';
import PressedKey from './pressed_key';

class Gameplay {
    constructor(topKeys) {
        this.notes = [];
        this.pressedKeys = [];
        this.topKeys = topKeys;
        this.values = ["q", "w", "e", "r", "t"];
        this.addRandomNote = this.addRandomNote.bind(this);
    }

    addPressedKey(ctx, val) {
        let key = new PressedKey({ val: val});
        this.pressedKeys.push(key);
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

    drawPressedKeys(ctx){
        ctx.clearRect(0, 0, 600, 717);
        this.topKeys.draw(ctx);
        this.pressedKeys.forEach((key) => {
            key.draw(ctx);
        });
        this.checkSuccess();
    }

    drawNotes(ctx){
        // ctx.clearRect(0, 0, 600, 717);
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
                    console.log("Score + 10!");
                }
            });
        });
    }

    missed(note) {
        if (note.pos[1] < -20) {
            console.log("missed");
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

    addRandomNote() {
        let key = this.values[Math.floor(Math.random() * 5)];
        this.addNote(key);
    }



}

export default Gameplay;