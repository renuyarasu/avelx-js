// JavaScript | 'this' keyword
console.clear();

var object = {
    prop: this,
    embed: {
        method: function () {
            return this;
        },
    }
};
var array = [
    this,
    function () {
        return this;
    }
];
function global() {
    return this;
};
global.call(object);

console.log(object.embed.method());