var JOLY;
(function (JOLY) {
    class Environment {
        constructor() {
        }
    }
    JOLY.Environment = Environment;
})(JOLY || (JOLY = {}));
var JOLY;
(function (JOLY) {
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
    JOLY.LightsManager = LightsManager;
})(JOLY || (JOLY = {}));
var JOLY;
(function (JOLY) {
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
    JOLY.MeshManager = MeshManager;
})(JOLY || (JOLY = {}));
var JOLY;
(function (JOLY) {
    class Neki {
        constructor() {
        }
        hello() {
            console.log("method dela");
            //JOLY.Interface.hello();
            console.log(JOLY);
        }
    }
    JOLY.Neki = Neki;
})(JOLY || (JOLY = {}));
