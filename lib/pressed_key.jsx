class PressedKey {
    constructor(props) {
        this.val = props.val;
        if (this.val == "q") {
            this.pos = [];
        } else if (this.val == "w") {
            this.pos = [];
        } else if (this.val == "e") {
            this.pos = [];
        } else if (this.val == "r") {
            this.pos = [];
        } else if (this.val == "t") {
            this.pos = [];
        }
        this.squareWidth = 60;
        this.squareHeight = 60;
    }

    draw(ctx) {
        ctx.strokeStyle = ""
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

    }
}