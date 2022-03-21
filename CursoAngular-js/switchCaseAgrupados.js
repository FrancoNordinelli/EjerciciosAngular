let estacion;
let mes = 34;

switch (mes) {
    case 12:
    case 1:
    case 2:
        estacion = "Verano";
        break;
    case 3:
    case 4:
    case 5:
        estacion = "Otoño";
        break;
    case 6:
    case 7:
    case 8:
        estacion = "Invierno";
        break;
    case 9:
    case 10:
    case 11:
        estacion = "Primvavera";
        break;
    default:
        estacion = "No existe el mes";
        break;
}