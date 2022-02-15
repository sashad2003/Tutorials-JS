'use strict';

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.width * this.height;
    }
}

const square = new Rectangle(10, 10);
console.log(square.calcArea());


class ColoredRectangleWithText extends Rectangle{
    constructor(height, width, text, bgColor){
        super(height,width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps(){
        console.log(`Текст: ${this.text}, Цвет: ${this.bgColor}`);
    }
}

const colorBox = new ColoredRectangleWithText(10,20,'Hello World!', 'Blue');

colorBox.showMyProps();
console.log(colorBox.calcArea());

