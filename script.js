// JavaScript | Gobal Scope & Inferred Globals
console.clear();
let engine = {
    maker: 'Ford',
    headGasket: {
        maker: 'Golf',
        pots: ['Piston_01', 'Piston_02']
    }
};
function runExpression(){
    let a = 10;
    function add(){
        console.log(engine);
    }
    add();
}
runExpression();