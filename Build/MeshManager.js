"use strict";
/// <reference path="Engine.ts" /> 
Object.defineProperty(exports, "__esModule", { value: true });
class MeshManager {
    constructor(scene, engine) {
        this._scene = scene;
        this._babylonEngine = engine;
        this._meshes = [];
    }
    // add mesh to array
    AddMesh(mesh) {
        this._meshes.push(mesh);
    }
}
exports.MeshManager = MeshManager;
