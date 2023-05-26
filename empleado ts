class Empleado {
  public nombre: string;
  public apellidos: string;
  public identificacion: string;
  public estadoCivil: string;
  public anioIncorporacion: number;
  public despacho: string;

  constructor(
    nombre: string,
    apellidos: string,
    identificacion: string,
    estadoCivil: string,
    anioIncorporacion: number,
    despacho: string
  ) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.identificacion = identificacion;
    this.estadoCivil = estadoCivil;
    this.anioIncorporacion = anioIncorporacion;
    this.despacho = despacho;
  }

  public cambiarEstadoCivil(nuevoEstadoCivil: string): void {
    this.estadoCivil = nuevoEstadoCivil;
  }

  public reasignarDespacho(nuevoDespacho: string): void {
    this.despacho = nuevoDespacho;
  }

  public imprimirInformacion(): void {
    console.log("Nombre: " + this.nombre);
    console.log("Apellidos: " + this.apellidos);
    console.log("Identificación: " + this.identificacion);
    console.log("Estado Civil: " + this.estadoCivil);
    console.log("Año de Incorporación: " + this.anioIncorporacion);
    console.log("Despacho: " + this.despacho);
  }
}
