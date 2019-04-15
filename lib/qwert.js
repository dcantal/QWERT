import Game from './game';
import Gameplay from './gameplay';
import TopKeys from './top_keys';
import { BEATMAP } from '../beatmaps/test_beatmap';



document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    const beatMap = BEATMAP;
    ctx.canvas.height = window.innerHeight-20;
    const topKeys = new TopKeys(ctx);
    const gameplay = new Gameplay(topKeys);
    const game = new Game(gameplay, ctx, beatMap);
    const play = document.getElementById("play");

    // game.addBeatmap(beatMap);
    game.addListeners();
    gameplay.drawPressedKeys(ctx);
    play.addEventListener("click", () => {
        game.animate();
        // setTimeout(() => { game.animate(); }, 5000);
    });

    setTimeout(() => {setInterval(gameplay.addRandomNote, 500); }, 5000);
    
});