function remove(a) {
    console.log(a);
    var r = document.querySelector('.' + a);
    console.log(r);
    r.remove();
}

function loadWeather() {
    alert('Loading weather reort...')
}


// Create 3 arrary to store temps and id values
// write function to change temps when button value changes


var cel = ['24&deg;', '18&deg;', '27&deg;', '19&deg;', '21&deg;', '16&deg;', '26&deg;', '21&deg;'];

var far = ['75&deg;', '65&deg;', '80&deg;', '66&deg;', '69&deg;', '61&deg;', '78&deg;', '70&deg;'];

var tempIds = ['h1', 'l1', 'h2', 'l2', 'h3', 'l3', 'h4', 'l4'];


function changeTemps(element) {
    if (element.value == 'f') {
        for (var i = 0; i < 8; i++) {
            document.getElementById(tempIds[i]).innerHTML = far[i];
        }
    } else {
        for (var i = 0; i < 8; i++) {
            document.getElementById(tempIds[i]).innerHTML = cel[i];
        }
    }
}