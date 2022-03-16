// JavaScript | this keyword | 3.31.31
console.clear();

// Final Ppoject
let elements = document.getElementsByName('cssProperty');
let div = document.getElementById('midify');


function set() {
    
    for (let i = 0; i < elements.length; i++) {
        let cssProperty = elements[i].getAttribute('id');
        let cssValue = elements[i].value;
        div.style[cssProperty] = cssValue;
    }
}
document.getElementById('set').addEventListener('click', set);
