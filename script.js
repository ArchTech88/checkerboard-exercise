// Your JS goes here

var body = document.getElementsByTagName('body')[0]; //normal checkerboard

    for (var i = 0; i < 81; i++) {
      var div = document.createElement('div');

      div.style.width = '11.1%';
      div.style.paddingBottom = '11.1%';
      div.style.float = 'left';

      if (i % 2 === 0) {
        div.style.backgroundColor = 'math';
      } else {
        div.style.backgroundColor = 'black';
      }
      body.appendChild(div);
    }

function getRandomColor() {
    var hexLetters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += hexLetters[Math.floor(Math.random() * 16)];
    }
    return color;
}


  //
  // var body = document.getElementsByTagName('body')[0]; //gradient
  //
  //   for (var i = 0; i < 81; i++) {
  //     var tile = document.createElement('div');
  //
  //     tile.style.width = '11.1%';
  //     tile.style.paddingBottom = '11.1%';
  //     tile.style.float = 'left';
  //     if (i % 2 === 0) {
  //       tile.style.backgroundColor = 	'rgb(' +(255*(1 - i*.99)) + ',0,0)'
  //     } else {
  //       tile.style.backgroundColor = 'black';
  //     }
  //     body.appendChild(tile);
  //   }
