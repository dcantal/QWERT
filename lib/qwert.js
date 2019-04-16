import Game from './game';
import Gameplay from './gameplay';
import TopKeys from './top_keys';
import { BEATMAP } from '../beatmaps/test_beatmap';



document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    const beatMap = BEATMAP;
    ctx.canvas.height = window.innerHeight-20;
    const score = document.getElementById("score-text");
    // const ctxScore = score.getContext("2d");
    // ctxScore.canvas.height = window.innerHeight-20;
    const topKeys = new TopKeys(ctx);
    const gameplay = new Gameplay(topKeys);
    const game = new Game(gameplay, ctx, beatMap);
    const menu = document.getElementById("menu");
    const play = document.getElementById("play");

    // game.addBeatmap(beatMap);
    game.addListeners();
    gameplay.drawPressedKeys(ctx);
    
    play.addEventListener("click", () => {
        // menu.className="hidden";
        console.log(gameplay.gameOver);
        menu.className = "fade-out";
        setTimeout(() => { menu.className = "hidden"; }, 2000);
        setTimeout(() => {
            canvas.className = "game fade-in-fast";
            score.className = "fade-in-fast";
            game.animate();
        }, 2100);
        console.log(gameplay.gameOver);

        // setTimeout(() => { game.animate(); }, 3000);
        setTimeout(() => { setInterval(gameplay.addRandomNote, 500); }, 7000);
    });

    
});