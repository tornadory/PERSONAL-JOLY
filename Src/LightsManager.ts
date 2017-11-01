/// <reference path="Engine.ts" />

export class LightsManager
{
    // scene
    private _scene: BABYLON.Scene;
    // list of all lights in the scene
    private _lights: BABYLON.Light[];


    constructor(scene: BABYLON.Scene)
    {
        this._scene = scene;
        this._lights = [];
    }
    

    // adds the light to array of lights
    public AddLight(light: BABYLON.Light): void
    {
        this._lights.push(light);
    }



}