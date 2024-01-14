"use strict";
function firts(array) {
    return array[0];
}
function last(array) {
    return array[array.length - 1];
}
const pilots = ['like', 'biggs', 'dredge', 'han', 'solos'];
const firstPilot = firts(pilots);
const lastPilot = last(pilots);
//quando eu preciso que um tipo não seja estatíco e mude de acordo com a minha necessidade eu utilizo os genericos utilizando "<>"
//no caso de eu ter uma função com algum parametro que seja assim a sintaxe seria const function name<NameType>(name:NameType, money: number)
//e se eu quiser que ele herde as propriedades de outra função fica function name<NameType extends herdaDisso>(name:NameType, money: number)
//se precisar declara uma variavel que vc deseja mudar o tipo dela na função use const newVariable = name<NovoTipo> ('name', 12)
