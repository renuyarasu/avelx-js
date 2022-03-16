// JavaScript | this keyword | 3.31.31
console.clear();

// Event Handlers

var select = document.getElementsByName('cars')[0];

select.onclick = function (event) {
    console.log(event);
}

function ClickCallback(event) {
    console.log('Click by the  ClickCallback');
}

select.addEventListener('click', ClickCallback);
select.removeEventListener('click', ClickCallback)