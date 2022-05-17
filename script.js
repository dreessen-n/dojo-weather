function remove(a) {
    console.log(a);
    var r = document.querySelector('.' + a);
    console.log(r);
    r.remove();
}