// Aufgabe 2: Erstelle zwei Svelte-Stores. Einen writable store namens cart und einen derived store namens totalPrice.
import { /* dein Code hier */ } from "svelte/store";

// Erstelle einen writable store namens cart
export const cart = /* dein Code hier */([]);

// Erstelle einen derived store namens totalPrice
export const totalPrice = /* dein Code hier */(cart, ($cart) =>
  $cart.reduce((total, item) => total + item.price * item.quantity, 0)
);