import Note from './note.js';
import PressedKey from './pressed_key';

class Gameplay {
    constructor(topKeys) {
        this.q_notes = [];
        this.w_notes = [];
        this.e_notes = [];
        this.r_notes = [];
        this.t_notes = [];
        this.pressedKeys = [];
        this.topKeys = topKeys;
    }

    addPressedKey(ctx, val) {
        debugger
        let key = new PressedKey({ val: val});
        this.pressedKeys.push(key);
    }

    draw(ctx){
        ctx.clearRect(0, 0, 600, 717);
        this.topKeys.draw(ctx);
        this.pressedKeys.forEach((key) => {
            key.draw(ctx);
        });
    }

    // removePressedKey(key) {
    removePressedKey() {
        // this.pressedKeys.splice(this.pressedKeys.indexOf(key),1);
        this.pressedKeys.splice(0,1);
    }

}

export default Gameplay;