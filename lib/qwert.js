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
    let time = 0;
    // const ctxScore = score.getContext("2d");
    // ctxScore.canvas.height = window.innerHeight-20;
    const topKeys = new TopKeys(ctx);
    const gameplay = new Gameplay(topKeys);
    const game = new Game(gameplay, ctx, beatMap);
    const menu = document.getElementById("menu");
    const play = document.getElementById("play");

    function speed1() {
        let s1 = setInterval(gameplay.addRandomNote, 600);
    }

    function speed2() {
        setInterval(gameplay.addRandomNote, 413);
    }

    function speed3() {
        setInterval(gameplay.addRandomNote, 300);
    }


    let currentSong3 = new Howl({
        src: ['songs/medasin-home-cut.mp3'],
        autoplay: false,
        loop: false,
        volume: 0.6,
        rate: 1.3,
        onplay: () => {
            let s3 = speed3();
            setTimeout(() => {clearInterval(s3);}, 50000);
        }
    });
    let currentSong2 = new Howl({
        src: ['songs/medasin-home-cut.mp3'],
        autoplay: false,
        loop: false,
        volume: 0.6,
        rate: 1,
        onplay: () => {
            let s2 = speed2();
            setTimeout(() => {clearInterval(s2);}, 68000);
        },
        onend: () => {
            currentSong3.play();
        }
    });
    let currentSong1 = new Howl({
        src: ['songs/medasin-home-cut.mp3'],
        autoplay: false,
        loop: false,
        volume: 0.6,
        rate: 1,
        onplay: () => {
            // console.log("testing");
            // setTimeout(console.log("testing later"), 7000);
            // setTimeout(() => {console.log("testing later");}, 7000);
            // let s1 = setTimeout(speed1, 7000);
            // setTimeout(() => {clearInterval(s1);}, 72000);
            // let s1 = speed1();
            setTimeout(() => {speed2();}, 7000 );
            // setTimeout(() => {clearInterval(s1);}, 72000);
            
        },
        // onend: () => {
        //     clearInterval(s1);
        //     currentSong2.play();
        // }
    });
    // let currentSong3 = new Howl({
    //     src: ['songs/medasin-home-cut.mp3'],
    //     autoplay: false,
    //     loop: true,
    //     volume: 0.6,
    // });


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
        let id1 = currentSong1.play();
        setTimeout(() => {currentSong1.fade(1,0,3000,id1);}, 59000);
        // let id2 = currentSong2.play();
        // let id3 = currentSong3.play();
        // setTimeout(currentSong.fade(1,0,1000, id1), 67000);
        // setTimeout(currentSong2.play(), 68172);
        // setTimeout(currentSong2.rate(1.5, id2), 60000);
        // setTimeout(currentSong3.rate(1.5, id2), 60000);

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
        // setTimeout(() => { setInterval(gameplay.addRandomNote, 413); }, 7000);
        // setTimeout(speed1, 7000);
        // setTimeout(clearInterval(s1), 72000);
        // setTimeout(speed2, 72000);
        // setTimeout(clearInterval(s2), 117333);
        // setTimeout(() => { setInterval(gameplay.addSecond, 1000); }, 7000);
        setInterval(() => {time += 1;}, 1000);
        setInterval(() => {gameplay.time = time;}, 1000);
        // if (time === 7 ) {
        //     currentSong1.play();
        //     let id1 = setInterval(gameplay.addRandomNote, 600);
        // }
        // if (time === 70) {
        //     clearInterval(id1);
        // }
        
        // setInterval(gameplay.addSecond, 1000);
    });

    
});