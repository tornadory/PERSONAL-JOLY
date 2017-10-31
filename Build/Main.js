"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const $ = require("jquery");
$(document).ready(function () {
    console.log("hejo");
});
var GUI;
(function (GUI) {
    class Enviroment {
        hello() {
            console.log("hello");
        }
    }
    function hello() {
        console.log("hello");
    }
})(GUI || (GUI = {}));
