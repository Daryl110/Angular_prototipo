class Mono {
    private _edad: number;

    constructor(edad: number) {
        this._edad = edad;
    }

    public get edad(): number {
        return this._edad;
    }

    public set edad(edad: number) {
        this._edad = edad;
    }
}

export class Persona extends Mono implements IHumano {
    private _nombre: string;

    constructor(nombre: string, edad: number) {
        super(edad);
        this._nombre = nombre;
    }

    public metodo() {
        console.log('interface Humano');
    }

    public get nombre(): string {
        return this._nombre;
    }

    public set nombre(nombre: string) {
        this._nombre = nombre;
    }

    public imprimir(): void {
        console.log('Nombre: ' + this._nombre);
    }
}

interface IHumano {
    metodo();
}
