import { writable } from 'svelte/store';
import { readable } from 'svelte/store';

export const pizzaGoombaCount = writable(0);
export const pizzaYoshiCount = writable(0);

export const goombaPizza = "Goomba's Special";
export const yoshiPizza = "Joshi's Veggi";

export const time = readable(new Date(), function start(set) {
	const interval = setInterval(() => {
		set(new Date());
	}, 1000);

	return function stop() {
		clearInterval(interval);
	};
});