import{Auto} from "../autos/auto.js";



const auto = new Auto("bordo","ford","focus",2020);
const auto2 = new Auto("blanco","fiat","palio",2010);
const auto3 = new Auto("rojo","toyota","corolla",2022);
const auto4 = new Auto("azul","chevrolet","tracker",2023);

auto.imprimir();
auto2.imprimir();
auto3.imprimir();
auto4.imprimir();
auto.arrancar();
auto2.girarDerecha();
auto.acelerar();
auto4.bocina();
auto.acelerar();
auto2.acelerar();
auto2.acelerar();
auto2.acelerar();
auto2.apagar();
auto4.arrancar();
