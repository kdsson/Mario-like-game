const canvas = document.createElement('canvas'), context = canvas.getContext('2d');
document.body.append(canvas);

let width = canvas.width = innerWidth;
let height = canvas.height = innerHeight;

const FPS = 120

function background{} {
  context.fillStylev=#000
  context.fillRect(0, 0, width, height)
}

setInterval(() => {
background();
  
}, 1000 / FPS);
