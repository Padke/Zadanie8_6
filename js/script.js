var a = prompt('enter a value:');
var b = prompt('enter b value:');
var value = (a * a) - (2 * a * b) - (b * b);

console.log("tyle wychodzi z działania: " + value);

if (value > 0) {
    console.log ('wynik dodatni');
}
else if (value == 0) {
    console.log('wynik nieujemny i niedodatni, czyli 0');
}
else {
     console.log ('wynik ujemny');
}