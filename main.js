let body = document.body;
let allElement = Array.from(document.querySelectorAll("*"));
let overlay = document.querySelector(".overlay");
let menuBar = document.querySelector(".menuBar");
let ul = document.querySelector("header nav ul");
let iconClose = document.querySelector(".close");
let basket = document.querySelector(".basket");
let box = document.querySelector("header .cart .basket .box");
let products = document.querySelector("header .cart .basket .box .products");
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

class Product{
    constructor(){
        this.name = "Fall Limited Edition Sneakers";
        this.image = "images/image-product-1-thumbnail.jpg";
        this.cost = 125;
        this.quantity = 3;
    }
    setName(name) {
        this.name = name;
    }
    setImage(image) {
        this.image = image;
    }
    setCost(cost) {
        this.cost = cost;
    }
    setQuantity(quantity) {
        this.quantity = quantity;
    }
    getName() {
        return this.name;
    }
    getImage() {
        return this.image;
    }
    getCost() {
        return this.cost;
    }
    getQuantity() {
        return this.quantity;
    }
    calculateCostTotal(){
        return this.cost*this.quantity;
    }
}

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

function createEl(tagName,className="",text="",attributeNames=[],attributeValues=[],childerns=[]){
    let el = document.createElement(tagName);
    className.split(" ").forEach(cl => {
        el.classList.add(cl);
    });
    el.innerHTML = text;
    let attributeLen = attributeNames.length;
    for (let i = 0; i < attributeLen; i++) {
        const attributeName = attributeNames[i];
        const attributeValue = attributeValues[i]
        el.setAttribute(attributeName,attributeValue);
    }
    if (childerns.length!==0){
        childerns.forEach(ch=>{
            el.appendChild(ch);
        });
    }
    return el;
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

add.addEventListener("click",e=>{
    let product = new Product();
    if (document.querySelector(".products").contains(document.querySelector(".empyt"))) {
        document.querySelector(".products .empyt").remove();
    }
    product.setQuantity(number.innerHTML);
    let srcImage = product.getImage();
    let Elimage = createEl("img","image","",["src"],[srcImage]);
    let productName = createEl("p","productName",product.getName());
    let coin = createEl("i","fa-solid fa-dollar-sign");
    let cost = createEl("p","cost",product.getCost(),[],[],[coin]);
    let cross = createEl("img","cross","",["src"],["images/icon-close.svg"]);
    let quantity = createEl("p","quantity",product.getQuantity());
    let conCost = createEl("div","conCost","",[],[],[coin,cost,cross,quantity]);
    let costTotal = createEl("p","costTotal",product.calculateCostTotal());
    let conCostAndCostTotal = createEl("div","conCostTotal","",[],[],[conCost,costTotal]);
    let Eldescribe = createEl("div","describe","",[],[],[productName,conCostAndCostTotal]);
    let del = createEl("img","delete","",["src"],["images/icon-delete.svg"],[]);
    let Elproduct = createEl("div","product","",[],[],[Elimage,Eldescribe,del]);
    
    products.appendChild(Elproduct);

});