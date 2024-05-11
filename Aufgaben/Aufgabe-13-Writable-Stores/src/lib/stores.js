import { writable } from 'svelte/store';
import { readable } from 'svelte/store';

//Variablen so abändern, dass sie zu writable stores werden
const pizzaGoombaCount = "TODO";
const pizzaYoshiCount = "TODO";

export const goombaPizza = "Goomba's Special";
export const yoshiPizza = "Joshi's Veggi";

//Variable so abändern, dass sie zu einem readable store werden, 
//der jede Sekunde seinen Wert automatisch ändert -> also sekundlich die aktuelle Uhrzeit anzeigt
export const time = "TODO"