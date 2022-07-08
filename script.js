// const bgImageEl = document.getElementById("bg-image");

// window.addEventListener("scroll", () => {
//   updateImage();
// });

// function updateImage() {
//   bgImageEl.style.opacity = 1 - window.pageYOffset / 900;
//   bgImageEl.style.backgroundSize = 160 - window.pageYOffset / 12 + "%";
// };

const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}

const logocontainer = document.getElementsByClassName("logo-container")[0];
const logo = document.getElementsByClassName("logo")[0];
const payoffContainer = document.getElementsByClassName("payoff-container")[0];
const payoff = document.getElementsByClassName("payoff")[0];
const headerDiv = document.getElementsByClassName("header-div")[0];


window.addEventListener("scroll", intro);

function intro(){
  const triggerBottom = 20;

  const logoTop = logocontainer.getBoundingClientRect().top;
console.log(logoTop)

  if (logoTop == triggerBottom) {
     //logocontainer.classList.remove("logo-container-transition");
     payoffContainer.classList.remove("payoff-cointainer-transition");
     logo.classList.remove("logo-transition");
    
  } else {
    //logocontainer.classList.add("logo-container-transition");
    payoffContainer.classList.add("payoff-cointainer-transition");
    logo.classList.add("logo-transition");
  }
}

window.addEventListener("scroll", navbar);

function navbar(){
  const triggerBottom = 100;

  const headerBottom = headerDiv.getBoundingClientRect().bottom;
  console.log(headerBottom);

if(headerBottom<triggerBottom){
  console.log("if");
  headerDiv.classList.add("header-div-transition");
}
else{
  console.log("else");
  headerDiv.classList.remove("header-div-transition");
}
  
}

setTimeout(() => {
  payoff.classList.remove("hidden-text");
  payoff.classList.add("text-white");
}, 3000);