import Note from './note.js';
import PressedKey from './pressed_key';

class Gameplay {
    constructor() {
        this.q_notes = [];
        this.w_notes = [];
        this.e_notes = [];
        this.r_notes = [];
        this.t_notes = [];
        this.pressedKeys = [];
    }

    addPressedKey(val) {
        let key = new PressedKey({ val: val});
        this.pressedKeys.push(key);
    }

}

export default Gameplay;