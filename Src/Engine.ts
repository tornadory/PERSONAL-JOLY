/* 
import { Lights } from "./LightsManager";
/// <reference path="Globals.d.ts" /> 
*/

import $ = require("jquery")
import * as BABYLON from 'babylonjs';


$(document).ready(
    function(){
        // create 3D engine instance
        var engine = new IGNITION.Engine();

        // initialize engine
        engine.Initialize();

        // start running the engine
        engine.Run();
    }
);


module IGNITION
{
    // TODO: delete after not needing
    export const Interface = require('./Interface');
    


    /*
        Engine structure to ignite.
    */
    export class Engine
    {
        // if engine was initialized
        private _initialized: boolean;

        // main babylon scene
        public Scene: BABYLON.Scene;
        // main active camera
        public Camera: BABYLON.FreeCamera;
        // HTML canvas
        public Canvas: HTMLCanvasElement;
        // BABYLON engine
        public BabylonEngine: BABYLON.Engine;
        // lights manager (brightness, bulb, reflector)
        public LightsManager: JOLY.LightsManager;
        // mesh manager holds references to all objects in the scene
        public MeshManager: JOLY.MeshManager;




        constructor()
        {
            this._initialized = false;
            this.Canvas = document.getElementById('renderCanvas') as HTMLCanvasElement;
        }


        public Initialize(): void
        {
            this._initialized = true;
            this.BabylonEngine = new BABYLON.Engine(this.Canvas, true);
            this.Scene = new BABYLON.Scene(this.BabylonEngine);
            this.LightsManager = new JOLY.LightsManager(this.Scene);
            this.MeshManager = new JOLY.MeshManager(this.Scene, this.BabylonEngine);

            // set camera
            this.Camera = new BABYLON.FreeCamera("FreeCameraObject", new BABYLON.Vector3(0,0,0), this.Scene);
            // target the camera to scene origin
            this.Camera.setTarget(BABYLON.Vector3.Zero());
            // attach the camera to the canvas
            this.Camera.attachControl(this.Canvas, false);

            // set lights
            // create a basic light, aiming 0,1,0 - meaning, to the sky
            let light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0,1,0), this.Scene);
            this.LightsManager.AddLight(light);
    
            // create a built-in "sphere" shape; 
            var sphere = BABYLON.MeshBuilder.CreateSphere('sphere', {segments:16, diameter:2}, this.Scene);
        }

        // runs the engine
        public Run(): void
        {
            if(this._initialized === false)
            {
                throw new Error("Engine not initialized. Call Initialize() function before running engine.");
            }

        }
    }


}