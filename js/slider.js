if(document.body.offsetWidth <= 700) {
  let buttonNext = document.querySelector("#next-btn");
  let buttonPrev = document.querySelector("#prev-btn");
  let slider = document.querySelector(".blog__slides");

  let flag = true;
  let i = 1;
  let percent = 100;
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
      move = `calc(-${percent}%`;
      slider.style.transform = `translateX(${move})`;
      slider.style.transition = "2s";
      percent = percent + 100;
      i++;
    } else {
      move = `calc(-${percent}%`;
      slider.style.transform = `translateX(${move})`;
      slider.style.transition = "2s";
      percent = percent - 100;
      i--;
    };
  });

  buttonPrev.addEventListener("click", () => {
    flagCheck();
    if(flag == true) {
      move = `calc(-${percent}%`;
      slider.style.transform = `translateX(${move})`;
      slider.style.transition = "2s";
      percent = percent - 100;
      i++;
    } else {
      move = `calc(-${percent}%`;
      slider.style.transform = `translateX(${move})`;
      slider.style.transition = "2s";
      percent = percent + 100;
      i--;
    };
  });
} else if(document.body.offsetWidth >= 701) {
  let buttonNext = document.querySelector("#next-btn");
  let buttonPrev = document.querySelector("#prev-btn");
  let slider = document.querySelector(".blog__slides");

  let flag = true;
  let i = 1;
  let percent = 50;
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
      move = `calc(-${percent}%`;
      slider.style.transform = `translateX(${move})`;
      slider.style.transition = "2s";
      percent = percent + 50;
      i++;
    } else {
      move = `calc(-${percent}%`;
      slider.style.transform = `translateX(${move})`;
      slider.style.transition = "2s";
      percent = percent - 50;
      i--;
    };
  });

  buttonPrev.addEventListener("click", () => {
    flagCheck();
    if(flag == true) {
      move = `calc(-${percent}%`;
      slider.style.transform = `translateX(${move})`;
      slider.style.transition = "2s";
      percent = percent - 50;
      i++;
    } else {
      move = `calc(-${percent}%`;
      slider.style.transform = `translateX(${move})`;
      slider.style.transition = "2s";
      percent = percent + 50;
      i--;
    };
  });
}