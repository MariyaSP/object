'use strict';

const DomElement = function (selector, height, width, bg, fontSize, position) {

    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.position = position;
};

DomElement.prototype.newElem = function () {
    const elems = document.createElement('div');

    if (this.selector[0] == '.') {
        const elems = document.createElement('div');
        elems.classList.add('block');
    }
    else {
        const elems = document.createElement('p');
        elems.setAttribute('id', 'best')
    }

    elems.style.cssText = `
    height:${this.height}px; 
    width:${this.width}px; 
    background-color:${this.bg};
    font-size:${this.fontSize};
    top:${this.top}px;
    left:${this.left}px;
    position:${this.position};
    `;

    return elems;
}

const elem = new DomElement('.block', '100', '100', 'magenta', '15pt', 'absolute');

elem.top = 0;
elem.left = 0;

document.addEventListener("DOMContentLoaded", () => {
    const div = elem.newElem();
    document.body.append(div);
});

document.addEventListener('keydown', function (event) {
    if (event.code == 'ArrowDown') {
        elem.top += 10;
    }
    if (event.code == 'ArrowUp' && elem.top >= 10) {
        elem.top -= 10;
    }
    if (event.code == 'ArrowRight') {
        elem.left += 10;
    }
    if (event.code == 'ArrowLeft' && elem.left >= 10) {
        elem.left -= 10;
    }

    document.body.innerHTML = "";
    document.body.append(elem.newElem())

});