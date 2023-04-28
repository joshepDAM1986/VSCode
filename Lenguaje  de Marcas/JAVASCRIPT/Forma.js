class Forma {
    tipo = "";
    color = "";

    constructor(tipo, color)
    {
        this.tipo = tipo;
        this.color = color;
    }

    toString() {
        return `La forma de tipo <span style='color:${this.color}; color:${this.tipo}'>${this.tipo}</span> tiene un`;
    }
}

class Cuadrado extends Forma{
    lado=0;
    
    constructor(tipo,color,lado){
        super(tipo,color);
        this.lado=lado;
    }

    calcularArea(){
        return this.lado*this.lado;
    }

    toString()
    {
        return `${super.toString()} area de ${this.calcularArea()}`;
    }
}

class Circulo extends Forma {
    centro=0;
    radio=0;

    constructor(tipo,color,centro,radio){
        super(tipo,color);
        this.centro=centro;
        this.radio=radio;
    }

    calcularArea(){
        return (this.radio*this.radio)*Math.PI;
    }

    toString() {
        return `${super.toString()} area de ${this.calcularArea()}`;
    }
}

class Triangulo extends Forma {
    base=0;
    altura=0;

    constructor(tipo,color,base,altura){
        super(tipo,color);
        this.base=base;
        this.altura=altura;
    }

    calcularArea(){
        return (this.base*this.altura)/2;
    }

    toString() {
        return `${super.toString()} area de ${this.calcularArea()}`;
    }
}