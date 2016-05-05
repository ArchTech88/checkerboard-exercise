// Your JS goes here



function getRandomColor() {
    var hexLetters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += hexLetters[Math.floor(Math.random() * 16)];
    }
    return color;
}




  var body = document.getElementsByTagName('body')[0]; //gradient

    for (var i = 0; i < 81; i++) {
      var tile = document.createElement('div');

      tile.style.width = '11.1%';
      tile.style.paddingBottom = '11.1%';
      tile.style.float = 'left';
      if (i % 2 === 0) {
        tile.style.backgroundColor = 	'rgba(0,0,255, '+(1 -.01*i) + ')'
      } else {
        tile.style.backgroundColor = 'rgba(255,0,150, '+(1 -.01*i) + ')'
      }
      body.appendChild(tile);
    }
