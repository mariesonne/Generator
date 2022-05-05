var guides = [
    '<h3>Cardigan</h3>' + 'Tjek ' + '<a href="http://nordicskyyarn.com/index.php/oulu/">oulu</a>' + ' ud',
    'Socks',
    'Hand dye your own yarn'
]

function newGuide() {
var randomNumber = Math.floor(Math.random() * (guides.length));
document.getElementById('guideDisplay').innerHTML = guides[randomNumber];
}