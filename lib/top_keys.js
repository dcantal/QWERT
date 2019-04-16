class TopKeys {
    constructor(ctx) {
        this.qPos = [50,10];
        this.wPos = [160,10];
        this.ePos = [270,10];
        this.rPos = [380,10];
        this.tPos = [490,10];
        this.squareX = 50;
        this.squareY = 10;
        this.squareWidth = 60;
        this.squareHeight = 60;
        this.ctx = ctx;
    }

    draw(ctx) {

        ctx.clearRect(0, 0, 600, 717);
        for (let i = 0; i < 5; i++) {
            // ctx.font = "500 px Arial";
            switch(i) {
                case 0:
                    this.squareX = 50;
                    break;
                case 1:
                    this.squareX = 160;
                    break;
                case 2:
                    this.squareX = 270;
                    break;
                case 3:
                    this.squareX = 380;
                    break;
                case 4:
                    this.squareX = 490;
                    break;
            }
            ctx.beginPath();
            ctx.moveTo(this.squareX, this.squareY);
            ctx.lineTo(this.squareX + this.squareWidth, this.squareY);
            ctx.quadraticCurveTo(this.squareX + this.squareWidth + 10, this.squareY, this.squareX + this.squareWidth + 10, this.squareY + 10);
            ctx.lineTo(this.squareX + this.squareWidth + 10, this.squareY + this.squareHeight);
            ctx.quadraticCurveTo(this.squareX + this.squareWidth + 10, this.squareY + this.squareHeight + 10, this.squareX + this.squareWidth, this.squareY + this.squareHeight + 10);
            ctx.lineTo(this.squareX, this.squareY + this.squareHeight + 10);
            ctx.quadraticCurveTo(this.squareX - 10, this.squareY + this.squareHeight + 10, this.squareX - 10, this.squareY + this.squareHeight);
            ctx.lineTo(this.squareX - 10, this.squareY + 10);
            ctx.quadraticCurveTo(this.squareX - 10, this.squareY, this.squareX, this.squareY);
            ctx.strokeStyle = "#67FCF1";
            ctx.stroke();
            // ctx.fillStyle = "#67FCF1";
            ctx.fillStyle = "white";
            ctx.font = '60px sans-serif';
            ctx.fillText("Q", 600 / 5 - 65, 65);
            ctx.fillText("W", 600 * 2 / 5 - 77, 65);
            ctx.fillText("E", 600 * 3 / 5 - 80, 65);
            ctx.fillText("R", 600 * 4 / 5 - 90, 65);
            ctx.fillText("T", 600 - 95, 65);
            ctx.closePath();
        }
    }
}

export default TopKeys;