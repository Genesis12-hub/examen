// observer.ts

interface Observador {
    actualizar(pasajero: string, accion: string): void;
  }
  
  class ObservadorConsola implements Observador {
    actualizar(pasajero: string, accion: string): void {
      console.log(`Pasajero "${pasajero}" ha sido ${accion}`);
    }
  }
  
  export { Observador, ObservadorConsola };
