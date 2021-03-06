"use strict";
/*
import { Lights, LightsManager } from './LightsManager';
*/
Object.defineProperty(exports, "__esModule", { value: true });
const $ = require("jquery");
const BABYLON = require("babylonjs");
const JOLY = require("./Joly");
$(document).ready(function () {
    // create 3D engine instance
    var engine = new IGNITION.Engine();
    // initialize engine
    engine.Initialize();
    // start running the engine
    engine.Run();
});
var IGNITION;
(function (IGNITION) {
    /*
        Engine structure to ignite.
    */
    class Engine {
        constructor() {
            this._initialized = false;
            this.Window = window;
            this.Canvas = document.getElementById('renderCanvas');
        }
        // event handler that handles window resize
        _setResizeEvent() {
            let engine = this.BabylonEngine;
            let canvas = this.Canvas;
            window.addEventListener('resize', function () {
                // resize canvas on window resize
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                // resize engine on window resize
                engine.resize();
            });
        }
        // intialize object
        Initialize() {
            this._initialized = true;
            this.BabylonEngine = new BABYLON.Engine(this.Canvas, true);
            this.Scene = new BABYLON.Scene(this.BabylonEngine);
            this._setResizeEvent();
            this.LightsManager = new JOLY.LightsManager(this.Scene);
            this.MeshManager = new JOLY.MeshManager(this.Scene, this.BabylonEngine);
            // set camera
            this.Camera = new BABYLON.FreeCamera("FreeCameraObject", new BABYLON.Vector3(0, 5, -10), this.Scene);
            // target the camera to scene origin
            this.Camera.setTarget(BABYLON.Vector3.Zero());
            // attach the camera to the canvas
            this.Camera.attachControl(this.Canvas, false);
            // set lights
            // create a basic light, aiming 0,1,0 - meaning, to the sky
            let light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), this.Scene);
            this.LightsManager.AddLight(light);
            // create a built-in "sphere" shape; 
            let sphere = BABYLON.MeshBuilder.CreateSphere('sphere', { segments: 16, diameter: 2 }, this.Scene);
            this.MeshManager.AddMesh(sphere);
            // move the sphere upward 1/2 of its height
            sphere.position.y = 1;
            // create a built-in "ground" shape; 
            let ground = BABYLON.MeshBuilder.CreateGround('ground1', { height: 6, width: 6, subdivisions: 2 }, this.Scene);
            this.MeshManager.AddMesh(ground);
        }
        // runs babylon render loop
        _runBabylonRenderLoop() {
            let scene = this.Scene;
            this.BabylonEngine.runRenderLoop(function () {
                scene.render();
            });
        }
        // runs the engine
        Run() {
            if (this._initialized === false) {
                throw new Error("Engine not initialized. Call Initialize() function before running engine.");
            }
            // runs the babylon engine render thread
            this._runBabylonRenderLoop();
        }
    }
    IGNITION.Engine = Engine;
})(IGNITION || (IGNITION = {}));
