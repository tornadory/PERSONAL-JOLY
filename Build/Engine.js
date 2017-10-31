"use strict";
/*
/// <reference path="Globals.d.ts" />
*/
Object.defineProperty(exports, "__esModule", { value: true });
const $ = require("jquery");
$(document).ready(function () {
    //INTERFACE.INTERFACE.Environment
    //JOLY.neki.hello();
    Engine.Starter.hello();
});
var Engine;
(function (Engine) {
    // TODO: delete after not needing
    Engine.Interface = require('./Interface');
    /*
        Starter engine structure.
    */
    class Starter {
        constructor() {
            let a = new JOLY.Environment();
        }
        static hello() {
            console.log("hello");
        }
    }
    Engine.Starter = Starter;
    class Runner {
    }
    Engine.Runner = Runner;
})(Engine || (Engine = {}));
