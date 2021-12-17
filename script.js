'use strict';

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
    div.style.position = this.position;
    div.style.top = this.top + 'px';
    div.style.left = this.left + 'px';

    return div;
}

const elem = new DomElement('.block', '100px', '100px', 'magenta', '15pt');
elem.position = "absolute";
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
    if (event.code == 'ArrowUp'&& elem.top >= 10) {
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