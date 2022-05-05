var guides = [
    '<h3>A cardigan!</h3>' + 'Challenge time! Make a cardigan ONLY out of our' + '<a href="http://nordicskyyarn.com/index.php/oulu/"> Oulu</a>' + ' yarn',
    
    '<h3>Socks</h3>' + 'Make your own comfy socs. Check out our ' + '<a href="http://nordicskyyarn.com/index.php/bergen/">Bergen</a>' + ' yarn, if you want socks with a nice play of colors!',
    
    '<h3>Hand dye your own yarn</h3>' + 'It\'s super fun and very easy! Just follow our ' + '<a href="http://nordicskyyarn.com/index.php/hand-dyeing-yarn/">guide</a>' + ' and create your own interpretation of the Nordic spirit.',
    
]

function newGuide() {
var randomNumber = Math.floor(Math.random() * (guides.length));
document.getElementById('guideDisplay').innerHTML = guides[randomNumber];
}