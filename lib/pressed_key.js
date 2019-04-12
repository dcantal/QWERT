class PressedKey {
    constructor(props) {
        this.val = props.val;
        if (this.val == "q") {
            this.pos = [50,10];
        } else if (this.val == "w") {
            this.pos = [160,10];
        } else if (this.val == "e") {
            this.pos = [270,10];
        } else if (this.val == "r") {
            this.pos = [380,10];
        } else if (this.val == "t") {
            this.pos = [490,10];
        }
        this.squareWidth = 60;
        this.squareHeight = 60;
    }

    draw(ctx) {
        ctx.fillStyle ="#67FCF1";
        ctx.beginPath();
        ctx.moveTo(this.pos[0], this.pos[1]);
        ctx.lineTo(this.pos[0] + this.squareWidth, this.pos[1]);
        ctx.quadraticCurveTo(this.pos[0] + this.squareWidth + 10, this.pos[1], this.pos[0] + this.squareWidth + 10, this.pos[1] + 10);
        ctx.lineTo(this.pos[0] + this.squareWidth + 10, this.pos[1] + this.squareHeight);
        ctx.quadraticCurveTo(this.pos[0] + this.squareWidth + 10, this.pos[1] + this.squareHeight + 10, this.pos[0] + this.squareWidth, this.pos[1] + this.squareHeight + 10);
        ctx.lineTo(this.pos[0], this.pos[1] + this.squareHeight + 10);
        ctx.quadraticCurveTo(this.pos[0] - 10, this.pos[1] + this.squareHeight + 10, this.pos[0] - 10, this.pos[1] + this.squareHeight);
        ctx.lineTo(this.pos[0] - 10, this.pos[1] + 10);
        ctx.quadraticCurveTo(this.pos[0] - 10, this.pos[1], this.pos[0], this.pos[1]);
        ctx.fill();
    }

    successHit(note) {
        if (((note.pos[1] < (this.pos[1] + this.squareHeight/2)) && (note.pos[1] > (this.pos[1] - this.squareHeight/2))) && this.val == note.val){
            return true;
        } else {
            return false;
        }
    }

}

export default PressedKey;