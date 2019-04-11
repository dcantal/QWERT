class Note {
    constructor(props) {
        this.pos = props.pos;
        this.val = props.val;
        this.squareWidth = 60;
        this.squareHeight = 60;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.moveTo(this.pos[0], this.pos[1]);
        ctx.lineTo(this.pos[0] + squareWidth, this.pos[1]);
        ctx.quadraticCurveTo(this.pos[0] + squareWidth + 10, this.pos[1], this.pos[0] + squareWidth + 10, this.pos[1] + 10);
        ctx.lineTo(this.pos[0] + squareWidth + 10, this.pos[1] + squareHeight);
        ctx.quadraticCurveTo(this.pos[0] + squareWidth + 10, this.pos[1] + squareHeight + 10, this.pos[0] + squareWidth, this.pos[1] + squareHeight + 10);
        ctx.lineTo(this.pos[0], this.pos[1] + squareHeight + 10);
        ctx.quadraticCurveTo(this.pos[0] - 10, this.pos[1] + squareHeight + 10, this.pos[0] - 10, this.pos[1] + squareHeight);
        ctx.lineTo(this.pos[0] - 10, this.pos[1] + 10);
        ctx.quadraticCurveTo(this.pos[0] - 10, this.pos[1], this.pos[0], this.pos[1]);
        if (this.val == "q") {
            ctx.fillStyle = "#24315E";
        } else if (this.val == "w") {
            ctx.fillStyle = "#F8E9A0";
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


    rise () {
        this.pos = [this.pos[0], this.pos[1] - 10];
    }

}

export default Note;