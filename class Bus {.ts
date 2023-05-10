class Bus {
    private marca: string;
    private modelo: string;
    private capacidad: number;
    private año: number;

    constructor(marca: string = "", modelo: string = "", capacidad: number = 0, año: number = 0) {
        this.marca = marca;
        this.modelo = modelo;
        this.capacidad = capacidad;
        this.año = año;
    }

    public getMarca(): string {
        return this.marca;
    }

    public setMarca(marca: string): void {
        this.marca = marca;
    }

    public getModelo(): string {
        return this.modelo;
    }

    public setModelo(modelo: string): void {
        this.modelo = modelo;
    }

    public getCapacidad(): number {
        return this.capacidad;
    }

    public setCapacidad(capacidad: number): void {
        this.capacidad = capacidad;
    }

    public getAño(): number {
        return this.año;
    }

    public setAño(año: number): void {
        this.año = año;
    }

    public obtenerInformacion(): string {
        return `Marca: ${this.marca}\n` +
            `Modelo: ${this.modelo}\n` +
            `Capacidad: ${this.capacidad}\n` +
            `Año: ${this.año}`;
    }
}

// Programa principal
let bus1 = new Bus();
bus1.setMarca("Toyota");
bus1.setModelo("Costa azul");
bus1.setCapacidad(30);
bus1.setAño(2020);

let bus2 = new Bus("Chebroleth", "Los Bajos", 40, 2018);

console.log("Tipo de bus 1:");
console.log(bus1.obtenerInformacion());

console.log("Tipo de bus 2:");
console.log(bus2.obtenerInformacion());