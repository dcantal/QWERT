/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/qwert.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./beatmaps/test_beatmap.js":
/*!**********************************!*\
  !*** ./beatmaps/test_beatmap.js ***!
  \**********************************/
/*! exports provided: BEATMAP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BEATMAP", function() { return BEATMAP; });
const BEATMAP = [
    "w","","","t",
    "","","","",
    "","","","",
    "","r","","",
    "","","","",
    "","","","",
    "","","","",
    "","","","",
    "","","","e",
    "","","","",
    "","","r","",
    "","","","",
    "","","","",
    "","","","",
    "","","","",
    "","","","",
    "","","","",
    "r","","","",
    "","","","",
    "","","","",
    "","","","",
    "","","","",
    "","","","",
    "","","","",
    "","","","",
    "","r","","",
    "","","","",
    "","","","",
    "","","","",
    "","","","",
    "","","","",
    "","","","",
    "","","","",
    "","","","",
    "","","","",
    "","","","",
    "","t","","",
    "","","","",
    "","","","",
    "","","","",
    "","","","",
    "","","","",
    "","","","",
    "","","","",
    "","","","",
    "","","","",
    "","","","",
    "","","","",
    "","","","",
    "","","","y",
    "","","","",
    "","","","",
    "","","","",
    "","","","",
    "","","","",
    "","","","",
    "","","","",
    "","","","",
    "","","","",
    "","","","",
    "","","","",
    "r","","","",
    "","","","",
    "","","","",
    "","","","",
    "","","","",
    "","","","y",
    "","","","",
    "","","","",
    "","","","",
    "","","","",
    "","","","",
    "","","","",
    "","","","",
    "","","","",
    "","","","",
    "","e","","",
    "","","","",
    "","","","",
    "","","","",
    "","y","","",
    "","","","",
    "","","","",
    "","","","y",
    "","","","",
    "","","","",
    "","","","",
    "","","","",
    "","","","",
    "","","","",
    "","","t","",
    "","","","",
    "","","","",
    "","","","",
    "","","","",
    "","w","","",
    "","","","",
    "","","","",
    "","","","",
    "","","","",
    "","","","y",
    "","","","",
    "","","","",
    "","","t","",
    "","","","",
    "","","","",
    "","","","",
    "","","","",
    "","","","",
    "","","","",
    "","","","",
    "","","","",
    "","","","",
    "","","","",
    "","r","","",
    "","","","",
    "","","","",
    "","","","y",
    "","","","",
    "","","","",
    "","","","",
    "","","","",
    "","","","",
    "","","","",
    "","","","",
    "e","","","",
    "","","","",
];

/***/ }),

/***/ "./lib/game.js":
/*!*********************!*\
  !*** ./lib/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Game {
    constructor(gameplay, ctx, beatMap) {
        this.gameplay = gameplay;
        this.ctx = ctx;
        this.beatMap = beatMap;
        this.qPressed = false;
        this.wPressed = false;
        this.ePressed = false;
        this.rPressed = false;
        this.tPressed = false;
        this.allPressed = false;
        this.paused = false;
        this.keyDownHandler = this.keyDownHandler.bind(this);
        this.keyUpHandler = this.keyUpHandler.bind(this);
        this.addBeatmap = this.addBeatmap.bind(this);
        this.pauseMenu = document.getElementById("pause-menu");
    }

    addListeners() {
        document.addEventListener("keydown", this.keyDownHandler, false);
        document.addEventListener("keyup", this.keyUpHandler, false);
    }

    

    keyDownHandler(e) {
        switch (e.key) {
            case ("q" || false || false):
                if (this.qPressed == false) {
                    this.qPressed = true;
                    this.gameplay.addPressedKey(this.ctx, "q");
                }
                break;
            case ("w" || false || false):
                if (this.wPressed == false) {
                    this.wPressed = true;
                    this.gameplay.addPressedKey(this.ctx,"w");
                }
                break;
            case ("e" || false || false):
                if (this.ePressed == false) {
                    this.ePressed = true;
                    this.gameplay.addPressedKey(this.ctx,"e");
                }
                break;
            case ("r" || false || false):
                if (this.rPressed == false) {
                    this.rPressed = true;
                    this.gameplay.addPressedKey(this.ctx,"r");
                }
                break;
            case ("t" || false || false):
                if (this.tPressed == false) {
                    this.tPressed = true;
                    this.gameplay.addPressedKey(this.ctx,"t");
                }
                break;
            case ("p" || false || false):
                if (this.paused == false) {
                    this.paused = true;
                }
                else if (this.paused){
                    this.paused = false;
                }
                break;
        }
    }

    keyUpHandler(e) {
        switch (e.key) {
            case ("q" || false || false):
                this.qPressed = false;
                this.gameplay.removePressedKey();
                break;
            case ("w" || false || false):
                this.wPressed = false;
                this.gameplay.removePressedKey();
                break;
            case ("e" || false || false):
                this.ePressed = false;
                this.gameplay.removePressedKey();
                break;
            case ("r" || false || false):
                this.rPressed = false;
                this.gameplay.removePressedKey();
                break;
            case ("t" || false || false):
                this.tPressed = false;
                this.gameplay.removePressedKey();
                // this.gameplay.addNote1();
                // this.gameplay.addNote2();
                break;
        }
    }

    addBeatmap(beatmap){
        // beatmap.forEach((beat) => {
        beatmap.shift().split("").forEach((beat) => {
            this.gameplay.addNote(beat);
        });
    }

    draw() {
        if (!this.paused && !this.gameplay.gameOver) {
            this.pauseMenu.className = "hidden";
            this.gameplay.drawPressedKeys(this.ctx);
            this.gameplay.drawNotes(this.ctx);
            this.gameplay.runMap();
        }
        else if (this.paused) {
            this.pauseMenu.className = "";
        }
        else if (this.gameplay.gameOver) {
            this.gameplay.gameOverScreen.className = "";
        }

    }
    
    animate() {
        this.draw();
        requestAnimationFrame(this.animate.bind(this));
    }
}

/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ }),

/***/ "./lib/gameplay.js":
/*!*************************!*\
  !*** ./lib/gameplay.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _note_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./note.js */ "./lib/note.js");
/* harmony import */ var _pressed_key__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pressed_key */ "./lib/pressed_key.js");



class Gameplay {
    constructor(topKeys) {
        this.notes = [];
        this.pressedKeys = [];
        this.topKeys = topKeys;
        this.values = ["q", "w", "e", "r", "t"];
        this.addRandomNote = this.addRandomNote.bind(this);
        this.score = 0;
        this.scoreDiv = document.getElementById("score-text");
        this.gameOver = false;
        this.gameOverScreen = document.getElementById("game-over");
    }

    addPressedKey(ctx, val) {
        let key = new _pressed_key__WEBPACK_IMPORTED_MODULE_1__["default"]({ val: val});
        this.pressedKeys.push(key);
        setTimeout(() => {
            this.removePressedKey(key);
        }, 1000);
    }

    addNote(key) {
        switch(key) {
            case "q":
                this.notes.push(new _note_js__WEBPACK_IMPORTED_MODULE_0__["default"]({pos: [50,800], val: "q"}));
                break;
            case "w":
                this.notes.push(new _note_js__WEBPACK_IMPORTED_MODULE_0__["default"]({pos: [160,800], val: "w"}));
                break;
            case "e":
                this.notes.push(new _note_js__WEBPACK_IMPORTED_MODULE_0__["default"]({pos: [270,800], val: "e"}));
                break;
            case "r":
                this.notes.push(new _note_js__WEBPACK_IMPORTED_MODULE_0__["default"]({pos: [380,800], val: "r"}));
                break;
            case "t":
                this.notes.push(new _note_js__WEBPACK_IMPORTED_MODULE_0__["default"]({pos: [490,800], val: "t"}));
                break;
        }
    }

    // addNote(key) {
    addNote1() {
        let note = new _note_js__WEBPACK_IMPORTED_MODULE_0__["default"]({pos: [50,2000], val: "q"});
        this.notes.push(note);
    }
    addNote2() {
        let note = new _note_js__WEBPACK_IMPORTED_MODULE_0__["default"]({pos: [160,900], val: "w"});
        this.notes.push(note);
    }

    drawPressedKeys(ctx){
        ctx.clearRect(0, 0, 600, 1000);
        this.topKeys.draw(ctx);
        this.pressedKeys.forEach((key) => {
            key.draw(ctx);
        });
        this.checkSuccess();
        this.checkOver();
    }

    drawNotes(ctx){
        // ctx.clearRect(0, 0, 600, 717);
        this.notes.forEach((note) => {
            note.draw(ctx);
        });
    }

    removePressedKey() {
        this.pressedKeys.splice(0,1);
    }

    removeNote(note) {
        this.notes.splice(this.notes.indexOf(note),1);
    }

    checkSuccess() {
        this.pressedKeys.forEach((pressedKey) => {
            this.notes.forEach((note) => {
                if (pressedKey.successHit(note)) {
                    this.removeNote(note);
                    this.score += 10;
                    this.scoreDiv.innerText = "SCORE: " + this.score.toString();
                    console.log(this.score);
                }
            });
        });
    }

    checkOver() {
        if (this.score < -200) {
            this.scoreDiv.innerText = "SCORE: " + this.score.toString();
            console.log(this.score);
            this.gameOver = true;
        }
    }

    missed(note) {
        if (note.pos[1] < -20) {
            console.log("missed");
            this.score -= 10;
            this.scoreDiv.innerText = "SCORE: " + this.score.toString();
            console.log(this.score);
            return true;
        } else {
            return false;
        }
    }

    runMap() {
        this.notes.forEach((note) => {
            return (this.missed(note)) ? this.removeNote(note) : note.move();
        });
    }

    addRandomNote() {
        let key = this.values[Math.floor(Math.random() * 5)];
        this.addNote(key);
    }



}

/* harmony default export */ __webpack_exports__["default"] = (Gameplay);

/***/ }),

/***/ "./lib/note.js":
/*!*********************!*\
  !*** ./lib/note.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (Note);

/***/ }),

/***/ "./lib/pressed_key.js":
/*!****************************!*\
  !*** ./lib/pressed_key.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class PressedKey {
    constructor(props) {
        this.val = props.val;
        if (this.val == "q") {
            this.pos = [50,10];
        } else if (this.val == "w") {
            this.pos = [160,10];
        } else if (this.val == "e") {
            this.pos = [270,10];
        } else if (this.val == "r") {
            this.pos = [380,10];
        } else if (this.val == "t") {
            this.pos = [490,10];
        }
        this.squareWidth = 60;
        this.squareHeight = 60;
    }

    draw(ctx) {
        ctx.fillStyle ="#67FCF1";
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
        ctx.fill();
    }

    successHit(note) {
        if (((note.pos[1] < (this.pos[1] + this.squareHeight/2)) && (note.pos[1] > (this.pos[1] - this.squareHeight/2))) && this.val == note.val){
            return true;
        } else {
            return false;
        }
    }

}

/* harmony default export */ __webpack_exports__["default"] = (PressedKey);

/***/ }),

/***/ "./lib/qwert.js":
/*!**********************!*\
  !*** ./lib/qwert.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./lib/game.js");
/* harmony import */ var _gameplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameplay */ "./lib/gameplay.js");
/* harmony import */ var _top_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./top_keys */ "./lib/top_keys.js");
/* harmony import */ var _beatmaps_test_beatmap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../beatmaps/test_beatmap */ "./beatmaps/test_beatmap.js");







document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    const beatMap = _beatmaps_test_beatmap__WEBPACK_IMPORTED_MODULE_3__["BEATMAP"];
    ctx.canvas.height = window.innerHeight-20;
    const score = document.getElementById("score-text");
    // const ctxScore = score.getContext("2d");
    // ctxScore.canvas.height = window.innerHeight-20;
    const topKeys = new _top_keys__WEBPACK_IMPORTED_MODULE_2__["default"](ctx);
    const gameplay = new _gameplay__WEBPACK_IMPORTED_MODULE_1__["default"](topKeys);
    const game = new _game__WEBPACK_IMPORTED_MODULE_0__["default"](gameplay, ctx, beatMap);
    const menu = document.getElementById("menu");
    const play = document.getElementById("play");

    // game.addBeatmap(beatMap);
    game.addListeners();
    gameplay.drawPressedKeys(ctx);
    play.addEventListener("click", () => {
        // menu.className="hidden";
        console.log(gameplay.gameOver);
        menu.className="fade-out";
        setTimeout(()=> {menu.className="hidden";}, 2000);
        setTimeout(()=> {
            canvas.className = "game fade-in-fast";
            score.className = "fade-in-fast";
            game.animate();
        }, 2100);
        console.log(gameplay.gameOver);

        // setTimeout(() => { game.animate(); }, 3000);
        setTimeout(() => {setInterval(gameplay.addRandomNote, 500); }, 7000);
    });
    
});

/***/ }),

/***/ "./lib/top_keys.js":
/*!*************************!*\
  !*** ./lib/top_keys.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (TopKeys);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map