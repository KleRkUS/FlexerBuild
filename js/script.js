const slider = document.getElementById('slides--inner'),
      main = document.getElementById('main'),
      height = window.inndeHeight || document.documentElement.clientHeight || body.clientHeight;
      buttons = document.getElementsByClassName('slides--buttons');

for (let button of buttons) {
    button.onclick = (e) => {
        if (button.getAttribute('data-direction') == 'left') {
          slide(false);
        } else {
          slide(true);
        }
    };
}

main.style.height = height + 'px';

let counter = 0,
    timer = setInterval(() => {

  slide(true);

}, 8000);

function slide(direction) {

  let offset;

  if (counter == 4 && direction) {
    offset = 0;
    counter = 1;
  } else if (counter == 0 && !direction) {
    counter = 3;
    offset = counter*100;
  } else if (direction) {
    offset = counter*100;
    counter++;
  } else if (!direction) {
    counter--;
    offset = counter*100;
  }

  slider.style.right = offset + '%';
  return;
}