import Game from './game';
import Gameplay from './gameplay';
import TopKeys from './top_keys';
import { BEATMAP } from '../beatmaps/test_beatmap';
import { Howl } from 'howler';


document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    const beatMap = BEATMAP;
    ctx.canvas.height = window.innerHeight-20;
    const score = document.getElementById("score-text");
    const countdownDiv = document.getElementById("countdown");
    const countdownText = document.getElementById("countdown-text");
    const titleText = document.getElementById("title-text");
    // const ctxScore = score.getContext("2d");
    // ctxScore.canvas.height = window.innerHeight-20;
    const topKeys = new TopKeys(ctx);
    const gameplay = new Gameplay(topKeys);
    const game = new Game(gameplay, ctx, beatMap);
    const menu = document.getElementById("menu");
    const play = document.getElementById("play");
    let currentSong = new Howl({
        src: ['songs/medasin-home-cut.mp3'],
        autoplay: false,
        loop: false,
        volume: 0.6,
    });


    // game.addBeatmap(beatMap);
    game.addListeners();
    gameplay.drawPressedKeys(ctx);
    let count = 5;
    function countdown() {
        if (count > 0){
            countdownText.innerHTML = count;
            count--;
            setTimeout(countdown, 900);
        }
        else {
            console.log("counted down");
        }
    }
    play.addEventListener("click", () => {
        currentSong.play();
        titleText.className = "get-smaller";
        menu.className = "fade-out";
        setTimeout(() => { menu.className = "hidden"; }, 1500);
        setTimeout(() => {
            countdown();
            countdownDiv.className = "fade-in-fast";
            canvas.className = "game fade-in-fast";
            score.className = "fade-in-fast";
            game.animate();
        }, 2100);
        setTimeout(() => {
            countdownDiv.className = "fade-out";
        }, 6000);
        setTimeout(() => {
            countdownDiv.className = "hidden";
        }, 7000);
        // setTimeout(currentSong.play, 7000);
        setTimeout(() => { setInterval(gameplay.addRandomNote, 413); }, 7000);
        setTimeout(() => { setInterval(gameplay.addSecond, 1000); }, 7000);
    });

    
});