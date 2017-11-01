/// <reference path="Engine.ts" /> 

export class MeshManager
{
    // scene
    private _scene: BABYLON.Scene;
    // engine
    private _babylonEngine: BABYLON.Engine;
    // array of meshes
    private _meshes: BABYLON.Mesh[];


    constructor(scene: BABYLON.Scene, engine: BABYLON.Engine)
    {
        this._scene = scene;
        this._babylonEngine = engine;
        this._meshes = [];
    }


    // add mesh to array
    public AddMesh(mesh: BABYLON.Mesh): void
    {
        this._meshes.push(mesh);
    }


}