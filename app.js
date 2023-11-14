//calcular edad promedio de las personas registradas
let edad;
let continuar;
let total = 0;
let k = 0;
let promedio;

do {
  edad = +prompt("Ingrese edad: ");
  k = k + 1;
  total = total + edad;
  promedio = total / k;
  continuar = prompt("¿Desea ingresar otra edad? si/no");
  while (continuar !== "si" && continuar !== "no") {
    continuar = prompt('Ingresar "si" o "no"');
  }
} while (continuar === "si");

alert(`El promedio de edades es: $${promedio}`);
