let slider_list = document.querySelector('.slider__list');
let btn_left = document.querySelector('.slider__arrow-left');   
let btn_right = document.querySelector('.slider__arrow-right');

//  Начальное значение для свойства left (по сути - счётчик)
current = 0;


btn_left.addEventListener('click', to_left);
btn_right.addEventListener('click', to_right);

// Функция для левой кнопки слайдера
function to_left () {
  if (current > (-900)) {
    current -= 450;
    slider_list.style.left = current + "px";
  }
  return current;
}


// Функция для правой кнопки слайдера
function to_right () {
  if (current < 900 && current != 0) {
    current += 450;
    slider_list.style.left = current + "px";
  }
  return current;
}

// 900 - 2 карточки + margin
// 2 карточки, так как видимая область слайдера составляет 3 карточки.
// Всего карточек 5