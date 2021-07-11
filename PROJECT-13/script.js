//  text animation area

let texts = ["Web Designer", "Web Developer", "Graphic Designer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    document.querySelector(".typing").textContent = letter;
    if (letter.length == currentText.length) {
        count++
        index = 0;
    }
    setTimeout(type, 400);

}());

// image animation


let images = ["01.png", "men5.png"];
let firstImg = document.querySelector("#images");
let i = 0;

function update() {
    i++
    if (i >= images.length) {
        i = 0
        firstImg.src = images[i];
    }
    else {
        firstImg.src = images[i]
    }
}
setInterval(update, 5000)




//    navbar animation

const bar = document.querySelector(".bar_3");
bar.addEventListener("click", function () {
    let navbar = document.querySelector(".navBar_area");
    navbar.classList.toggle("anim");
});

  /*  list li toogle */
let navbarList = document.querySelector(".list");
let list = navbarList.children;
Array.from(list).forEach(element => {
        element.addEventListener("click", function () {
        let navbar = document.querySelector(".navBar_area");
        navbar.classList.toggle("anim")
    });
});