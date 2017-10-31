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
