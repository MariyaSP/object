'use strict';
const selector = prompt('Укажите селектор');
const height = prompt('Укажите высоту') + 'px';
const width = prompt('Укажите ширину') + 'px';
const bg = prompt('Укажите цвет');
const fontSize = prompt('Укажите размер шрифта') + 'pt';
const text = prompt('текст блока');


const DomElement = function (selector, height, width, bg, fontSize) {

    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
};

DomElement.prototype.newElem = function () {
    const div = document.createElement('div');

    if (this.selector[0] == '.') {
        div.classList.add('block');
    }
    else { div.setAttribute('id', 'best') }

    div.style.height = this.height;
    div.style.width = this.width;
    div.style.backgroundColor = this.bg;
    div.style.fontSize = this.fontSize;
    div.textContent = text;

    return div;
}




const elem = new DomElement(selector, height, width, bg, fontSize);

const div = elem.newElem();

document.body.append(div);

console.log(div);