class Programador extends Empleado {
  constructor(id, nombre, apellido, edad, lenguaje) {
    super(id, nombre, apellido, edad);
    this.lenguaje = lenguaje;
  }
}