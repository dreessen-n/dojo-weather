function remove(a) {
    console.log(a);
    var r = document.querySelector('.' + a);
    console.log(r);
    r.remove();
}

function loadWeather() {
    alert('Loading weather report...')
}


// Create 3 arrary to store temps and id values
// write function to change temps when button value changes
// static version - Robert said to rewrite to calculate temps!


// var cel = ['24&deg;', '18&deg;', '27&deg;', '19&deg;', '21&deg;', '16&deg;', '26&deg;', '21&deg;'];

// var far = ['75&deg;', '65&deg;', '80&deg;', '66&deg;', '69&deg;', '61&deg;', '78&deg;', '70&deg;'];

// var tempIds = ['h1', 'l1', 'h2', 'l2', 'h3', 'l3', 'h4', 'l4'];


// function changeTemps(element) {
//     if (element.value == 'f') {
//         for (var i = 0; i < 8; i++) {
//             document.getElementById(tempIds[i]).innerHTML = far[i];
//         }
//     } else {
//         for (var i = 0; i < 8; i++) {
//             document.getElementById(tempIds[i]).innerHTML = cel[i];
//         }
//     }
// }

// dynamic version of temp function

function calcF(C) {
    var F = ((9 * C) / 5) + 32;
    return Math.round(F);
}

function calcC(F) {
    var C = (5 * (F - 32)) /9;
    return Math.round(C);
}

function changeTemps(element) {
    if (element.value == 'f') {
        // convert to Fahrenheit
        for (var i = 0; i < 8; i++) {
            var x = document.getElementById('t' + [i]);
            console.log(x);
            var y = parseInt(x.innerHTML);
            console.log(y);
            x.innerHTML = calcF(y);
        }
    } else {
        for (var i = 0; i < 8; i++) {
            // convert to Celsius
            var x = document.getElementById('t' + [i]);
            var y = parseInt(x.innerHTML);
            x.innerHTML = calcC(y);
        }
    }
}