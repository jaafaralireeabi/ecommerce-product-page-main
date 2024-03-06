let body = document.body;
let allElement = Array.from(document.querySelectorAll("*"));
let overlay = document.querySelector(".overlay");
let menuBar = document.querySelector(".menuBar");
let ul = document.querySelector("header nav ul");
let iconClose = document.querySelector(".close");
let basket = document.querySelector(".basket");
let box = document.querySelector("header .cart .basket .box");
let photoShow = document.querySelector(".photoShow");
let listProducts = document.querySelectorAll(".images .products img");
let images = document.querySelector(".landing .images");
let listSrc = [];
listProducts.forEach(e => {
    listSrc.push(e.src);
});
let minus = document.querySelector(".minus");
let plus = document.querySelector(".plus");
let number = document.querySelector(".number");
let add = document.querySelector(".add");
let previous = document.querySelector(".previous");
let next = document.querySelector(".next");
let landing = document.querySelector(".landing");
let header = document.querySelector("header");

function openOverlay(overlay) {
    overlay.classList.add("block");
}

function closeOverlay(overlay) {
    overlay.classList.remove("block");
}

function openUl(ul) {
    ul.style.transform = "translateX(0%)";
}

function closeUl(ul) {
    ul.style.transform = "translateX(-100%)";
}

function openElement(element) {
    element.style.display = "block";
}

function closeElement(element) {
    element.style.display = "none";
}

function changeSrc(photoShow, src) {
    photoShow.src = src;
}

function activeMode(e) {
    listProducts.forEach(ep => {
        ep.classList.remove("active");
    });
    e.classList.add("active");
}

function nextPhoto() {
    let thisProduct = "";
    let thisIndex = 0;
    listSrc.forEach(e => {
        if (photoShow.src === e) {
            thisProduct = e;
        }
    });
    thisIndex = listSrc.indexOf(thisProduct);
    if (thisIndex == listSrc.length - 1) {
        changeSrc(photoShow, listSrc[0]);
        activeMode(listProducts[0]);
    }
    else {
        changeSrc(photoShow, listSrc[thisIndex + 1]);
        activeMode(listProducts[thisIndex + 1]);
    }
}


menuBar.onclick = function () {
    openUl(ul);
    openOverlay(overlay);
    if (box.style.display=="block") {
        closeElement(box);
    }
}
iconClose.onclick = function () {
    closeUl(ul);
    closeOverlay(overlay);
}

document.querySelectorAll("nav ul li").forEach(e => {
    e.onclick = function () {
        closeUl(ul);
        closeOverlay(overlay);
    }
});

overlay.onclick = function () {
    closeOverlay(overlay);
    if (ul.style.transform === "translateX(0%)") {
        closeUl(ul);
    }
}

basket.onclick = function () {
    if (box.style.display=="none"||box.style.display=="") {
        openElement(box);
    }
    else {
        closeElement(box);
    }
}

document.querySelector(".logo").onclick = function () {
    if (box.style.display=="block") {
        closeElement(box);
    }
}

document.querySelector(".photoPerson").onclick = function () {
    if (box.style.display=="block") {
        closeElement(box);
    }
}

ul.onclick = function () {
    if (box.style.display=="block") {
        closeElement(box);
    }
}

landing.onclick = function () {
    if (box.style.display=="block") {
        closeElement(box);
    }
}

photoShow.onclick = function () {
    // let imagesZoom = Object.assign(images);
    landing.appendChild(imagesZoom);
    console.log(imagesZoom);
}

listProducts.forEach(e => {
    e.onclick = function () {
        changeSrc(photoShow, this.src);
        activeMode(e);
    }
});

previous.onclick = function () {
    let thisProduct = "";
    let thisIndex = 0;
    listSrc.forEach(e => {
        if (photoShow.src === e) {
            thisProduct = e;
        }
    });
    thisIndex = listSrc.indexOf(thisProduct);
    if (thisIndex == 0) {
        changeSrc(photoShow, listSrc[listSrc.length - 1]);
        activeMode(listProducts[listSrc.length - 1]);
    }
    else {
        changeSrc(photoShow, listSrc[thisIndex - 1]);
        activeMode(listProducts[thisIndex - 1]);
    }
}

next.onclick = function () {
    nextPhoto();
}

setInterval(function () {
    nextPhoto();
}, 5000);

minus.onclick = function () {
    if (number.innerHTML != 0) {
        number.innerHTML--;
    }
}
plus.onclick = function () {
    number.innerHTML++;
}

cl