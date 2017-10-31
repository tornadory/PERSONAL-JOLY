var JOLY;
(function (JOLY) {
    class Environment {
        constructor() {
        }
        hello() {
        }
    }
    JOLY.Environment = Environment;
    function hello() {
        console.log("hello");
    }
    JOLY.hello = hello;
})(JOLY || (JOLY = {}));
