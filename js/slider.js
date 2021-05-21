let buttonNext = document.querySelector("#next-btn");
let slider = document.querySelector(".blog__slider");
let buttonPrev = document.querySelector("#prev-btn");
let flag = true;
let i = 1;
let percent = 100;
let margin = 80;
let move

const flagCheck = () => {
  if(i === 2) {
    flag = false; 
  } else if(i === 0) {
    flag = true;
  };
};

buttonNext.addEventListener("click", () => {
  flagCheck();
  if(flag == true) {
    move = `calc(-${percent}% - ${margin}px)`;
    slider.style.left = move;
    slider.style.transition = "2s";
    percent = percent + 100;
    margin = margin + 80;
    i++;
  } else {
    move = `calc(-${percent}% - ${margin}px)`;
    slider.style.left = move;
    slider.style.transition = "2s";
    percent = percent - 100;
    margin = margin - 80;
    i--;
  };
});

buttonPrev.addEventListener("click", () => {
  flagCheck();
  if(flag == true) {
    move = `calc(-${percent}% - ${margin}px)`;
    slider.style.left = move;
    slider.style.transition = "2s";
    percent = percent - 100;
    margin = margin - 80;
    i++;
  } else {
    move = `calc(-${percent}% - ${margin}px)`;
    slider.style.left = move;
    slider.style.transition = "2s";
    percent = percent + 100;
    margin = margin + 80;
    i--;
  };
});
