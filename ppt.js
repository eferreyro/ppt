var nombre = "Emma";

var select = prompt(nombre + " "+" Elige 1 opcion 1= piedra, 2= papel, o 3 = tijera ?");
var pc;
var pcRandom = Math.random();
if (pcRandom = 0.66)
{
pc="2";
}
else
{
pc="3";
}
var juego = function (usuarioRandom,pcContenido)
{
if (usuarioRandom=="1")
{
if (pcContenido=="3")
{
console.log("Ganaste Piedra le gana a Tijeras");
}
else if (pcContenido=="2")
{
console.log("Perdiste Papel le gana a Piedra");
}
}

if (usuarioRandom=="2")
{
if (pcContenido=="1")
{
console.log("Ganaste Papel le gana a Piedra");
}
if (pcContenido=="3")
{
console.log("Perdiste Tijera le gana a Papel");
}
}

if (usuarioRandom=="3")
{
if (pcContenido=="2")
{
console.log("Ganaste Tijera le gana a Papel");
}
if (pcContenido=="1")
{
console.log("Perdiste Piedra le gana a Tijera");
}
} 
if (usuarioRandom===pcContenido)
{
console.log("Esto es un empate");
}
};
juego(select,pc);
