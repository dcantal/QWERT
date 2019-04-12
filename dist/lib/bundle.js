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

/***/ "./lib/game.js":
/*!*********************!*\
  !*** ./lib/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Game {
    constructor(gameplay, ctx) {
        this.gameplay = gameplay;
        this.ctx = ctx;
        this.qPressed = false;
        this.wPressed = false;
        this.ePressed = false;
        this.rPressed = false;
        this.tPressed = false;
        this.keyDownHandler = this.keyDownHandler.bind(this);
        this.keyUpHandler = this.keyUpHandler.bind(this);
    }

    addListeners() {
        debugger
        document.addEventListener("keydown", this.keyDownHandler, false);
        document.addEventListener("keyup", this.keyUpHandler, false);
    }

    

    keyDownHandler(e) {
        switch (e.key) {
            case ("q" || false || false):
                if (this.qPressed == false) {
                    this.qPressed = true;
                    console.log("Q is being pressed");
                    this.gameplay.addPressedKey(this.ctx, "q");
                }
                break;
            case ("w" || false || false):
                if (this.wPressed == false) {
                    this.wPressed = true;
                    console.log("W is being pressed");
                    this.gameplay.addPressedKey(this.ctx,"w");
                }
                break;
            case ("e" || false || false):
                if (this.ePressed == false) {
                    this.ePressed = true;
                    console.log("E is being pressed");
                    this.gameplay.addPressedKey(this.ctx,"e");
                }
                break;
            case ("r" || false || false):
                if (this.rPressed == false) {
                    this.rPressed = true;
                    console.log("R is being pressed");
                    this.gameplay.addPressedKey(this.ctx,"r");
                }
                break;
            case ("t" || false || false):
                if (this.tPressed == false) {
                    this.tPressed = true;
                    console.log("T is being pressed");
                    this.gameplay.addPressedKey(this.ctx,"t");
                }
                break;
        }
    }

    keyUpHandler(e) {
        switch (e.key) {
            case ("q" || false || false):
                this.qPressed = false;
                console.log("Q is no longer being pressed");
                this.gameplay.removePressedKey();
                break;
            case ("w" || false || false):
                this.wPressed = false;
                console.log("W is no longer being pressed");
                this.gameplay.removePressedKey();
                break;
            case ("e" || false || false):
                this.ePressed = false;
                console.log("E is no longer being pressed");
                this.gameplay.removePressedKey();
                break;
            case ("r" || false || false):
                this.rPressed = false;
                console.log("R is no longer being pressed");
                this.gameplay.removePressedKey();
                break;
            case ("t" || false || false):
                this.tPressed = false;
                console.log("T is no longer being pressed");
                this.gameplay.removePressedKey();
                break;
        }
    }

    draw() {
        this.gameplay.draw(this.ctx);
        requestAnimationFrame(this.draw.bind(this));
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
        this.q_notes = [];
        this.w_notes = [];
        this.e_notes = [];
        this.r_notes = [];
        this.t_notes = [];
        this.pressedKeys = [];
        this.topKeys = topKeys;
    }

    addPressedKey(ctx, val) {
        debugger
        let key = new _pressed_key__WEBPACK_IMPORTED_MODULE_1__["default"]({ val: val});
        this.pressedKeys.push(key);
    }

    draw(ctx){
        ctx.clearRect(0, 0, 600, 717);
        this.topKeys.draw(ctx);
        this.pressedKeys.forEach((key) => {
            key.draw(ctx);
        });
    }

    // removePressedKey(key) {
    removePressedKey() {
        // this.pressedKeys.splice(this.pressedKeys.indexOf(key),1);
        this.pressedKeys.splice(0,1);
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
        ctx.strokeStyle = "#D2E9E3";
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
        if ((note.pos[1] > (this.pos[1] + this.squareHeight / 3)) && (note.pos[1] > (this.pos[1] - this.squareHeight / 3))){
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




if (document.readyState !== 'loading') {
    console.log ('already loaded');
}


document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    ctx.canvas.height = window.innerHeight;
    const topKeys = new _top_keys__WEBPACK_IMPORTED_MODULE_2__["default"](ctx);
    const gameplay = new _gameplay__WEBPACK_IMPORTED_MODULE_1__["default"](topKeys);
    const game = new _game__WEBPACK_IMPORTED_MODULE_0__["default"](gameplay, ctx);
    game.addListeners();
    game.draw();

    
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
            ctx.stroke();
            ctx.fillStyle = "#747474";
            ctx.fillText("Q", 600 / 5 - 60, 60);
            ctx.fillText("W", 600 * 2 / 5 - 70, 60);
            ctx.fillText("E", 600 * 3 / 5 - 80, 60);
            ctx.fillText("R", 600 * 4 / 5 - 90, 60);
            ctx.fillText("T", 600 - 95, 60);
            ctx.closePath();
        }
    }
}

/* harmony default export */ __webpack_exports__["default"] = (TopKeys);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map