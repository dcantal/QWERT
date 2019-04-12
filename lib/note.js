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
        debugger
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
            ctx.fillStyle = "#202833";
        } else if (this.val == "w") {
            ctx.fillStyle = "#C5C6C8";
        } else if (this.val == "e") {
            ctx.fillStyle = "#F76D6D";
        } else if (this.val == "r") {
            ctx.fillStyle = "white";
        } else {
            ctx.fillStyle = "black";
        }
        ctx.fill();
        ctx.closePath();
    }



}

export default Note;