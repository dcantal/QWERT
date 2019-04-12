import Game from './game';
import Gameplay from './gameplay';
import TopKeys from './top_keys';
import beatmap from '../beatmaps/test_beatmap';

if (document.readyState !== 'loading') {
    console.log ('already loaded');
}


document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    ctx.canvas.height = window.innerHeight;
    const topKeys = new TopKeys(ctx);
    const gameplay = new Gameplay(topKeys);
    const game = new Game(gameplay, ctx);
    game.addListeners();
    game.draw();

    
});