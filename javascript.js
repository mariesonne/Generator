//Array med flere strenge, som er kommasepareret
//Hver streng indeholder et strikkeprojekt eller en strikkeguide

var guides = [
    '<h3>A cardigan!</h3>' + 'Challenge time! Make a cardigan ONLY out of our' + '<a href="http://nordicskyyarn.com/index.php/oulu/"> Oulu</a>' + ' yarn',
    
    '<h3>Socks</h3>' + 'Make your own comfy socs. Check out our ' + '<a href="http://nordicskyyarn.com/index.php/bergen/">Bergen</a>' + ' yarn, if you want socks with a nice play of colors!',
    
    '<h3>Hand dye your own yarn</h3>' + 'It\'s super fun and very easy! Just follow our ' + '<a href="http://nordicskyyarn.com/index.php/hand-dyeing-yarn/">guide</a>' + ' and create your own interpretation of the Nordic spirit.',
    
    '<h3>A soft scarf</h3>' + 'What\'s better than a super soft scarf? ' + 'We actually have a ' + '<a href="http://nordicskyyarn.com/index.php/soft-pennant-scarf/">guide</a>' + ' for that!',
    
    '<h3>Baby blanket!</h3>' + 'Try mixing ' + '<a href="http://nordicskyyarn.com/index.php/oulu/">Oulu</a>' + ' and ' + '<a href="http://nordicskyyarn.com/index.php/bergen/">Bergen</a>' + ' for a soft and colourful result!',
    
    '<h3>A scrunchie!</h3>' + 'It\'s a super fun small project! If you have any yarn "leftovers", feel free to use them!',
    
    '<h3>Make a simple hat!</h3>' + 'You can make a basic white hat out of ' + '<a href="http://nordicskyyarn.com/index.php/sundsvall/">Sundsvall</a>' + ' or hand-dye it in your favorite colors before!'  
    
]

// Funktion: Der skal vises en tilfældig streng projekt hver gang, der klikkes på knappen

function newGuide() {
var randomNumber = Math.floor(Math.random() * (guides.length)); // Der tilføjes en Math.random som parameter til Math.floor for at generer et tilfældigt tal. Math.random ganges med længden på mit array - så kan jeg tilføje og fjerne strenge uden at det påvirker funktionen. 
document.getElementById('guideDisplay').innerHTML = guides[randomNumber]; //Retter på dokument objekt modellen og udskifter placeholder-teksten med en tilfældig streng
}