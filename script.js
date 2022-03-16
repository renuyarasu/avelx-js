// JavaScript | this keyword | 3.31.31
console.clear();

// Var, Const & Let ES6
for (let i = 0; i < 5; i++) {
    var varName = 'Value reference in memory!';
    let letName = 'Scoped value!';
    const constName = 'Constant value in memory!';
}
console.log(varName); // Value reference in memory!
console.log(letName); // letName is not defined
console.log(constName); // constName is not defined
