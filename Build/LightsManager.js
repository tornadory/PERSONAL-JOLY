"use strict";
/// <reference path="Engine.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
class LightsManager {
    constructor(scene) {
        this._scene = scene;
        this._lights = [];
    }
    // adds the light to array of lights
    AddLight(light) {
        this._lights.push(light);
    }
}
exports.LightsManager = LightsManager;
