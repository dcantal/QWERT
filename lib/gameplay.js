import Note from './note.js';
import PressedKey from './pressed_key';

class Gameplay {
    constructor(topKeys) {
        this.notes = [];
        this.pressedKeys = [];
        this.topKeys = topKeys;
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
                this.notes.push(new Note({pos: [50,800], val: "q"}));
                break;
            case "e":
                this.notes.push(new Note({pos: [50,800], val: "q"}));
                break;
            case "r":
                this.notes.push(new Note({pos: [50,800], val: "q"}));
                break;
            case "t":
                this.notes.push(new Note({pos: [50,800], val: "q"}));
                break;
        }
    }

    // addNote(key) {
    addNote1() {
        debugger
        let note = new Note({pos: [50,400], val: "q"});
        this.notes.push(note);
    }
    addNote2() {
        let note = new Note({pos: [160,500], val: "w"});
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
        debugger
        this.pressedKeys.splice(0,1);
    }

    removeNote(note) {
        this.notes.splice(this.notes.indexOf(note),1);
    }

    checkSuccess() {
        this.pressedKeys.forEach((pressedKey) => {
            this.notes.forEach((note) => {
                debugger
                if (pressedKey.successHit(note)) {
                    debugger
                    this.removeNote(note);
                    console.log("Score + 10!");
                }
                debugger
            });
        });
    }

    missed(note) {
        return (note.pos[1] < -20) ? true : false;
    }

    runMap() {
        this.notes.forEach((note) => {
            return (this.missed(note)) ? this.removeNote(note) : note.move();
        });
    }

}

export default Gameplay;