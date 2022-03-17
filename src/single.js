let Single = (function() {
    let instance = null;
    function Single(name) {
        this.name = name;
    }
    return function(name){
        if (!instance) {
            instance = new Single(name);
        }
        return instance;
    };
})();

let oA = new Single('hi');
let oB = new Single('hello');
console.log(oA===oB);