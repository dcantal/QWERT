class Note {
    constructor(props) {
        this.pos = props.pos;
        this.val = props.val;
        this.squareWidth = 60;
        this.squareHeight = 60;
    }
    
    move () {
        this.pos = [this.pos[0], this.pos[1] - 10];
    }
    
    draw(ctx) {
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
        if (this.val == "q") {
            ctx.fillStyle = "#E27C5F";
        } else if (this.val == "w") {
            ctx.fillStyle = "#8265A7";
        } else if (this.val == "e") {
            ctx.fillStyle = "#E7A87C";
        } else if (this.val == "r") {
            ctx.fillStyle = "#C38C9D";
        } else {
            ctx.fillStyle = "#41B3A2";
        }
        ctx.fill();
        ctx.closePath();
    }



}

export default Note;