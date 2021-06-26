// JavaScript | this keyword | 3.31.31
console.log(this);

let object = {
    prop: this,
    method: function () { return this; }
}

let array = [
    this,
    function () { return this }
]
function global() {
    return this;
}
global.call(object)